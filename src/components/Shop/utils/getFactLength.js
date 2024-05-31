export const getCurrentLength = ({ currentData, key, option }) => {
    return currentData.filter(item => item[key] === option).length;
}