export const getButtonTitle = ({ title, isLiked, isDisliked }) => {

    return title === 'like' ? isLiked : isDisliked
}