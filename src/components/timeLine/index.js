import React from 'react'
import './style.css';
import { Event }  from '../event';
import { TimeStamp } from '../timeStamp';

export const TimeLine = (props) => (
  <div className="timelineContainer">
    {props.events.map((event, index) =>  {
      return (
        <Event
          event={event}
          sentiment={props.sentimentOfEvents[index]}
          emotion={props.emotionOfEvents[index]}
          zoom={props.zoom}
          from={props.from}
          to={props.to}
          key={event.id}
        />
      )
    })}
    <TimeStamp
      from={props.from}
      to={props.to}
      numberOfTimeMarks={props.numberOfTimeMarks}
    />
  </div>
)

TimeLine.propTypes = {
  events: React.PropTypes.array,
  sentimentOfEvents: React.PropTypes.array,
  emotionOfEvents: React.PropTypes.array,
  zoom: React.PropTypes.number,
  from: React.PropTypes.object,
  to: React.PropTypes.object,
  numberOfTimeMarks: React.PropTypes.number,
}
