import React from 'react';

export const TypeSelection = ({ data, searchParams, setSearchParams, filteredData }) => {
    const curFilter = data.map(item => item.type);
    const contentSelection = Array.from(new Set(curFilter));
    const curParams = searchParams.getAll('type');

    return (
        <div className="type filter-box">
            <h3>ТИП ЧАЮ</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.type === option).length;
                    const curLength = filteredData.filter(item => item.type === option).length;
                    
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
                                            newParams.append('type', option);
                                        } else {
                                            newParams.delete('type', option);
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