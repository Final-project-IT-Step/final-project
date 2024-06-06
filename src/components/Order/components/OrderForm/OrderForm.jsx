import { useForm } from "react-hook-form";
import { orderFormData } from "../../data";
import { FormLabel } from "./FormLabel";
import { formError } from "../../utils";
import { useInitSubmit } from "../../hooks";

export const OrderForm = () => {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const { submit } = useInitSubmit();

    return (
        <form
            className="order-form"
            onSubmit = { handleSubmit(submit, formError) }
        >
            {
                orderFormData.map(input => {
                    const { id } = input;

                    return <FormLabel
                        data = { input } 
                        key = { id } 
                        register={ register }
                        errors={ errors }
                        className={ 'order-form' }
                        getValues={ getValues }
                    />
                })
            }

            <button 
                className="order-form__submit-btn"
                type="submit"
            >Підтвердити замовлення
            </button>
        </form>
    )
}