import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../../lib/getTimeInPercentage.js'

export const Event = (props) => (
  <div
    className="eventPoint"
    style={{
      left: `${getTimeInPercentage(props.event.start)}%`,
    }}
  >
  </div>
)

Event.propTypes = {
  event: React.PropTypes.object,
}
