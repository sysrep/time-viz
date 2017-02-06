import React from 'react'
import './style.css';

const timeStamps = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

export const TimeStamp = () => (
  <div className="timeStampsWrapper">
    {timeStamps.map((time, index) =>
      <div
        className="timeStamp"
        key={`time ${index}`}
        style={{ left: `${(100 / 24) * index}%` }}
      >
        {time}
      </div>)
    }
  </div>
)

TimeStamp.propTypes = {

}
