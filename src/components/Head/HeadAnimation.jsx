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
            }, 3700); // Затримка перед зникненням тексту господаря
        });

        greetingWoman.addEventListener('animationend', () => {
            setTimeout(() => {
                greetingWoman.style.animation = 'fadeOut 1s ease-out forwards';
                greetingWoman.addEventListener('animationend', () => {
                    setShowSlider(true); // Показуємо слайдер після слів господині
                });
            }, 3700); // Затримка перед зникненням тексту господині
        });
    }, []);

    const handleSkip = () => {
        setShowSlider(false); // Закриваємо слайдер при натисканні кнопки "Пропустити"
    };

    return (
        <div className="header">
            <img src={imgHead} alt="" className="header__img" />

            <div className="header__site-title-wrapper" ref={titleRef}>
                <p className="header__site-title">
                    Павільйон чайної церемонії
                </p>
            </div>

            <img src={imgMan} alt="" className="header__img-man" ref={manRef} />
            <img src={imgWoman} alt="" className="header__img-woman" ref={womanRef} />

            <div className="header__greeting">
                <div className="header__greeting-box header__greeting-box_man" ref={greetingManRef}>
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

                <div className="header__greeting-box header__greeting-box_woman" ref={greetingWomanRef}>
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

                {showSlider && <SliderTour onSkip={handleSkip} />}
            </div>
        </div>
    );
};

























// import { useEffect } from 'react';
// import imgHead from '../../img/head.jpg';
// import imgMan from '../../img/man.png';
// import imgWoman from '../../img/woman.png';

// export const HeadAnimation = () => {
//     useEffect(() => {
//         const man = document.querySelector('.header__img-man');
//         const woman = document.querySelector('.header__img-woman');
//         const title = document.querySelector('.header__site-title-wrapper');
        
//         man.style.animationPlayState = 'running';
//         woman.style.animationPlayState = 'running';
//         title.style.animationPlayState = 'running';
//     }, []);

//     return (
//         <div className="header">
//             <img src={ imgHead } alt="" className="header__img" />

//             <div className="header__site-title-wrapper">
//                 <p className="header__site-title">
//                     Павільйон чайної церемонії
//                 </p>
//             </div>

//             <img src={ imgMan } alt="" className="header__img-man" />
//             <img src={ imgWoman } alt="" className="header__img-woman" />

//             <div className="header__greeting">
//                 <div className="header__greeting_box">
//                     <p className="header__greeting_text">
//                         <span className="text-bold text-center">
//                             Ласкаво просимо до 
//                             <br />
//                             Павільйону чайної церемонії!
//                         </span>
//                         <br />
//                         <br />
//                         Як господар радий вітати вас у нашому затишному куточку, 
//                         де поєднуються традиції та гармонія. У нашому Павільйоні 
//                         кожна чашка чаю розкриває свої таємниці, а кожен ковток 
//                         приносить спокій і мудрість. Насолоджуйтесь атмосферою 
//                         і дозвольте чаю повести вас у світ душевної рівноваги 
//                         та натхнення.
//                     </p>
//                 </div>

//                 <div className="header__greeting_box">
//                     <p className="header__greeting_text">
//                         <span className="text-bold text-center">
//                             Вітаю вас, дорогі гості!
//                         </span>
//                         <br />
//                         <br />
//                         Я господиня цього Павільйону. Дозвольте провести вас у 
//                         коротку подорож нашими сторінками.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };