import { slidesData } from "../data/slidesData";

export const nextSlide = ({ currentSlide, setCurrentSlide }) => {
    setCurrentSlide(prev => currentSlide === slidesData.length - 1 ? 0 : prev + 1);
}