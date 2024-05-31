export const initSearchParams = (e, { key, option, searchParams, setSearchParams }) => {
    const isChecked = e.target.checked;
    let newParams = new URLSearchParams(searchParams);
    isChecked
        ? newParams.append(key, option)
        : newParams.delete(key, option);

    setSearchParams(newParams);
}