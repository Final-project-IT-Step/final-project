import React from 'react';

export const CountrySelection = ({ data, searchParams, setSearchParams, filteredData }) => {
    const curFilter = data.map(item => item.country);
    const contentSelection = Array.from(new Set(curFilter));
    const curParams = searchParams.getAll('country');

    return (
        <div className="country filter-box">
            <h3>КРАЇНА</h3>
            {
                contentSelection.map(option => {
                    const factLength = data.filter(item => item.country === option).length;
                    const curLength = filteredData.filter(item => item.country === option).length;
                    
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
                                            newParams.append('country', option);
                                        } else {
                                            newParams.delete('country', option);
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