import { useEffect, useRef } from "react";

export const useGetAnimationAttr = ({ setShowSlider }) => {
    const manRef = useRef(null);
    const womanRef = useRef(null);
    const titleRef = useRef(null);
    const greetingManRef = useRef(null);
    const greetingWomanRef = useRef(null);

    useEffect(() => {
        const man = manRef.current;
        const woman = womanRef.current;
        const title = titleRef.current;
        const greetingMan = greetingManRef.current;
        const greetingWoman = greetingWomanRef.current;

        man.style.animationPlayState = 'running';
        woman.style.animationPlayState = 'running';
        title.style.animationPlayState = 'running';

        man.addEventListener('animationend', () => {
            greetingMan.style.animationPlayState = 'running';
        });

        greetingMan.addEventListener('animationend', () => {
            setTimeout(() => {
                greetingMan.style.animation = 'fadeOut 1s ease-out forwards';
                greetingMan.addEventListener('animationend', () => {
                    greetingWoman.style.animationPlayState = 'running';
                });
            }, 3700);
        });

        greetingWoman.addEventListener('animationend', () => {
            setTimeout(() => {
                greetingWoman.style.animation = 'fadeOut 1s ease-out forwards';
                greetingWoman.addEventListener('animationend', () => {
                    setShowSlider(true);
                });
            }, 3700);
        });
    }, [setShowSlider]);


    return { manRef, womanRef, titleRef, greetingManRef, greetingWomanRef }
}