import { useSelector, useDispatch } from 'react-redux';
import css from './Events.module.css';

import { calendarOperations, calendarSelectors } from '../../redux/calendar';
import { sessionOperations } from '../../redux/session';

const Events = () => {
  const mappedData = useSelector(calendarSelectors.mappedData);
  const dispatch = useDispatch();

  const handleDelete = id => {
    try {
      dispatch(calendarOperations.deleteEvent(id));
    } catch (error) {
      dispatch(sessionOperations.setError(error.toString()));
    }
  };

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
          <span className={css.title}>{event.title}</span>
          <div className={css.delBtn} onClick={() => handleDelete(event._id)}></div>
        </div>
      ))}
    </div>
  );
};

export default Events;
