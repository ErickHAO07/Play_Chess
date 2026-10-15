import { useEffect, useRef, useState } from "react";

export function useElementReveal(threshold = 0.15) {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        })
    })
}