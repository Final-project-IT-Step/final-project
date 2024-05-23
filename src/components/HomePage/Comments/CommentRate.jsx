import { useDislikeCommentMutation, useLikeCommentMutation } from "../../../redux";

export const CommentRate = ({ data: item = {} }) => {
    const [ likeComment ] = useLikeCommentMutation();
    const [ dislikeComment ] = useDislikeCommentMutation();

    const initLike = async (id, totalLikes) => await likeComment({ id, totalLikes })
    const initDislike = async(id, totalDislikes) => await dislikeComment({ id, totalDislikes })

    return (
        <div className="comment-rate">
            <div className="rate-box rate-box_likes">
                <button 
                    onClick={ () => initLike(item.id, item.totalLikes) } 
                    className="comment-rate__button comment-rate__button_like"
                >Подобається
                </button>
                <span>{ item.totalLikes }</span>
            </div>

            <div className="rate-box rate-box_dislikes">
                <button 
                    onClick={ () => initDislike(item.id, item.totalDislikes) }
                    className="comment-rate__button comment-rate__button_dislike"
                >Не подобається
                </button>
                <span>{ item.totalDislikes }</span>
            </div>
        </div>
    )
}