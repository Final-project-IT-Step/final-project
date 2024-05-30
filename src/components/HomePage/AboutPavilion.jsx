import { useEffect, useRef } from 'react';
import BgdPaper from '../../img/bgd-post.png';

export const AboutPavilion = () => {
    const bgdRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => {
        const currentBgdRef = bgdRef.current;
        const currentAboutRef = aboutRef.current;

        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, options);

        if (currentBgdRef) observer.observe(currentBgdRef);
        if (currentAboutRef) observer.observe(currentAboutRef);

        return () => {
            if (currentBgdRef) observer.unobserve(currentBgdRef);
            if (currentAboutRef) observer.unobserve(currentAboutRef);
        };
    }, []);

    return (
        <div className="pavilion">
            <h1>ПРО ПАВІЛЬЙОН</h1>  

            <img src={ BgdPaper } alt="" className="pavilion__bgd" ref={ bgdRef } />

            <div className="pavilion__about" ref={ aboutRef }>
                <p className="pavilion__about_info text">
                    Ласкаво просимо до нашого Павільйону китайської чайної церемонії, 
                    місця, де ви можете зануритися в багатовікову культуру та мистецтво 
                    Сходу. Наш Павільйон створений для всіх, хто цінує витонченість 
                    і  спокій китайських традицій, а також прагне доторкнутися до глибокої 
                    мудрості, що прихована в кожній чашці чаю.
                </p>

                <p className="pavilion__about_info text">
                    Ми прагнемо створити простір, де кожен відвідувач зможе знайти гармонію, 
                    внутрішній спокій і натхнення в мудрості Сходу.
                </p>

                <h2 className="pavilion__about_title">
                    Чому обирають нас
                </h2>

                <ul className="pavilion__list">
                    <li className="pavilion__about_list-item text">
                        <span className="text-bold">
                            Аутентичність.
                        </span> 
                        Ми дотримуємося традицій та принципів, які передавалися з 
                        покоління  в покоління, щоб забезпечити вам найкращий досвід.
                    </li>

                    <li className="pavilion__about_list-item text">
                        <span className="text-bold">
                            Професіоналізм.
                        </span> 
                        Наші майстри мають багаторічний досвід і глибокі знання 
                        в проведенні чайних церемоній та інших культурних заходів.
                    </li>

                    <li className="pavilion__about_list-item text">
                        <span className="text-bold">
                            Індивідуальний підхід.
                        </span> 
                        Ми прагнемо зробити кожен ваш візит унікальним та незабутнім, 
                        враховуючи ваші побажання та інтереси.
                    </li>
                </ul>

                <p className="pavilion__about_info text">
                    Запрошуємо вас відвідати наш Павільйон і відкрити для себе дивовижний 
                    світ китайської чайної церемонії та мистецтва. Нехай кожна наша зустріч 
                    стане для вас джерелом натхнення та гармонії.
                </p>
            </div>  
        </div>
    );
};


