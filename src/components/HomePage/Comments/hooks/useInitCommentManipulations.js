import { useNavigate } from "react-router-dom";
import { useDislikeCommentMutation, useLikeCommentMutation } from "../../../../redux";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export const useGetCommentManipulation = () => {
    const [ likeComment ] = useLikeCommentMutation();
    const navigate = useNavigate();
    const { user = {} } = useAuthContext();
    const [ dislikeComment ] = useDislikeCommentMutation();

    const initLike = async (id, totalLikes) => {
        if (!user) {
            navigate('login')
            return
        }

        await likeComment({ id, totalLikes })
    }
    const initDislike = async(id, totalDislikes) => {
        if (!user) {
            navigate('login')
            return
        }
        await dislikeComment({ id, totalDislikes })
    }

    return { initDislike, initLike, user }
}