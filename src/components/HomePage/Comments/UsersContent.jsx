export const UsersContent = ({ userData = {}, data:contentData = {} }) => {
    const { userName, userPrivilege } = userData
    const currentTitle = userPrivilege >= 2 ? 'Адміністратор' : 'Користувач'
    const currentAvatar = userName ? userName[0]?.toUpperCase() : '';

    return (
        <div className="comment-box">
            <span className="comment__user" data-title = { currentTitle } data-avatar = { currentAvatar }>
                { userName }
            </span>
            <p className="comment__text">
                { contentData.text }
            </p>
        </div>
    )
}