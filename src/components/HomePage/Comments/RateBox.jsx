import { useGetLikeAndDislikeStatus } from "./hooks";
import { getTotalArrLength } from "./utils";


export const RateBox = ( { children, data, currentFunction, title, currentRate, item } ) => {
    const { id, data: usersData } = data

    const { totalLikes, totalDislikes } = item;

    const { currentUser } = usersData
    const { classNameForBtn, isLiked, isDisliked } = useGetLikeAndDislikeStatus({ data, title, currentUser });

    const currentButtonCount = getTotalArrLength(currentRate)

    return (
        <div className={`rate-box rate-box_${ title }s`}>
            <button 
                onClick={ () => currentFunction({ id, isDisliked, isLiked, totalLikes, totalDislikes }) } 
                className={ classNameForBtn }
            >
                { children }
            </button>
            <span>{ currentButtonCount }</span>
        </div>
    )
}