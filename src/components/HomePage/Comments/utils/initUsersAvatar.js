export const initUsersAvatar = (userName) => {
    return userName ? userName[0]?.toUpperCase() : '';
}