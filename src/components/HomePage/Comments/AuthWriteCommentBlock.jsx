import { useState } from "react";
import { useAuthContext } from "../../../AuthorizationContext/hooks/useAuthContext";
import { useWriteCommentMutation } from "../../../redux";

export const AuthWriteCommentBlock = ({ comments }) => {
    const { currentUserId, user } = useAuthContext();
    const [value, setValue] = useState('');
    const [ writeComment ] = useWriteCommentMutation();
    const isWritten = comments.find(user => user?.userId === currentUserId);
    const userName = user?.userName

    const textContentHandler = (e) => {
        const value = e.target.value;
        setValue(value);
    }

    const clickHandler = () => {
        if (!value) {
            return;
        }
        writeComment({ userId: currentUserId, textContent: value })

        setValue('');
    }

    return (
        <>
            { !isWritten
                ?<>
                    <h3 className="write-comment__title">Напишіть свій відгук</h3>
                    <textarea onChange={ textContentHandler } className="write-comment__text" value={ value }/>
                    <button onClick={ clickHandler } className="write-comment__btn">Відправити</button>
                </>
                : <h2 className="write-comment__title">Дякуємо за ваш відгук { userName } :)</h2>
            }
        </>
    )
}