import { useGetCommentsPageQuery, useGetUsersQuery } from "../../../../redux";

export const useGetUsersAndCommentsInfo = (start) => {
    const { data:commentsData = [] } = useGetCommentsPageQuery(start);
    const users = commentsData.map(user => user.userId);
    const { data:usersData = [] } = useGetUsersQuery();
    const currentUsers = usersData.filter(user=> users.includes(user.id));

    return { commentsData, usersData, currentUsers }
}