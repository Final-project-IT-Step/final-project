export const getUsersPrivilage = (userPrivilege) => {

    return userPrivilege >= 2 ? 'Адміністратор' : 'Користувач'
}