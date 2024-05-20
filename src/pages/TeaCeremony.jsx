import React from 'react';
import { PrinciplesCeremony } from '../components/TeaCeremony/PrinciplesCeremony';
import TablewareImg from '../img/tableware.jpg'
import { StepsTeaCeremony } from '../components/TeaCeremony/StepsTeaCeremony';
import { Tableware } from '../components/TeaCeremony/Tableware';

const TeaCeremony = () => {
    return (
        <div className='main'>
            <h1>ЧАЙНА ЦЕРЕМОНІЯ</h1>

            <div className="tea-ceremony">
                <div className="tea-ceremony__block">
                    <img src="/img/vignette.png" alt="" className="tea-ceremony__img" />

                    <p className="tea-ceremony__info text">
                        Китайська чайна церемонія має глибоке філософське та духовне значення. 
                        Вона спрямована на досягнення внутрішнього спокою, гармонії та усвідомлення. 
                        Кожен етап церемонії має свій сенс і сприяє медитації та самопізнанню. 
                        Чайна церемонія також є символом гостинності та поваги до гостей.
                    </p>
                </div>

                <PrinciplesCeremony />

                <img src="/img/vignette.png" alt="" className="tea-ceremony__img" />

                <StepsTeaCeremony />

                <img src="/img/vignette.png" alt="" className="tea-ceremony__img" />

                <img src={ TablewareImg } alt="" className="tableware__img" />

                <Tableware />
            </div>
        </div>
    );
};

export default TeaCeremony;