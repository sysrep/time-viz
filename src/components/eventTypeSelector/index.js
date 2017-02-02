import React from 'react'

export const EventTypeSelector = (props) => (
  <select
    value={props.currentEventType}
    onChange={props.handleSelectionChange}>
    <option value="work">work</option>
    <option value="errand">errand</option>
  </select>
)

EventTypeSelector.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
}
