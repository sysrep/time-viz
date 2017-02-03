import React from 'react'

export const EventDateSelector = (props) => (
  <form>
    <label>from
      <input
        type="datetime-local"
        value={props.from}
        onChange={props.onFromChange} />
    </label>
    <label>to
      <input
        type="datetime-local"
        value={props.to}
        onChange={props.onToChange} />
    </label>
  </form>
)

EventDateSelector.propTypes = {
  from: React.PropTypes.string,
  to: React.PropTypes.string,
  onFromChange: React.PropTypes.func,
  onToChange: React.PropTypes.func,
}
