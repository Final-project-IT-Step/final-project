import React from 'react';
import { useGetHistoryTeaDataQuery } from '../../redux/historyTeaDataApi';
import { Vignette } from '../../components/Vignette';

export const HistoryTea = () => {
    const { data = [] } = useGetHistoryTeaDataQuery();

    return (
        <div className='main'>
            <h1>ІСТОРІЯ ЧАЮ</h1>

            <div className="history-tea__block">
                {
                    data.map(tea => {
                        const { id, title, text, start, end } = tea
                        return (
                            <React.Fragment key = { id }>
                                { start && <p className="history-tea__info text">{ start }</p> }
                                <div className="container">
                                    <Vignette />
                                    <div className="content-block">
                                        <h2>{ title }</h2>
                                        <p className="history-tea__info text">{ text }</p>
                                    </div>
                                </div>
                                { end && <p className="history-tea__info text">{ end }</p> }
                            </React.Fragment>
                        )
                    }) 
                }
            </div>
        </div>
    );
};