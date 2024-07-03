# Network Scan

That tool provides feedback about banners and vulnerable services of a network indicated.

It consist of **main** file, to launch the scan, and **network_analyzer** with main class and those methods included.
The results are trhown with easy UI table, using rich library.

```
# Requirements.txt

markdown-it-py==3.0.0
mdurl==0.1.2
Pygments==2.18.0
rich==13.7.1
scapy==2.5.0
setuptools==69.5.1
tqdm==4.66.4
wheel==0.43.0
```

---

```
# main.py

from network_analyzer import NetworkAnalyzer
import argparse


if __name__ == "__main__":
    # Arguments
    parser = argparse.ArgumentParser(description="Scans the network to check all hosts up")
    parser.add_argument('-n', '--network', type=str,
                        help="Network or IP to be scanned"
                        )
    args = parser.parse_args()

    # Run the scan
    analyzer = NetworkAnalyzer(args.network)
    services = analyzer.services_scan()
    analyzer.pretty_print(services, data_type="services")
```

```
# network_analyzer.py

import socket
import ipaddress
from rich.console import Console
from rich.table import Table
from scapy.all import *
import logging

# Loading UI bar
from tqdm import tqdm

# Multi threading
from concurrent.futures import ThreadPoolExecutor

# Deactivate warning outputs for Scapyu
logging.getLogger("scapy.runtime").setLevel(logging.ERROR)

# ----------------------------------------------------------------------------

class NetworkAnalyzer:
    
    def __init__(self, network_range: str, timeout: int=1) -> None:
        self.network_range = network_range
        self.timeout = timeout

    def _scan_host_sockets(self, ip, port=1000):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(self.timeout)
                s.connect((ip, port))
                return (port, True)
        except (socket.timeout, socket.error):
            return (port, False)
        
    def _scan_hosts_scapy(self, ip, scan_ports=(135, 445, 139)):
        for port in scan_ports:
            packet = IP(dst=ip)/TCP(dport=port, flags="S", window=0x4001, options=[("MSS", 1460)])
            response, _ = sr(packet, timeout=self.timeout, verbose=0)
            if response:
                return (ip, True)
        return (ip, False)
    
    def hosts_scan_arp(self):
        hosts_up = []
        network = ipaddress.ip_network(self.network_range, strict=False)
        arp_request = Ether(dst="ff:ff:ff:ff:ff:ff") / ARP(pdst=str(network))
        response, _ = tqdm(srp(arp_request, timeout=self.timeout, iface_hint=str(network[1]), verbose=0), desc="Scanning with ARP")
        for _, recieved in response:
            hosts_up.append(recieved.psrc)
        return hosts_up
        
    def hosts_scan(self, scan_ports=(135,445,139)):
        network = ipaddress.ip_network(self.network_range, strict=False)
        hosts_up = []
        with ThreadPoolExecutor(max_workers=100) as executor:
            futures = {executor.submit(self._scan_hosts_scapy, str(host), scan_ports): host for host in tqdm(network.hosts(), desc="Scanning hosts")}

            for future in tqdm(futures, desc="Obtaining results"):
                # Check if second value of future is True as defined before
                if future.result()[1]:
                    hosts_up.append(future.result()[0])

        return hosts_up
    
    def ports_scan(self, port_range=(0, 9999)):
        active_hosts = self.hosts_scan()
        all_open_ports = {}
        with ThreadPoolExecutor(max_workers=100) as executor:
            for ip in active_hosts:
                futures = []
                for port in tqdm(range(*port_range), desc=f"Scanning PORTS in {ip}"):
                    future = executor.submit(self._scan_host_sockets, ip, port)
                    futures.append(future)
                open_ports = [future.result()[0] for future in futures if future.result()[1]]
                if open_ports:
                    all_open_ports[ip] = open_ports
            return all_open_ports
        
    def get_banner(self, ip, port):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(self.timeout)
                s.connect((ip, port))
                s.send(b'Hello\r\n')
                return s.recv(1024).decode().strip()
        except Exception as e:
            return str(e)
        
    def services_scan(self, port_range=(0, 9999)):
        active_hosts = self.hosts_scan()
        service_info = {}
        with ThreadPoolExecutor(max_workers=100) as executor:
            for ip in active_hosts:
                futures = []
                service_info[ip] = {}
                for port in tqdm(range(*port_range), desc=f"Obtaining BANNERS in ip {ip}"):
                    future = executor.submit(self.get_banner, ip, port)
                    futures.append((future, port))
                for future, port in futures:
                    result = future.result()
                    if result and 'timed out' not in result and 'refused' not in result and 'No route to host' not in result:
                        service_info[ip][port] = result
        return service_info
    
    def pretty_print(self, data, data_type="hosts"):
        console = Console()
        table = Table(show_header=True, header_style="bold #007DE9")

        if data_type == "hosts":
            table.add_column("Hosts Up", style="bold green")
            for host in data:
                table.add_row(host, end_section=True)

        elif data_type == "ports":
            table.add_column("IP Adress", style="bold #af00ff")
            table.add_column("Open ports", style="#8FCE00")
            for ip, ports in data.items():
                ports_str = ", ".join(map(str, ports))
                table.add_row(ip, ports_str, end_section=True)

        elif data_type == "services":
            table.add_column("IP Adress", style="bold #af00ff")
            table.add_column("Port", style="#8FCE00")
            table.add_column("Service", style="yellow")
            for ip, services in data.items():
                for port, service in services.items():
                    table.add_row(ip, str(port), service, end_section=True)

        
        console.print(table)

```