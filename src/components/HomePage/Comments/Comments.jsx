import { useState } from "react";
import { CommentsBlock } from "./CommentsBlock";
import { Pagination } from "./Pagination";
import { useGetCommentsQuery } from "../../../redux";
import { Vignette } from "../../Vignette";
import { useAuthContext } from "../../../AuthorizationContext/hooks/useAuthContext";
import { AuthWriteCommentBlock } from "./AuthWriteCommentBlock";
import { NonAuthWriteCommentBlock } from "./NonAuthWriteCommentBlock";
import { useScrollToTop } from "./hooks/useScrollToTop";

export const Comments = () => {
    const [start, setStart] = useState(0);
    const { data = [] } = useGetCommentsQuery();
    const { user } = useAuthContext();
    const { commentsBlockRef } = useScrollToTop(start);
    const totalComments = data.length;

    return (
        <div className="comments">
            <h2>ВІДГУКИ</h2>
            <div className="container">
                <Vignette />
                <div className="content-block content-block_comments" ref={ commentsBlockRef }>
                    <CommentsBlock start = { start }/>
                </div>
                <span className="comments__total-amount">Загальна кількість коментарів: <b>{ totalComments }</b></span>
                <Pagination data ={ data } setStart={ setStart } start = { start }/>
                <div className="write-comment">
                    { user 
                        ? <AuthWriteCommentBlock  comments = { data }/>
                        : <NonAuthWriteCommentBlock />
                    }
                </div>
            </div>
        </div>
    );
};