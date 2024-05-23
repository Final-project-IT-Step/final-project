import { useState } from "react";
import { CommentsBlock } from "./CommentsBlock";
import { Pagination } from "./Pagination";
import { useGetCommentsQuery } from "../../../redux";
import { Vignette } from "../../Vignette";

export const Comments = () => {
    const [start, setStart] = useState(0);
    const { data = [] } = useGetCommentsQuery();

    return (
        <div className="comments">
            <h2>ВІДГУКИ</h2>
            <div className="container">
                <Vignette />
                <div className="content-block content-block_comments">
                    <CommentsBlock start = { start }/>
                </div>
                <Pagination data ={ data } setStart={ setStart } start = { start }/>
                <div className="write-comment">
                    <h3 className="write-comment__title">Напишіть свій відгук</h3>
                    <textarea className="write-comment__text"/>
                    <button className="write-comment__btn">Send</button>
                </div>
            </div>
        </div>
    );
};