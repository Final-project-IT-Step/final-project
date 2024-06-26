import { useNavigate } from "react-router-dom";
import { 
    useDislikeCommentMutation,
    useLikeCommentMutation, 
    useRemoveDislikeCommentMutation, 
    useRemoveLikeCommentMutation, 
    useRemoveUsersDislikeCommentMutation,
    useRemoveUsersLikeCommentMutation, 
    useStoreForDislikesMutation, 
    useStoreForLikesMutation 
} from "../../../../redux/api";
import { useAuthContext } from "../../../../AuthorizationContext/hooks";


export const useGetCommentManipulation = (usersData) => {
    const [ likeComment ] = useLikeCommentMutation();
    const [ storeForLikes ] = useStoreForLikesMutation();
    const [ removeUsersLikeComment ] = useRemoveUsersLikeCommentMutation();
    const [ storeForDislikes ] = useStoreForDislikesMutation();
    const [ removeUsersDisLikeComment ] = useRemoveUsersDislikeCommentMutation();
    const [ removeDislikeComment ] = useRemoveDislikeCommentMutation();
    const [ removeLikeComment ] = useRemoveLikeCommentMutation();

    const navigate = useNavigate();
    const { currentUserId: userId } = useAuthContext();
    const currentUser = usersData.find(user => user.id === userId)
    const currentUserLikesArr =  currentUser?.likedComments
    const currentUsersDislikesComment = currentUser?.dislikedComments
    const [ dislikeComment ] = useDislikeCommentMutation();

    const initLike = async ({ id, isDisliked, isLiked, totalLikes, totalDislikes }) => {
        if (!currentUser) {
            navigate('login')
            return
        }

        if (isLiked) {
            await removeLikeComment({ id, userId, currentButtonArr: totalLikes })
            await removeUsersLikeComment({ id, userId, currentUserLikesArr })
            return
        }

        if (isDisliked) {
            await removeDislikeComment({ id, userId, currentButtonArr: totalDislikes })
            await removeUsersDisLikeComment({ id, userId, currentUsersDislikesComment })
        }

        await likeComment({ id, userId, currentButtonArr: totalLikes })
        await storeForLikes({ id, userId, currentUserLikesArr })


    }
    const initDislike = async({ id, isDisliked, isLiked, totalLikes, totalDislikes }) => {
        if (!currentUser) {
            navigate('login')
            return
        }

        if (isDisliked) {
            await removeDislikeComment({ id, userId, currentButtonArr: totalDislikes })
            await removeUsersDisLikeComment({ id, userId, currentUsersDislikesComment })
            return
        }

        if (isLiked) {
            await removeLikeComment({ id, userId, currentButtonArr: totalLikes})
            await removeUsersLikeComment({ id, userId, currentUserLikesArr })
        }

        await dislikeComment({ id, userId, currentButtonArr: totalDislikes })
        await storeForDislikes({ id, userId, currentUsersDislikesComment })
    }

    return { initDislike, initLike }
}