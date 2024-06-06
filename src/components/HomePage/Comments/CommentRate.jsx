import { RateBox } from "./RateBox";
import { useGetCommentManipulation } from "./hooks";


export const CommentRate = ({ data: mainData }) => {
    const { item, usersData } = mainData
    const { id, totalLikes, totalDislikes } = item;
    const { initDislike, initLike } = useGetCommentManipulation(usersData);

    return (
        <div className="comment-rate">
            <RateBox
                data = { { id, data: mainData } }
                currentRate = { totalLikes }
                currentFunction = { initLike }
                item = { item }
                title = "like"
            >
                <i className="fa-solid fa-thumbs-up"></i>
            </RateBox>

            <RateBox 
                data = { { id, data: mainData } }
                currentRate = { totalDislikes }
                item = { item }
                currentFunction = { initDislike }
                title = "dislike"
            >
                <i className="fa-solid fa-thumbs-down"></i>
            </RateBox>
        </div>
    )
}