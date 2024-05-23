import { useGetCommentsPageQuery } from "../../../redux"
import { CommentRate } from "./CommentRate";
import { UsersContent } from "./UsersContent";

export const CommentsBlock = ({ start }) => {
    const startComment = start * 12
    const { data = [] } = useGetCommentsPageQuery(startComment);

    return (
        <>
        {
            data.map(item => (
                <div className="comment" key = { item.id }>
                    <UsersContent data = { item }/>
                    <CommentRate data = { item }/>
                </div>
            ))
        }
        </>
    )
}