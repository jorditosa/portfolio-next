import { useState, useEffect, ReactNode } from 'react';
import './typewriter.css';

interface Props {
    children: ReactNode;
    delay: number;
}

export default function TypeWriter({ children, delay }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer); 
    }, [delay]);

    return (
        <div className="py-1 flex">
            {isVisible && <div className="typewriter">
                {children}
            </div>}
        </div>
    );
}
