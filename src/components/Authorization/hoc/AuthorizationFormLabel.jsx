export const AuthorizationFormLabel = ({ children, data, currentType }) => {
    const { title, type:ownWrittenType, formTitle } = data
    const actualType = currentType || ownWrittenType

    return (
        <label className="authorization-form-label">
            <h4 className="authorization-form-label__title">{ title }</h4>
            <input 
                type={ actualType } 
                className="authorization-form-label__input"
                name = { formTitle }
            />
            { children }
        </label>
    )
}