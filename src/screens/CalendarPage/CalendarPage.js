import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalSelectors } from '../../redux/global';

import {
  CalendarLayout,
  TimeScale,
  Events,
  Header,
  AddBtn,
  Modal,
  AddEventForm,
} from '../../components';
import { calendarOperations } from '../../redux/calendar';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(globalSelectors.getIsModalAddEventOpen);

  useEffect(() => {
    dispatch(calendarOperations.getEvents());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CalendarLayout>
        <TimeScale />
        <Events />
      </CalendarLayout>
      <AddBtn />
      {isModalOpen && (
        <Modal>
          <AddEventForm />
        </Modal>
      )}
    </>
  );
};

export default CalendarPage;
