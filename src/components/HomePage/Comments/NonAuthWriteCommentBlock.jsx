import { Link } from "react-router-dom"

export const NonAuthWriteCommentBlock = () => {

    return (
        <>
            <h2 className="write-comment__title">Для того щоб написати відгук потрібно авторизуватись</h2>
            <Link className="write-comment__link-to-login" to = 'login'>Перейти до авторизації</Link> 
        </>
    )
}