import { useSelector } from 'react-redux';
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

const CalendarPage = () => {
  const isModalOpen = useSelector(globalSelectors.getIsModalAddEventOpen);

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
