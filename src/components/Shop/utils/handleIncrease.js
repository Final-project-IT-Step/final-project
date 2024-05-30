export const handleIncrease = (id, setCartItems) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
};