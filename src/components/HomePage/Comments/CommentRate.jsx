import { RateBox } from "./RateBox";
import { useGetCommentManipulation } from "./hooks/useInitCommentManipulations";

export const CommentRate = ({ data: mainData }) => {
    const { item, usersData } = mainData
    const { id, totalLikes, totalDislikes } = item;
    const { initDislike, initLike } = useGetCommentManipulation(usersData);

    return (
        <div className="comment-rate">
            <RateBox 
                data = { { currentButtonArr: totalLikes, id, data: mainData} } 
                currentFunction = { initLike }
                title = "like"
            >
                <i className="fa-solid fa-thumbs-up"></i>
            </RateBox>

            <RateBox 
                data = { { currentButtonArr: totalDislikes, id, data: mainData } } 
                currentFunction = { initDislike }
                title = "dislike"
            >
                <i className="fa-solid fa-thumbs-down"></i>
            </RateBox>
        </div>
    )
}