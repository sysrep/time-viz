import React from 'react'

export const Event = (props) => (
  <li>{props.event.targettedResource.title}</li>
)

Event.propTypes = {
  event: React.PropTypes.object,
}
