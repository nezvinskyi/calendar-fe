import css from './TimeScale.module.css';
import { getTimeScaleArray } from './timeScaleData';

const TimeScale = () => {
  const timeScale = getTimeScaleArray();
  return (
    <div className={css.timeScale}>
      {timeScale.map(slot => {
        return (
          <div key={slot} className={css.slot}>
            {slot}
          </div>
        );
      })}
    </div>
  );
};

export default TimeScale;
