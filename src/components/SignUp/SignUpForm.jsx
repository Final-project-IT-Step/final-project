import { useForm } from "react-hook-form";
import { FormLabel } from "../Order/components/OrderForm";
import { signUpFormData } from "./data";
import { useCreateUserMutation } from "../../redux/api";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const [ createUser ] = useCreateUserMutation();
    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const submit = async (data) => {
        await createUser({ newUser: data })
        navigate(`/login`, { replace: true })
    }
    
    const formError = error => {
    console.log('invalid form');
    console.log(error);
    }

    return (
        <form
            onSubmit = { handleSubmit(submit, formError) }
            className="order-form"
        >
            {
                signUpFormData.map(input => {
                    const { id } = input;

                    return <FormLabel
                        data = { input }
                        key = { id } 
                        register={ register }
                        errors={ errors }
                        className={ 'order-form' }
                        getValues = { getValues }
                    />
                })
            }

            <button 
                className="order-form__submit-btn"
                type="submit"
            >Створити акаунт
            </button>
        </form>
    )
}