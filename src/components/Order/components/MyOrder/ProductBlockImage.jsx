import { currentTypeData } from "../../data";


export const ProductBlockImage = ({ data }) => {
    const { img, type } = data;
    const currentImg = `${process.env.PUBLIC_URL}/${img}`
    const currentType = currentTypeData.find(tea => tea.type === type).img;
    const curreTypeImg = `${process.env.PUBLIC_URL}${currentType}`

    return (
        <div className="product-block-image">
            <img className="product-block-image__src" src={ currentImg } alt="" />
            <div className="tea-type-image" title={ type }>
                <img className="tea-type-image__src" src={ curreTypeImg } alt="" />
            </div>
        </div>
    )
}