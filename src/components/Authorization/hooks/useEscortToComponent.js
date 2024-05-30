import { useEffect, useRef } from "react";

export const useEscortToComponent = (value) => {
    const destination = useRef(null);

    useEffect(() => {
        destination?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [value])

    return { destination }
}