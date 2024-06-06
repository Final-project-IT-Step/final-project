export const navigateTo = (e, path, navigate) => {
    const target = e.target;
    if (target.checked) {
        navigate(path)
    }
}