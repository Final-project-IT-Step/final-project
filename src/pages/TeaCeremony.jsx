import React from 'react';
import TablewareImg from '../img/tableware.jpg'
import { StepsTeaCeremony } from '../components/TeaCeremony/StepsTeaCeremony';
import { Tableware } from '../components/TeaCeremony/Tableware';
import { PrinciplesCeremony } from '../components/TeaCeremony/PrinciplesTeaCeremony/PrinciplesCeremony';

export const TeaCeremony = () => {
    return (
        <div className='main'>
            <h1>ЧАЙНА ЦЕРЕМОНІЯ</h1>

            <div className="tea-ceremony">
                <div className="tea-ceremony__block">
                    <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />

                    <p className="tea-ceremony__info">
                        Китайська чайна церемонія має глибоке філософське та духовне значення. 
                        Вона спрямована на досягнення внутрішнього спокою, гармонії та усвідомлення. 
                        Кожен етап церемонії має свій сенс і сприяє медитації та самопізнанню. 
                        Чайна церемонія також є символом гостинності та поваги до гостей.
                    </p>
                </div>

                <PrinciplesCeremony />

                <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />

                <StepsTeaCeremony />

                <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />

                <img src={ TablewareImg } alt="" className="tableware__img" />

                <Tableware />
            </div>
        </div>
    );
};