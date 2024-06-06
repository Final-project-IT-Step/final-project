
import WisdomTeaContextProvider from '../context/WisdomTeaContext';
import Sage from '../img/sage.jpg'
import BgdPost from '../../../img/paper.png';
import { useMiniGameStates } from '../hooks';
import { useGetWisdomTeaQuery } from '../../../redux/api';

export const WisdomTeaProvider = ({ children }) => {
    const 
    {   
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
        setMessageClass,
    } = useMiniGameStates();

    const { data: adviceData, error: adviceError, isLoading: adviceIsLoading } = useGetWisdomTeaQuery();

    if (adviceIsLoading) return <p>Завантаження...</p>;
    if (adviceError) return <p>Виникла помилка: {adviceError.message}</p>;

    return (
        <WisdomTeaContextProvider
            value = { 
                {
                    words,
                    adviceData,
                    adviceError, adviceIsLoading,
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
                    setMessageClass,
                    Sage,
                    BgdPost
                    } 
                }
        >
            { children }
        </WisdomTeaContextProvider>
    )
}