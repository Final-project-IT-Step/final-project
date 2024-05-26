import { RateBox } from "./RateBox";
import { useGetCommentManipulation } from "./hooks/useInitCommentManipulations";

export const CommentRate = ({ data: item = {} }) => {
    const { id, totalLikes, totalDislikes } = item;
    const { initDislike, initLike } = useGetCommentManipulation();

    return (
        <div className="comment-rate">
            <RateBox 
                data = { { currentButtonCount: totalLikes, id } } 
                currentFunction = { initLike }
            >
                <i className="fa-solid fa-thumbs-up"></i>
            </RateBox>

            <RateBox 
                data = { { currentButtonCount: totalDislikes, id } } 
                currentFunction = { initDislike }
            >
                <i className="fa-solid fa-thumbs-down"></i>
            </RateBox>
        </div>
    )
}