import React, { useEffect, useRef } from 'react';

export const Navigation = () => {
    const scrollToTopBtnRef = useRef(null);
    const scrollToBottomBtnRef = useRef(null);

    useEffect(() => {
        const scrollToTopBtn = scrollToTopBtnRef.current;
        const scrollToBottomBtn = scrollToBottomBtnRef.current;

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        const scrollToBottom = () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        };

        const handleScroll = () => {
            if (window.pageYOffset > 450) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }

            if (window.pageYOffset < document.body.scrollHeight - window.innerHeight - 150) {
                scrollToBottomBtn.style.display = 'block';
            } else {
                scrollToBottomBtn.style.display = 'none';
            }
        };

        scrollToTopBtn.style.display = 'none';
        scrollToBottomBtn.style.display = 'none';

        scrollToTopBtn.addEventListener('click', scrollToTop);
        scrollToBottomBtn.addEventListener('click', scrollToBottom);
        window.addEventListener('scroll', handleScroll);

        return () => {
            scrollToTopBtn.removeEventListener('click', scrollToTop);
            scrollToBottomBtn.removeEventListener('click', scrollToBottom);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="scrollToTopBtn" className="scroll scroll-top" ref={ scrollToTopBtnRef }></div>
            
            <div id="scrollToBottomBtn" className="scroll scroll-bottom" ref={ scrollToBottomBtnRef }></div>
        </>
    );
};


