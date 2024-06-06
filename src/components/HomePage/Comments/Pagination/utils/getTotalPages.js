export const getTotalPages = (data) => {
    const totalPages = Math.ceil(data.length / 12);
    const pagesList = [];
    let count = 1;

    while (count <= totalPages) {
        pagesList.push(count);
        count++
    }

    return pagesList;
}