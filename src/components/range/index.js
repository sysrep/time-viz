import React from 'react'
import './style.css';

export const Range = (props) => (
  <div className="zoom">
    <input
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
    />
  </div>
)

Range.propTypes = {
  value: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  onChange: React.PropTypes.func,
}
