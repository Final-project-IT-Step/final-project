import { useGetUsersQuery } from "../../../../redux/api";

export const Input = ({ inpType, className, register, inpName, errorText, getValues }) => {
    const { data:users = [] } = useGetUsersQuery();
    const userNames = users?.map(user => user.userName)

    return (
        <input
            className={`${ className }-label__input`}
            type={ inpType } 
            { ...register(inpName, { 
                required: errorText,
                validate: async value => !(await userNames.includes(getValues()['username'])) || 'Користувачь з таким нікнеймом вже існує'
            },)}
        />
    )
}