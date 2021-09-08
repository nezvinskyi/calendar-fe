import { CalendarLayout, TimeScale, Events } from '../../components';

const CalendarPage = () => {
  return (
    <>
      <h1>Calendar</h1>
      <CalendarLayout>
        <TimeScale />
        <Events />
      </CalendarLayout>
    </>
  );
};

export default CalendarPage;
