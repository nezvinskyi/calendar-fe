export const minutesToTime = minutes => {
  let hh = 8 + Math.floor(minutes / 60);
  let mm = minutes % 60;
  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;
  const time = `${hh}:${mm}`;
  return time;
};
