import { Vignette } from "../../Vignette";
import { EventsWrapper } from "./EventsWrapper";
import { useEventWrapperRef } from "./hooks";


export const Events = () => {
    const { eventsWrapperRef } = useEventWrapperRef();

    return (
        <div className="events">
            <h2>ЗАХОДИ</h2>

            <Vignette />
            <EventsWrapper eventsWrapperRef = { eventsWrapperRef } />
        </div>
    );
};
