import { useEffect, useRef } from "react";

export const useGetPavilionRef = () => {
    const bgdRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => {
        const currentBgdRef = bgdRef.current;
        const currentAboutRef = aboutRef.current;

        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, options);

        if (currentBgdRef) observer.observe(currentBgdRef);
        if (currentAboutRef) observer.observe(currentAboutRef);

        return () => {
            if (currentBgdRef) observer.unobserve(currentBgdRef);
            if (currentAboutRef) observer.unobserve(currentAboutRef);
        };
    }, []);

    return { bgdRef, aboutRef }
}