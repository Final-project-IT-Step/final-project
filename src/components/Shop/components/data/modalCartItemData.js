export const modalCartItemData = ({ item }) => {
    return ([
        { 
            id: 1, 
            parentClassName: 'img-box', 
            childrenClassName: 'img', 
            elKey: [item.img, item.title] 
        },
        { 
            id: 2, 
            parentClassName: 'title-tea-box', 
            childrenClassName: 'title-tea', 
            elKey: [item.title] 
        },
        { 
            id: 3, 
            parentClassName: 'modal__price-box', 
            childrenClassName: 'modal__price', 
            elKey: [`${ item.price } грн.`] 
        },
    ])
}