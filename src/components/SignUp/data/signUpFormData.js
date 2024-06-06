export const signUpFormData = [
    { 
        id: 1, 
        labelTitle: `Нікнейм`, 
        inpType:`text`,
        inpName: 'login',
        errorText:`Вкажіть ваш нікнейм`,
    },
    { 
        id: 2, 
        labelTitle: `Пароль`, 
        inpType:`password`,
        inpName: 'userPassword',
        errorText:`Вкажіть ваш пароль`,
    },
    { 
        id: 3, 
        labelTitle: `Повторіть пароль`, 
        inpType:`password`, 
        inpName: 'repeatUserPassword',
        errorText:`Повторіть ваш пароль`,
    },
    { 
        id: 4, 
        labelTitle: `Номер телефона`, 
        inpType:`number`, 
        inpName: 'phoneNumber',
        errorText:`Вкажіть ваш номер телефону`,
    },
    { 
        id: 5, 
        labelTitle: `Пошта`, 
        inpType:`email`, 
        inpName: 'email',
        errorText:`Вкажіть вашу пошту`,
    },
] 