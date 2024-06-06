import { useEffect, useState } from "react";

export const useMiniGameStates = () => {
    const welcomeText = `Вітаю вас! 
    Якщо ви прийшли за мудрою порадою, проявіть повагу до традиції чаю. 
    Будьте ласкаві, оберіть чотири принципи чайної церемонії.`

    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState(welcomeText);
    const [selectedAdvice, setSelectedAdvice] = useState(null);
    const [bgdVisible, setBgdVisible] = useState(false);
    const [messageClass, setMessageClass] = useState('');

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const initialWords = [
            "мудрість",
            "добро",
            "чистота",
            "щастя",
            "гармонія",
            "знання",
            "спокій",  
            "сила",
            "терпіння",
            "повага"
        ];
        // Перетасовуємо
        setWords(shuffleArray([...initialWords]));
    }, []);


    return { 
        words, 
        selectedWords, 
        setSelectedWords, 
        isActive, 
        setIsActive, 
        message, 
        setMessage, 
        setSelectedAdvice, 
        selectedAdvice,
        bgdVisible,
        setBgdVisible,
        messageClass,
        setMessageClass
    }
}