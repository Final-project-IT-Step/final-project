export const handleRemove = (id, setCartItems) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
};
