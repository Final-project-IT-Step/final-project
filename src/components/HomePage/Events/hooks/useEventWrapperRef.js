import { useEffect, useRef } from "react";

export const useEventWrapperRef = () => {

    const eventsWrapperRef = useRef(null);

    useEffect(() => {
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

        const eventBlocks = eventsWrapperRef.current.querySelectorAll('.events__block');
        eventBlocks.forEach(block => {
            observer.observe(block);
        });

        return () => {
            eventBlocks.forEach(block => {
                observer.unobserve(block);
            });
        };
    }, []);

    return { eventsWrapperRef }
}