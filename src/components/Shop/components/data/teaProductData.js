export const teaProductData = (tea) => {
    return (
        [
            { id: 1, currentTitle: "Тип чаю", value: tea.type },
            { id: 2, currentTitle: "Вага", value: tea.weight },
            { id: 3, currentTitle: "Форма", value: tea.form },
            { id: 4, currentTitle: "Країна", value: tea.country },
            { id: 5, currentTitle: "Властивості", value: tea.properties.join(', ') },
            { id: 6, currentTitle: "Смак", value: tea.taste.join(', ') },
            { id: 7, currentTitle: "Ціна", value: `${ tea.price } грн` }
        ]
    )
}