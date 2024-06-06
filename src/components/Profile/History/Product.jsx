export const Product = ({ data, orderedProducts }) => {

    const currentProduct = data?.find(product => product.id === orderedProducts.id);

    return (
        <div className="product" key={ orderedProducts.id }>
            <span 
                data-title = "Назва чаю:"
                className="history-block-order__value"
            >{ currentProduct?.title }
            </span>
            <span
                data-title = "Кількість товару:"
                className="history-block-order__value"
            >{ orderedProducts.total }
            </span>
            <span
                data-title = "Вартість:"
                className="history-block-order__value"
            >{ currentProduct?.price } грн
            </span>
        </div>
    )
}