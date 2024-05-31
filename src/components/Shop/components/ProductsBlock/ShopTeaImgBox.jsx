export const ShopTeaImgBox = ({ tea }) => {

    return (
        <div className="shop-tea__img-box">
            <img 
                src={ process.env.PUBLIC_URL + '/' + tea.img } 
                alt={ tea.title } 
                className="shop-tea__img" 
            />
        </div>
    )
}