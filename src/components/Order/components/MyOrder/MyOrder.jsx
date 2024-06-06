import { useOrderContext } from "../../hooks";
import { ProductBlockImage } from "./ProductBlockImage";
import { ProductBlockInfoBox } from "./ProductBlockInfoBox";


export const MyOrder = () => {
    const { cart, productsInCart } = useOrderContext();

    return (
        <div className="my-order">
            { [...productsInCart].reverse().map(product => {
                const { id } = product

                return (
                    <div className="product-block" key={ id }>

                        <ProductBlockImage 
                            data = { product }
                        />

                        <ProductBlockInfoBox
                            data = { product } 
                            cart={ cart }
                        />

                    </div>
                )
            }) }
        </div>
    )
}