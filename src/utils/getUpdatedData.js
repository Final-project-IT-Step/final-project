export const getUpdatedData = (data, searchParams) => {
    const typeParams = searchParams.getAll('type');
    const countryParams = searchParams.getAll('country');
    const formParams = searchParams.getAll('form');

    return data.filter(item => {
        return (
            (typeParams.length === 0 || typeParams.includes(item.type)) &&
            (countryParams.length === 0 || countryParams.includes(item.country)) &&
            (formParams.length === 0 || formParams.includes(item.form))
        );
    });
};