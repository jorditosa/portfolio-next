'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './FadeLateral.module.css'

export default function FadeLateralAnimation({children, ...props}) {
    const ref = useRef()
    const [elementIsVisible, setElementIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                setElementIsVisible(true)
                observer.unobserve(ref.current)
            }
        })

        observer.observe(ref.current)
    }, [])
    
    return (
        <div 
        ref={ref}
        className={`${elementIsVisible ? styles.fadeLateral : 'opacity-0'} `}>
            {children}
        </div>
    );
}