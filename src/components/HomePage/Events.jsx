import { useEffect, useRef } from 'react';
import Window1 from '../../img/window1.png';
import Window2 from '../../img/window2.png';
import Window3 from '../../img/window3.png';
import Window4 from '../../img/window4.png';
import Window5 from '../../img/window5.png';

export const Events = () => {
    const eventsArr = [
        {
            id: 1,
            img: Window1,
            title: 'Чайні церемонії',
            text: 'Пориньте в атмосферу спокою і гармонії під час традиційної китайської чайної церемонії, де кожен рух і кожна деталь має своє значення.',
            schedule: 'щопонеділка, 17:00',
            price: '35 грн.'
        },
        {
            id: 2,
            img: Window2,
            title: 'Стародавній театр тіней',
            text: 'Відкрийте для себе древнє мистецтво театру тіней, яке розповість вам захоплюючі історії та легенди Сходу.',
            schedule: 'щовівторка, 20:00',
            price: '50 грн.'
        },
        {
            id: 3,
            img: Window3,
            title: 'Дегустація чаю',
            text: 'Скуштуйте найкращі сорти чаю, дізнайтеся про їх походження та особливості за допомогою наших експертів.',
            schedule: 'щосереди, 15:00',
            price: '15 грн.'
        },
        {
            id: 4,
            img: Window4,
            title: 'Вечори китайської поезії',
            text: 'Насолоджуйтесь мелодійністю та глибиною китайської поезії під звуки традиційних музичних інструментів.',
            schedule: 'щочетверга, 17:00',
            price: 'безкоштовно'
        },
        {
            id: 5,
            img: Window5,
            title: 'Майстер-класи чайної церемонії',
            text: 'Вивчіть тонкощі проведення чайної церемонії і навчіться мистецтву заварювання чаю під керівництвом досвідчених майстрів.',
            schedule: `щоп'ятниці, 17:00`,
            price: '25 грн.'
        }
    ];

    const eventsWrapperRef = useRef(null);

    useEffect(() => {
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

        const eventBlocks = eventsWrapperRef.current.querySelectorAll('.events__block');
        eventBlocks.forEach(block => {
            observer.observe(block);
        });

        return () => {
            eventBlocks.forEach(block => {
                observer.unobserve(block);
            });
        };
    }, []);

    return (
        <div className="events">
            <h2>ЗАХОДИ</h2>

            <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />

            <div className="events__wrapper" ref={ eventsWrapperRef }>
                {
                    eventsArr.map(item => (
                        <div key={ item.id } className="events__block">
                            <div className="events__img-box">
                                <img src={ item.img } alt="" className="events__img" />
                            </div>

                            <div className="events__info-box">
                                <h4 className="events__title">
                                    { item.title.toUpperCase() }
                                </h4>

                                <p className="events__info">
                                    { item.text }
                                </p>

                                <p className="events__info">
                                    <span className='text-bold'>
                                        Проводимо:&nbsp;
                                    </span>
                                    { item.schedule }
                                </p>

                                <p className="events__info">
                                    <span className='text-bold'>
                                        Вартість:&nbsp;
                                    </span>
                                    { item.price }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
