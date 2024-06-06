export const GreetingsBox = ({ currentRef, data }) => {
    const { title, text, gender } = data
    const titleVal = title.split('\n');

    return (
        <div className={`header__greeting-box header__greeting-box_${ gender }`} ref={ currentRef }>
        <div className="header__greeting-text">
            <span className="text-bold text-center">
                { titleVal.map((el, index) => (
                    <p key={ index }>{ el }</p>
                )) }
            </span>
            <br />
            <br />
            <p>{ text }</p>
        </div>
    </div>
    )
}