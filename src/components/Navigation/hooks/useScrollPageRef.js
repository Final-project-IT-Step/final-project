import { useEffect, useRef } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { scrollToBottom } from "../utils/scrollToBottom";

export const useScrollPageRef = () => {
    const scrollToTopBtnRef = useRef(null);
    const scrollToBottomBtnRef = useRef(null);

    useEffect(() => {
        const scrollToTopBtn = scrollToTopBtnRef.current;
        const scrollToBottomBtn = scrollToBottomBtnRef.current;

        const handleScroll = () => {
            const offsetY = window.pageYOffset
            const scrollTopBtnStyle = scrollToTopBtn.style
            const scrollBottomBtnStyle = scrollToBottomBtn.style
            const scrollHeight = document.body.scrollHeight
            const innerHeight = window.innerHeight;
            
            offsetY > 450
                ? scrollTopBtnStyle.display = 'block'
                : scrollTopBtnStyle.display = 'none'
            
            offsetY < scrollHeight - innerHeight - 150
                ? scrollBottomBtnStyle.display = 'block'
                : scrollBottomBtnStyle.display = 'none'

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

    return { scrollToBottomBtnRef, scrollToTopBtnRef }
}