import React from 'react';
import { useScrollPageRef } from './hooks';

export const Navigation = () => {
    const { scrollToBottomBtnRef, scrollToTopBtnRef } = useScrollPageRef();

    return (
        <>
            <div id="scrollToTopBtn" className="scroll scroll-top" ref={ scrollToTopBtnRef }></div>
            
            <div id="scrollToBottomBtn" className="scroll scroll-bottom" ref={ scrollToBottomBtnRef }></div>
        </>
    );
};


