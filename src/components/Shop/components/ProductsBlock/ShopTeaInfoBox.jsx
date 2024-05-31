import { ShopTeaAddToCart } from "./ShopTeaAddToCart"
import { ShopTeaInfo } from "./ShopTeaInfo"
import { teaProductData } from "../data/teaProductData"

export const ShopTeaInfoBox = ({ tea }) => {
    const teaData = teaProductData(tea);

    return (
        <div className="shop-tea__info-box">
            <h3 className='shop-tea__info-box__title'>{ tea.title }</h3>
            
            {teaData.map(teaEl => {
                const { id, currentTitle, value } = teaEl
                return (
                    <ShopTeaInfo
                        keyValue = { value } 
                        title={ currentTitle }
                        key={ id }
                    />
                    )
                })
            }

            <ShopTeaAddToCart tea = { tea }/>
        </div>
    )
}