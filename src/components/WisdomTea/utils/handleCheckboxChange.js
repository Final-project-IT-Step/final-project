export const handleCheckboxChange = ({ word, selectedWords, setSelectedWords, setMessage, setIsActive }) => {
    const correctWords = ["чистота", "гармонія", "спокій", "повага"];
    let newSelectedWords = [...selectedWords];
    
    if (newSelectedWords.includes(word)) {
        newSelectedWords = newSelectedWords.filter(w => w !== word);
    } else if (newSelectedWords.length < 4) {
        newSelectedWords.push(word);
    }

    setSelectedWords(newSelectedWords);
    const isCorrect = correctWords.every(cw => newSelectedWords.includes(cw));

    if (newSelectedWords.length === 4 && isCorrect) {
        setMessage("Ви обрали правильні варіанти, чим виявили повагу до багатовікових традицій. Оберіть, яку пораду хотіли б отримати?");
        setIsActive(true);
    }
};