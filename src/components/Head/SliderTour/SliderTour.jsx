import React, { useState } from 'react';
import { slidesData } from '../data/slidesData';
import { SliderNavigation } from './SliderNavigation';

export const SliderTour = ({ onSkip }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="slider">
            <div className="slider__container">
                <h3 className="slider__title">
                    { slidesData[currentSlide].title.toUpperCase() }
                </h3>

                <div className="slider__content">
                    <p className="slider__description">
                        { slidesData[currentSlide].description }
                    </p>
                </div>
            </div>

            <SliderNavigation 
                currentSlide={ currentSlide }
                setCurrentSlide={ setCurrentSlide }
            />

            <button className="slider__skip" onClick={ onSkip }>
                Пропустити
            </button>
        </div>
    );
};
