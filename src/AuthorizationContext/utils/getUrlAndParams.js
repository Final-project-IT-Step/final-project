export const getUrlAndParams = () => {
    const url = window.location.href.split('?')
    const params = url.length < 2 ? '' : url.slice(-1);

    return { url, params }
}