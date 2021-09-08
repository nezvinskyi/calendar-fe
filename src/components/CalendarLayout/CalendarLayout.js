import css from './CalendarLayout.module.css';

const CalendarLayout = ({ children }) => {
  return <div className={css.layoutContainer}>{children}</div>;
};

export default CalendarLayout;
