import { slidesData } from "../data/slidesData";

export const prevSlide = ({ currentSlide, setCurrentSlide }) => {
    setCurrentSlide(prev => currentSlide === 0 ? slidesData.length - 1 : prev - 1);
}