import { useEffect, useRef } from "react";

export const useScrollToTop = (start) => {
    const commentsBlockRef = useRef(null);
    useEffect(() => commentsBlockRef?.current?.scrollTo(0, 0), [start])

    return { commentsBlockRef }
}