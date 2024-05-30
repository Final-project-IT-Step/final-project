import { Link } from "react-router-dom";
import { getUsersPrivilage } from "./utils/getUsersPrivilage";
import { initUsersAvatar } from "./utils/initUsersAvatar";

export const UsersContent = ({ userData = {}, data:contentData = {} }) => {
    const { userName, userPrivilege } = userData
    const currentTitle = getUsersPrivilage(userPrivilege);
    const currentAvatar = initUsersAvatar(userName);

    return (
        <div className="comment-box">
            <Link
                to = { userName }
                className="comment__user" 
                data-title = { currentTitle } 
                data-avatar = { currentAvatar }
            >
                { userName }
            </Link>
            <p className="comment__text">
                { contentData.text }
            </p>
        </div>
    )
}