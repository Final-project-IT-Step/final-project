export const makeCurrentAvatar = (user) => {

    return user ?  (user[0] + user[user.length - 1]).toUpperCase() : ''
}