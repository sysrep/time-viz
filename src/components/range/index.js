import React from 'react'

export const Range = (props) => (
  <input
    type="range"
    value={props.value}
    min={props.min}
    max={props.max}
    onChange={props.onChange}
  />
)

Range.propTypes = {
  value: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  onChange: React.PropTypes.func,
}
