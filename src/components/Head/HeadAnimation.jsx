import { useState } from 'react';
import imgHead from '../../img/head.jpg';
import imgMan from '../../img/man.png';
import imgWoman from '../../img/woman.png';
import { SliderTour } from './SliderTour/SliderTour';
import { useGetAnimationAttr } from './hooks/useGetAnimationAttr';
import { greetingBoxData } from './data/greetingsBoxData';
import { GreetingsBox } from './GreetingsBox';
import { handleSkip } from './utils/handleSkip';

export const HeadAnimation = () => {
    const [showSlider, setShowSlider] = useState(false);
    const { manRef, womanRef, titleRef, greetingManRef, greetingWomanRef } = useGetAnimationAttr({ setShowSlider });

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
                {greetingBoxData.map(greetings => {
                    const { gender, id } = greetings
                    const currentRef = gender === 'man' ? greetingManRef : greetingWomanRef
                    return (
                        <GreetingsBox key={ id } data = { greetings } currentRef = { currentRef }/>
                    )
                })}

                { showSlider && <SliderTour onSkip={() => handleSkip({ setShowSlider })} /> }
            </div>
        </div>
    );
};