import { useWisdomTeaContext } from "./hooks/useWisdomTeaContext"

export const WisdomTeaBlockSage = () => {
    const { message, messageClass, isActive, Sage } = useWisdomTeaContext();
    const actualClassName = `wisdom-tea__message_monologue text-justify ${ isActive ? 'fade-in' : '' } ${ messageClass }`

    return (
        <div className="wisdom-tea__block-sage">
        <img src={ Sage } alt="" className="wisdom-tea__img" />

            <div className="wisdom-tea__message">
                <p className={ actualClassName }>
                    { message }
                </p>
            </div>
        </div>
    )
}