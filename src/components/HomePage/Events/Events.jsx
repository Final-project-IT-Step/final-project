import { Vignette } from '../../Vignette';
import { useEventWrapperRef } from './hooks/useEventWrapperRef';
import { EventsWrapper } from './EventsWrapper';

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
