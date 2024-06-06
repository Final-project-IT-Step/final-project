import { useEffect, useRef } from "react";

export const useEscortToComponent = (value) => {
    const destination = useRef(null);
    const topDestionation = useRef(null);

    useEffect(() => {
        destination?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [value])

    useEffect(() => {
        topDestionation?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [value])

    return { destination, topDestionation }
}