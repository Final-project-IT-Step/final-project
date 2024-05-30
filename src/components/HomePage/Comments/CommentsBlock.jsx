import { basePageLength } from "../../../redux";
import { CommentRate } from "./CommentRate";
import { UsersContent } from "./UsersContent";
import { useGetUsersAndCommentsInfo } from "./hooks/useGetUsersInfo";

export const CommentsBlock = ({ start }) => {
    const startComment = start * basePageLength;
    const { commentsData, currentUsers, usersData, user } = useGetUsersAndCommentsInfo(startComment);

    return (
        <>
        {
            commentsData.map(item => {
                const { id, userId: commentsUserId } = item;
                const currentUser = currentUsers.find(user => user.id === commentsUserId)
                const userId = user?.id;
                const myComment = userId === currentUser?.id ? 'my-comment' : ''

                return (
                    <div className={`comment ${ myComment }`} key = { id }>
                        <UsersContent data = { item } userData = { currentUser }/>
                        <CommentRate data = { { item, commentsData, currentUser, usersData } }/>
                    </div>
                )
            })
        }
        </>
    )
}