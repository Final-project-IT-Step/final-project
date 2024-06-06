export const modalCartItemData = ({ item }) => {
    return ([
        { 
            id: 1, 
            parentClassName: 'img-box', 
            childrenClassName: 'img', 
            elKey: [item?.img, item?.title] 
        },
        { 
            id: 2, 
            parentClassName: 'modal__title-tea-box', 
            childrenClassName: 'modal__title-tea', 
            elKey: [item?.title] 
        },
        { 
            id: 3, 
            parentClassName: 'modal__price-box', 
            childrenClassName: 'modal__price', 
            elKey: [`${ item?.price } грн.`] 
        },
    ])
}