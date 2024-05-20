export const getCurrentTeaLink = (name, id) => {
    return `${ name?.replaceAll(' ', '')  }==${ id }`
}