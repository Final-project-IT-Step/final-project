import { Input } from "./Input";
import { InputPassword } from "./InputPassword";

export const FormLabel = ({ data, register, errors, className, getValues }) => {
    const { labelTitle, inpType, errorText, inpName } = data

    const isError = errors[inpName]
    const actualClassName = isError ? `${ className }-label error` : `${ className }-label`
    const isPassword = inpType === 'password';

    return (
        <label className={ actualClassName }>
            <h3 className={`${ className }-label__title`}>{ labelTitle }</h3>

            { isPassword 
                ? <InputPassword 
                    register = { register }
                    inpName = { inpName }
                    className = { className } 
                    errorText = { errorText }
                    getValues = { getValues }
                />
                : <Input 
                    inpType = { inpType } 
                    className = { className } 
                    register = { register } 
                    inpName = { inpName } 
                    errorText = { errorText }
                    getValues={ getValues }
                />
            }
            { isError && 
                <span
                    className={`${ className }-label__error-message`}
                >{ isError.message }</span> }
        </label>
    )
}