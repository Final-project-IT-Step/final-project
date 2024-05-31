import React from 'react';
import { useShopContext } from '../hooks/useShopContext';
import { getCurrentLength, initContentSelection, initCurrentFilter, initSearchParams } from '../utils';

export const ContentSelection = ({ currentKey: key, classNameValue, title }) => {
    const { data = [], searchParams, setSearchParams, filteredData } = useShopContext();

    const curFilter = initCurrentFilter({ data, key });
    const contentSelection = initContentSelection({ curFilter })
    const curParams = searchParams.getAll(key);

    return (
        <div className={ `${ classNameValue } filter-box` }>
            <h3>{ title }</h3>
            {
                contentSelection.map(option => {
                    const factLength = getCurrentLength({ currentData: data, key, option })
                    const curLength = getCurrentLength({ currentData: filteredData, key, option })
                    
                    return (
                        <form key={ option } className="type-box">
                            <label className="filter-box__info-item">
                                <input
                                    type="checkbox"
                                    name={ `${ key }Info` }
                                    className="filter-box__info"
                                    checked={ curParams.includes(option) }
                                    onChange={ e => initSearchParams(e, { key, option, searchParams, setSearchParams }) }
                                />
                                { option } ( { curLength } / { factLength } )
                            </label>
                        </form>
                    );
                })
            }
        </div>
    );
};