import React, { useState, useEffect } from 'react';
import Sage from '../img/sage.jpg';
import BgdPost from '../img/paper.png';
import { useGetWisdomTeaQuery } from '../redux/wisdomTeaApi';

export const WisdomTea = () => {

    const [words, setWords] = useState([]);
    const correctWords = ["чистота", "гармонія", "спокій", "повага"];
    const { data: adviceData, error: adviceError, isLoading: adviceIsLoading } = useGetWisdomTeaQuery();
    const [selectedWords, setSelectedWords] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState("Вітаю вас! Якщо ви прийшли за мудрою порадою, проявіть повагу до традиції чаю. Будьте ласкаві, оберіть чотири принципи чайної церемонії.");
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

    if (adviceIsLoading) return <p>Завантаження...</p>;
    if (adviceError) return <p>Виникла помилка: {adviceError.message}</p>;    

    const handleCheckboxChange = (word) => {
        let newSelectedWords = [...selectedWords];
        if (newSelectedWords.includes(word)) {
            newSelectedWords = newSelectedWords.filter(w => w !== word);
        } else {
            if (newSelectedWords.length < 4) {
                newSelectedWords.push(word);
            }
        }

        setSelectedWords(newSelectedWords);

        if (newSelectedWords.length === 4) {
            const isCorrect = correctWords.every(cw => newSelectedWords.includes(cw));
            if (isCorrect) {
                setMessage("Ви обрали правильні варіанти, чим виявили повагу до багатовікових традицій. Оберіть, яку пораду хотіли б отримати?");
                setIsActive(true);
            }
        }
    };

    const handleButtonClick = async (type) => {
        if (adviceData) {
            const selectedTypeAdvice = adviceData?.filter(advice => advice.type && advice.type.toUpperCase() === type.toUpperCase());
            if (selectedTypeAdvice && selectedTypeAdvice.length > 0) {
                const randomIndex = Math.floor(Math.random() * selectedTypeAdvice.length);
                setSelectedAdvice(null);
                setTimeout(() => {
                    setSelectedAdvice(selectedTypeAdvice[randomIndex].text);
                }, 50);
            } else {
                console.error(`No advice found for type: ${ type }`);
            }

            setMessageClass('fade-in');
            setMessage(`Ось мудрість чаю для вас на тему "${type.toLowerCase()}". Пам'ятайте, що випадковості не випадкові.`);

            setTimeout(() => {
                setMessageClass('');
            }, 2000);
        } else {
            console.error('No advice data available');
        }

        if (!bgdVisible) {
            setBgdVisible(true);
        }
    };
    
    return (
        <div className='main'>
            <h1>МУДРІСТЬ ЧАЮ</h1>

            <div className="wisdom-tea">
                <div className="image">
                    <img src={ process.env.PUBLIC_URL + 'img/vignette.png' } alt="" className="image__src" />
                </div>

                <div className="wisdom-tea__wrapper">
                    <div className="wisdom-tea__block-sage">
                        <img src={ Sage } alt="" className="wisdom-tea__img" />

                        <div className="wisdom-tea__message">
                            <p className={ `wisdom-tea__message_monologue text-justify ${ isActive ? 'fade-in' : '' } ${ messageClass }` }>
                                { message }
                            </p>
                        </div>
                    </div>

                    <div className="wisdom-tea__block">
                        <div className="wisdom-tea__checkbox-container">
                            {
                                words.map((word, index) => (
                                    <div key={ index } className="wisdom-tea__checkbox-item text-bold text-green">
                                        { word.toUpperCase() }
                                        <input 
                                            type="checkbox" 
                                            className="wisdom-tea__checkbox" 
                                            name="principle" 
                                            checked={ selectedWords.includes(word) } 
                                            onChange={ () => handleCheckboxChange(word) } 
                                            disabled={ isActive }
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className="wisdom-tea__button-container">
                            <button 
                                className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                                onClick={ () => handleButtonClick('УСПІХ') }
                            >
                                УСПІХ
                            </button>
                            
                            <button 
                                className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                                onClick={ () => handleButtonClick('МОТИВАЦІЯ') }
                            >
                                МОТИВАЦІЯ
                            </button>
                            
                            <button 
                                className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                                onClick={ () => handleButtonClick('САМОПІЗНАННЯ') }
                            >
                                САМОПІЗНАННЯ
                            </button>
                            
                            <button 
                                className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                                onClick={ () => handleButtonClick('СТОСУНКИ') }
                            >
                                СТОСУНКИ
                            </button>
                            
                            <button 
                                className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                                onClick={ () => handleButtonClick('ТРУДНОЩІ') }
                            >
                                ТРУДНОЩІ
                            </button>
                        </div>
                    </div>
                </div>

                <div className="wisdom-tea__post">
                    <img src={ BgdPost } alt="" className={ `wisdom-tea__post-bgd ${ bgdVisible ? 'fade-in-slow' : '' }` } />

                    <div className="wisdom-tea__post-text-wrapper">
                        {
                            selectedAdvice && <p className={ `wisdom-tea__post-text fade-in` }>{ selectedAdvice }</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};















// import React, { useState } from 'react';
// import Sage from '../img/sage.jpg';
// import BgdPost from '../img/bgd-post.png';
// import { useGetWisdomTeaQuery } from '../redux/wisdomTeaApi';

// export const WisdomTea = () => {
//     const words = [
//         "мудрість",
//         "добро",
//         "чистота",
//         "щастя",
//         "гармонія",
//         "знання",
//         "спокій",  
//         "сила",
//         "терпіння",
//         "повага"
//     ];

//     const correctWords = ["чистота", "гармонія", "спокій", "повага"];
//     const [selectedWords, setSelectedWords] = useState([]);
//     const [isActive, setIsActive] = useState(false);
//     const [message, setMessage] = useState("Вітаю Вас! Якщо Ви прийшли за мудрою порадою, проявіть повагу до традиції чаю. Будьте ласкаві, оберіть чотири принципи чайної церемонії.");
//     const [selectedAdvice, setSelectedAdvice] = useState(null);
    
//     const handleCheckboxChange = (word) => {
//         let newSelectedWords = [...selectedWords];
//         if (newSelectedWords.includes(word)) {
//             newSelectedWords = newSelectedWords.filter(w => w !== word);
//         } else {
//             if (newSelectedWords.length < 4) {
//                 newSelectedWords.push(word);
//             }
//         }

//         setSelectedWords(newSelectedWords);

//         if (newSelectedWords.length === 4) {
//             const isCorrect = correctWords.every(cw => newSelectedWords.includes(cw));
//             if (isCorrect) {
//                 setMessage("Ви обрали правильні варіанти, чим виявили повагу до багатовікових традицій. Оберіть, яку пораду Ви б хотіли отримати?");
//                 setIsActive(true);
//             }
//         }
//     };

//     const handleButtonClick = () => {
//         setMessage("Мудрість чаю для Вас. Пам'ятайте, що випадковості не випадкові.");
//     };
    
//     return (
//         <div className='main'>
//             <h1>МУДРІСТЬ ЧАЮ</h1>

//             <div className="wisdom-tea">
//                 <div className="wisdom-tea__wrapper">
//                     <div className="wisdom-tea__block-sage">
//                         <img src={ Sage } alt="" className="wisdom-tea__img" />

//                         <div className="wisdom-tea__message">
//                             <p className={`wisdom-tea__message_monologue text-justify ${isActive ? 'fade-in' : ''}`}>
//                                 { message }
//                             </p>
//                         </div>
//                     </div>

//                     <div className="wisdom-tea__block">
//                         <div className="wisdom-tea__checkbox-container">
//                             {
//                                 words.map((word, index) => (
//                                     <div key={ index } className="wisdom-tea__checkbox-item text-bold text-green">
//                                         {word.toUpperCase()}
//                                         <input 
//                                             type="checkbox" 
//                                             className="wisdom-tea__checkbox" 
//                                             name="principle" 
//                                             checked={selectedWords.includes(word)} 
//                                             onChange={() => handleCheckboxChange(word)} 
//                                             disabled={isActive}
//                                         />
//                                     </div>
//                                 ))
//                             }
//                         </div>

//                         <div className="wisdom-tea__button-container">
//                             <button className={`wisdom-tea__btn ${isActive ? 'active' : 'inactive'}`} onClick={handleButtonClick}>УСПІХ</button>
//                             <button className={`wisdom-tea__btn ${isActive ? 'active' : 'inactive'}`} onClick={handleButtonClick}>МОТИВАЦІЯ</button>
//                             <button className={`wisdom-tea__btn ${isActive ? 'active' : 'inactive'}`} onClick={handleButtonClick}>САМОПІЗНАННЯ</button>
//                             <button className={`wisdom-tea__btn ${isActive ? 'active' : 'inactive'}`} onClick={handleButtonClick}>СТОСУНКИ</button>
//                             <button className={`wisdom-tea__btn ${isActive ? 'active' : 'inactive'}`} onClick={handleButtonClick}>ТРУДНОЩІ</button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="wisdom-tea__post">
//                     <img src={ BgdPost } alt="" className="wisdom-tea__post-bgd" />
//                 </div>
//             </div>
//         </div>
//     );
// };