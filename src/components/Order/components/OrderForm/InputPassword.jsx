export const InputPassword = ({ register, inpName, errorText, getValues, className }) => {

    return (
        <input
            className={`${ className }-label__input`}
            type='password' 
            {...register(inpName, { 
                required: errorText,
                validate: value => value === getValues()
                ['userPassword'] || 'Паролі не співпадають'
            })}
    />
    )
}