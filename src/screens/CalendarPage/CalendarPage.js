import { CalendarLayout, TimeScale, Events, Header } from '../../components';

const CalendarPage = () => {
  return (
    <>
      <Header />
      <CalendarLayout>
        <TimeScale />
        <Events />
      </CalendarLayout>
    </>
  );
};

export default CalendarPage;
