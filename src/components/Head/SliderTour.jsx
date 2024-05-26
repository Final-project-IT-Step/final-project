import React, { useState } from 'react';

export const SliderTour = ({ onSkip }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: '1',
            title: 'Головна сторінка',
            description: 'Ми розповімо вам про наш Павільйон, які у нас проводяться заходи, як на них потрапити. Ви зможете ознайомитися з відгуками наших гостей або залишити власні враження після візиту до нашого затишного куточку.'
        },
        {
            id: '2',
            title: 'Історія чаю',
            description: 'Чай має древню історію та культурну спадщину. У Китаї з кожною династією чайна церемонія збагачувалася традиціями та цінностями, з якими ви можете ознайомитися на цих сторінках.'
        },
        {
            id: '3',
            title: 'Види чаю',
            description: 'Тут кожен вид чаю розкриє свою таємницю. Ви зможете дізнатися про його історію, смак, цілющі властивості, символіку та користь.'
        },
        {
            id: '4',
            title: 'Чайна церемонія',
            description: 'Чайна церемонія - це ціле дійство, націлене на гармонію з собою та світом. Кожен ковток принесе спокій і мудрість. Насолоджуйтесь атмосферою і дозвольте чаю повести вас у світ душевної рівноваги та натхнення.'
        },
        {
            id: '5',
            title: 'Мудрість чаю',
            description: 'Завітайте до мудреця. Розгадайте квест і отримайте цінні поради тат настанови. Не забувайте, що кожне почуте вами слово ніколи не буває випадковим.'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            <div className="slider__container">
                <h3 className="slider__title">
                    { slides[currentSlide].title.toUpperCase() }
                </h3>

                <div className="slider__content">
                    <p className="slider__description">
                        { slides[currentSlide].description }
                    </p>
                </div>
            </div>

            <div className="slider__navigation">
                <button className="slider__prev" onClick={ prevSlide }>
                    &#10094;
                </button>

                <div className="slider__dots">
                    {
                        slides.map((slide, index) => (
                            <span
                                key={ index }
                                className={ index === currentSlide ? 'slider__dot slider__dot_active' : 'slider__dot' }
                                onClick={ () => goToSlide(index) }
                            ></span>
                        ))
                    }
                </div>

                <button className="slider__next" onClick={ nextSlide }>
                    &#10095;
                </button>
            </div>

            <button className="slider__skip" onClick={ onSkip }>
                Пропустити
            </button>
        </div>
    );
};
