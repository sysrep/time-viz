import React from 'react'
import './style.css';

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

export const getDate = (date) => {
  return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate());
}

export const getTime = (date) => {
  return pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds());
}

export const EventDateSelector = (props) => (
  <div className="eventDateSelectorContainer">
    <form>
      <label>from
        <input
          type="date"
          value={getDate(props.from)}
          onChange={props.onFromChange} />
        <input
          type="time"
          value={getTime(props.from)}
          onChange={props.onFromChange} />
      </label>
      <label>to
        <input
          type="date"
          value={getDate(props.to)}
          onChange={props.onToChange} />
        <input
          type="time"
          value={getTime(props.to)}
          onChange={props.onToChange} />
      </label>
    </form>
  </div>
)

EventDateSelector.propTypes = {
  from: React.PropTypes.object,
  to: React.PropTypes.object,
  onFromChange: React.PropTypes.func,
  onToChange: React.PropTypes.func,
}
