export const initUserInterface = (currentUser, isGuest) => {
    const userInterfaceGuest = { userName: `ім'я користувача`, email: 'пошта' }
    const userInterfaceAuthorized = { userName: `ім'я користувача`, email: 'пошта', phone: 'телефон' }

    const userInterface = isGuest ? userInterfaceGuest : userInterfaceAuthorized

    const userInterfaceArr = Object.keys(userInterface);
    const obj = {};

    for (let value in currentUser) {
        if (userInterfaceArr.includes(value)) {
            obj[userInterface[value]] = currentUser[value];
        }
    }

    return Object.entries(obj);
}