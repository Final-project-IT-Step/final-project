export const handleButtonClick = async (
    { 
        type, 
        adviceData, 
        setSelectedAdvice, 
        setMessageClass, 
        setMessage, 
        bgdVisible, 
        setBgdVisible 
    }) => {
        
        if (!adviceData) {
            console.error('No advice data available');
            return
        }

        const selectedTypeAdvice = adviceData?.filter(advice => advice.type && advice.type.toUpperCase() === type.toUpperCase());
        
        if (selectedTypeAdvice && selectedTypeAdvice.length > 0) {
            const randomIndex = Math.floor(Math.random() * selectedTypeAdvice.length);
            setSelectedAdvice(null);
            setTimeout(() => {
                setSelectedAdvice(selectedTypeAdvice[randomIndex].text);
            }, 50);
        } else {
            console.error(`No advice found for type: ${ type }`);
        }

        setMessageClass('fade-in');
        setMessage(`Ось мудрість чаю для вас на тему "${type.toLowerCase()}". Пам'ятайте, що випадковості не випадкові.`);

        setTimeout(() => {
            setMessageClass('');
        }, 2000);

        if (!bgdVisible) {
            setBgdVisible(true);
        }
};