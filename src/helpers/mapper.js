const SCALE = 2;

export const mapper = data => {
  let transform = false;

  const newArr = [...data]
    // сортирует массив по дате начала
    .sort((a, b) => a.start - b.start)
    // если окончание текущего ивента позже, чем начало любого следующего евента ИЛИ если начало текущего ивента раньше окончания предыдущего, к объекту добавляет width:100
    .map((el, idx, arr) => {
      if (
        arr.some((e, i) => el.start + el.duration > e.start && idx < i) ||
        arr.some((e, i) => el.start < e.start + e.duration && idx > i)
      ) {
        el = Object.assign({ width: 100 }, el);
      }
      return el;
    })
    // для расстановки объектов в шахматном порядке, и для масштабирования размеров под time scale
    .map(el => {
      el = Object.assign({ start: el.start * SCALE }, el);
      el = Object.assign({ duration: el.duration * SCALE }, el);
      el.start *= SCALE;
      el.duration *= SCALE;
      if (transform && el.width) {
        el = Object.assign({ transform: 'translate(-100%)' }, el);
      }
      transform = !transform;
      return el;
    });

  return newArr;
};
