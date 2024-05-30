import { useGetLikeAndDislikeStatus } from "./hooks/useGetLikeAndDislikeStatus"
import { getTotalArrLength } from "./utils/getTotalArrLength";

export const RateBox = ( { children, data, currentFunction, title } ) => {
    const { id, currentButtonArr, data: usersData } = data
    const { currentUser } = usersData
    const { classNameForBtn, isLiked, isDisliked } = useGetLikeAndDislikeStatus({ data, title, currentUser });

    const currentButtonCount = getTotalArrLength(currentButtonArr)

    return (
        <div className={`rate-box rate-box_${ title }s`}>
            <button 
                onClick={ () => currentFunction({ id, isDisliked, isLiked, currentButtonArr }) } 
                className={ classNameForBtn }
            >
                { children }
            </button>
            <span>{ currentButtonCount }</span>
        </div>
    )
}