/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    assetPrefix: process.env.URL ? process.env.URL : undefined,
  };
  
  export default nextConfig;