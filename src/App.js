import { CalendarLayout, TimeScale, Events } from './components/';
const App = () => {
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

export default App;
