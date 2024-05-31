export const ModalContentChildrenImg = ({ data }) => {
    const { elKey } = data
    const img = elKey[0];
    const title = elKey[1];

    return (
        <img 
            src={ process.env.PUBLIC_URL + '/' + img } 
            alt={ title } 
            className="modal__img" 
        />
    )
}