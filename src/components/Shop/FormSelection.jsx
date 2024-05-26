import React from 'react';

export const FormSelection = ({ data, searchParams, setSearchParams, filteredData }) => {
    const curFilter = data.map(item => item.form);
    const contentSelection = Array.from(new Set(curFilter));
    const curParams = searchParams.getAll('form');

    return (
        <div className="type filter-box">
            <h3>ФОРМА</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.form === option).length;
                    const curLength = filteredData.filter(item => item.form === option).length;
                    
                    return (
                        <form key={ option } className="type-box">
                            <label className="filter-box__info-item">
                                <input
                                    type="checkbox"
                                    name="info"
                                    className="filter-box__info"
                                    checked={ curParams.includes(option) }
                                    onChange={ e => {
                                        const isChecked = e.target.checked;
                                        let newParams = new URLSearchParams(searchParams);
                                        if (isChecked) {
                                            newParams.append('form', option);
                                        } else {
                                            newParams.delete('form', option);
                                        }
                                        setSearchParams(newParams);
                                    }}
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