import { useAuthContext } from "../../../../AuthorizationContext/hooks";


export const useGetLikeAndDislikeStatus = ({ data, title }) => {
    const { id:commentId, data: mainData } = data;
    const { commentsData } = mainData
    const { currentUserId: userId } = useAuthContext();
    const currentComment = commentsData?.find(comment => comment?.id === commentId);
    
    const usersLikes = currentComment?.totalLikes;
    const usersDislikes = currentComment?.totalDislikes;

    const isLiked = usersLikes?.includes(userId)
    const isDisliked = usersDislikes?.includes(userId);
    const isLikedClassName = isLiked ? 'liked' : ''
    const isDisikedClassName = isDisliked ? 'disliked' : ''

    const classNameForBtn = 
        `comment-rate__button comment-rate__button_${ title } 
        ${ isLikedClassName } 
        ${ isDisikedClassName }`

    return { isDisikedClassName, isLikedClassName, isLiked, isDisliked, classNameForBtn, userId }
}