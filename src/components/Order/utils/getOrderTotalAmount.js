export const getOrderTotalAmount = ({ productsInCart, cart }) => {

    const totalAmount = productsInCart
    .map(item => {
        const { id, price } = item;
        const total = cart.find(el => el.id === id).total;
        return total * price

    })
    .reduce((acc, item) => acc + item, 0);

    return totalAmount
}