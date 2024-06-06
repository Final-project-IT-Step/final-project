import { EventsInfoBox } from "./EventsInfoBox"
import { eventsArr } from "./data"


export const EventsWrapper = ({ eventsWrapperRef }) => {

    return (
        <div className="events__wrapper" ref={ eventsWrapperRef }>
            {
                eventsArr.map(item => (
                    <div key={ item.id } className="events__block">

                        <div className="events__img-box">
                            <img src={ item.img } alt="" className="events__img" />
                        </div>

                        <EventsInfoBox data = { item }/>

                    </div>
                ))
            }
        </div>
    )
}