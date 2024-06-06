import { useEffect, useRef } from "react";
import { scrollToBottom, scrollToTop } from "../utils";

export const useScrollPageRef = () => {
    const scrollToTopBtnRef = useRef(null);
    const scrollToBottomBtnRef = useRef(null);

    useEffect(() => {
        const scrollToTopBtn = scrollToTopBtnRef.current;
        const scrollToBottomBtn = scrollToBottomBtnRef.current;
        const scrollTopBtnStyle = scrollToTopBtn.style
        const scrollBottomBtnStyle = scrollToBottomBtn.style

        const handleScroll = () => {
            const offsetY = window.pageYOffset
            const width = window.innerWidth;
            const scrollHeight = document.body.scrollHeight
            const innerHeight = window.innerHeight;
            if (width <= 650) {
                return
            }
            
            offsetY > 450
                ? scrollTopBtnStyle.display = 'block'
                : scrollTopBtnStyle.display = 'none'
            
            offsetY < scrollHeight - innerHeight - 150
                ? scrollBottomBtnStyle.display = 'block'
                : scrollBottomBtnStyle.display = 'none'

        };

        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 650) {
                scrollTopBtnStyle.display = 'none'
                scrollBottomBtnStyle.display = 'none'
            } else {
                scrollTopBtnStyle.display = 'block'
                scrollBottomBtnStyle.display = 'block'
            }
        }

        scrollToTopBtn.style.display = 'none';
        scrollToBottomBtn.style.display = 'none';

        scrollToTopBtn.addEventListener('click', scrollToTop);
        scrollToBottomBtn.addEventListener('click', scrollToBottom);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            scrollToTopBtn.removeEventListener('click', scrollToTop);
            scrollToBottomBtn.removeEventListener('click', scrollToBottom);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollToBottomBtnRef, scrollToTopBtnRef }
}