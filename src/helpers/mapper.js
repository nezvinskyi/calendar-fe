const SCALE = 2;

export const mapper = data => {
  let transform = false;

  return (
    data
      .sort((a, b) => a.start - b.start)
      // если окончание текущего ивента позже, чем начало любого следующего евента ИЛИ если начало текущего ивента раньше окончания предыдущего
      .map((el, idx, arr) => {
        if (
          arr.some((e, i) => el.start + el.duration > e.start && idx < i) ||
          el.start < arr[idx - 1]?.start + arr[idx - 1]?.duration
        ) {
          el.width = 100;

          if (transform) {
            el.transform = 'translate(-100%)';
          }
          transform = !transform;
        }
        return el;
      })
      .map(el => {
        el.start *= SCALE;
        el.duration *= SCALE;
        return el;
      })
  );
};
