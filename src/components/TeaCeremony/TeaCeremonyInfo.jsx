export const TeaCeremonyInfo = ({ currentData }) => {

    return (
        <ul className="tea-ceremony__info">
            { currentData.map(tea => {
                const { id, title, text } = tea
                const value = text.split('\n');
                return (
                    <li className="text" key={ id }>
                        <h3 className="text__title">{ title }</h3>
                        { value.map((element, index) => (
                            <p className="text__paragraph" key={ index }>{ element }</p>
                        )) }
                    </li>
                )
                }) 
            }
        </ul>
    )
}