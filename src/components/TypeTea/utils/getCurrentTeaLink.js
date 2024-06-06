export const getCurrentTeaLink = (name, id) => {
    const res = `${ name?.replaceAll(' ', '') }${ id ? `==${ id }`: '' }`
    return res
}