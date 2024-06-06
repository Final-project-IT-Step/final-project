export const ModalContentChildrenValue = ({ data }) => {
    const { childrenClassName, elKey } = data
    const value = elKey[0];

    return (
        <p className={childrenClassName}>
            { value }
        </p>
    )
}