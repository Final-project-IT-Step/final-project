export const ShopTeaInfo = ({ title, keyValue }) => {
    return (
        <p className="shop-tea__info">
            <span className="text-bold">
                { title }:&nbsp;
            </span> 
            { keyValue }
        </p>
    )
}