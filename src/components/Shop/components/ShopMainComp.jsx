import { Vignette } from "../../Vignette";
import { useShopContext } from "../hooks";
import { CartModal } from "./CartModal";
import { FilterBlock } from "./FilterBlock";
import { FilterQuantity } from "./FilterQuantity";
import { ProductsBlock } from "./ProductsBlock";


export const ShopMainComp = () => {
    const { filteredData, handleAddToCart, setCartItems, isModalOpen } = useShopContext();

    return (
        <div className='filter'>
            <h1>МАГАЗИН ЧАЮ</h1>

            <Vignette />

            <div className="filter__wrapper">
                <FilterBlock />
                <FilterQuantity />
                <ProductsBlock
                    data={ filteredData } 
                    onAddToCart={ handleAddToCart } 
                    setCartItems = { setCartItems }
                />
            </div>

            { isModalOpen && <CartModal/> }
        </div>
    )
}