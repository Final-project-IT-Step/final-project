export const ProductBlockInfoBox = ({ data, cart }) => {
    const { price, id, title, weight} = data
    const currentTotal = cart.find(el => el.id === id).total;
    const currentTotalAmount = price * currentTotal;
    const extraInfo = currentTotalAmount > price ? ` (${ price * currentTotal })` : ''
    const totalWeight = weight * currentTotal


    return (
        <div className="product-block-info-box">
            <h3 className="product-block__title" data-title = "Назва чаю:">{ title }</h3>
            
            <span
                data-title = "Кількість:"
                data-total-weight = { `${ currentTotal } * ${ weight } = ${ totalWeight }г.` }
                className="product-block__info product-block__info_total-products"
            >{ currentTotal }
            </span>

            <span
                data-title = "Вартість:"
                data-total = { extraInfo } 
                className="product-block__info product-block__info_total-amount"
            >{ price } грн
            </span>
        </div>
    )
}