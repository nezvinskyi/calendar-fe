import css from './Events.module.css';
import { data } from '../../data/events';
import { mapper } from '../../helpers/mapper';

const mappedData = mapper(data);

const Events = () => {
  return (
    <div className={css.eventsWrapper}>
      {mappedData.map(event => (
        <div
          key={event._id}
          className={css.event}
          style={{
            height: event.duration,
            top: event.start,
            width: event.width,
            transform: event.transform,
          }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};

export default Events;
