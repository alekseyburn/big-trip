import {MONTHS, deconstructDate} from "./../utils/common.js";
import AbstractComponent from "./abstract-component.js";

const createTripDayTemplate = (date, count) => {

  const deconstrutedDate = deconstructDate(date);
  const {year, month, day} = deconstrutedDate;
  const datetime = `${year}-${month}-${day}`;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${count}</span>
        <time class="day__date" datetime="${datetime}">${MONTHS[month]} ${day}</time>
      </div>

      <ul class="trip-events__list">
      </ul>
    </li>`
  );
};

export default class TripDay extends AbstractComponent {
  constructor(date, count) {
    super();
    this._date = date;
    this._count = count;
  }

  getTemplate() {
    return createTripDayTemplate(this._date, this._count);
  }
}
