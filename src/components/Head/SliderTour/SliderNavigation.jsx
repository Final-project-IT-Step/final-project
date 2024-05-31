import { slidesData } from "../data/slidesData"
import { goToSlide } from "../utils/goToSlide"
import { nextSlide } from "../utils/nextSlide"
import { prevSlide } from "../utils/prevSlide"

export const SliderNavigation = ({ currentSlide, setCurrentSlide }) => {

    return (
        <div className="slider__navigation">
            <button 
                className="slider__prev"
                onClick={ () => prevSlide({ currentSlide, setCurrentSlide }) }
            >
                &#10094;
            </button>

            <div className="slider__dots">
                {
                    slidesData.map((slide, index) => (
                        <span
                            key={ slide.id }
                            className={ index === currentSlide ? 'slider__dot slider__dot_active' : 'slider__dot' }
                            onClick={ () => goToSlide({ setCurrentSlide, index }) }
                        ></span>
                    ))
                }
            </div>

            <button className="slider__next" onClick={ () => nextSlide({ currentSlide, setCurrentSlide }) }>
                &#10095;
            </button>
        </div>
    )
}