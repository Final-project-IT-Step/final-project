export const handleDecrease = (id, setCartItems) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
    );
};