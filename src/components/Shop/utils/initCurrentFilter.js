export const initCurrentFilter = ({ key, data }) => {
    return data.map(item => item[key]);
}