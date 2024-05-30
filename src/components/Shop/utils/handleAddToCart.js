export const handleAddToCart = (tea, setCartItems) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === tea.id);
        if (existingItem) {
            return prevItems.map(item =>
                item.id === tea.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevItems, { ...tea, quantity: 1 }];
        }
    });
};