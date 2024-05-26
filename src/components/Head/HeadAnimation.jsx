import { useEffect, useRef, useState } from 'react';
import imgHead from '../../img/head.jpg';
import imgMan from '../../img/man.png';
import imgWoman from '../../img/woman.png';
import { SliderTour } from './SliderTour';

export const HeadAnimation = () => {
    const [showSlider, setShowSlider] = useState(false);

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
    }, []);

    const handleSkip = () => {
        setShowSlider(false);
    };

    return (
        <div className="header">
            <img src={ imgHead } alt="" className="header__img" />

            <div className="header__site-title-wrapper" ref={ titleRef }>
                <p className="header__site-title">
                    Павільйон чайної церемонії
                </p>
            </div>

            <img src={ imgMan } alt="" className="header__img-man" ref={ manRef } />
            <img src={ imgWoman } alt="" className="header__img-woman" ref={ womanRef } />

            <div className="header__greeting">
                <div className="header__greeting-box header__greeting-box_man" ref={ greetingManRef }>
                    <p className="header__greeting-text">
                        <span className="text-bold text-center">
                            Ласкаво просимо до 
                            <br />
                            Павільйону чайної церемонії!
                        </span>
                        <br />
                        <br />
                        Як господар радий вітати вас у нашому затишному куточку, 
                        де поєднуються традиції та гармонія.
                    </p>
                </div>

                <div className="header__greeting-box header__greeting-box_woman" ref={ greetingWomanRef }>
                    <p className="header__greeting-text">
                        <span className="text-bold text-center">
                            Вітаю вас, дорогі гості!
                        </span>
                        <br />
                        <br />
                        Я господиня цього Павільйону. Дозвольте провести вас у 
                        коротку подорож нашими сторінками.
                    </p>
                </div>

                { showSlider && <SliderTour onSkip={handleSkip} /> }
            </div>
        </div>
    );
};


