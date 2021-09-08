import { minutesToTime } from '../../helpers/timeConverter';

export const getTimeScaleArray = () => {
  let timeScaleData = [];
  for (let i = 0; i <= 540; i += 30) {
    timeScaleData.push(minutesToTime(i));
  }
  return timeScaleData;
};
