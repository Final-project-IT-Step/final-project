export const RateBox = ( { children, data, currentFunction } ) => {
    const { id, currentButtonCount } = data

    return (
        <div className="rate-box rate-box_likes">
            <button 
                onClick={ () => currentFunction(id, currentButtonCount) } 
                className="comment-rate__button comment-rate__button_like"
            >
                { children }
            </button>
            <span>{ currentButtonCount }</span>
        </div>
    )
}