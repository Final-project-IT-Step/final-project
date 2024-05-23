export const UsersContent = ({ data: item = {} }) => {

    return (
        <>
            <span className="comment__user">
                UserId:
                { item.userId }
            </span>
            <p className="comment__text">
                { item.text }
            </p>
        </>
    )
}