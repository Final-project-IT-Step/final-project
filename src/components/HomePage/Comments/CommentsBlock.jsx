import { basePageLength } from "../../../redux";
import { CommentRate } from "./CommentRate";
import { UsersContent } from "./UsersContent";
import { useGetUsersAndCommentsInfo } from "./hooks/useGetUsersInfo";

export const CommentsBlock = ({ start }) => {
    const startComment = start * basePageLength;
    const { commentsData, currentUsers } = useGetUsersAndCommentsInfo(startComment);

    return (
        <>
        {
            commentsData.map(item => {
                const { id } = item;
                const currentUser = currentUsers.find(user => user.id === id)

                return (
                    <div className="comment" key = { id }>
                        <UsersContent data = { item } userData = { currentUser }/>
                        <CommentRate data = { item }/>
                    </div>
                )
            })
        }
        </>
    )
}