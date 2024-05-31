export const EventsInfoBox = ({ data }) => {
    const { title, text, schedule, price } = data

    return (
        <div className="events__info-box">
            <h4 className="events__title">
                { title.toUpperCase() }
            </h4>

            <p className="events__info">
                { text }
            </p>

            <p className="events__info">
                <span className='text-bold'>
                    Проводимо:&nbsp;
                </span>
                { schedule }
            </p>

            <p className="events__info">
                <span className='text-bold'>
                    Вартість:&nbsp;
                </span>
                { price }
            </p>
        </div>
    )
}