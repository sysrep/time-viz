import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../../lib/getTimeInPercentage.js'

export const Event = (props) => {
  const { joy, surprise, fear, anger, sadness } = props.emotion;
  const { sentiment } = props;
  const positionScalar = 95;
  const negativeness = (1 - sentiment) * positionScalar;
  const heightScalar = props.zoom;
  return (
    <div
      className="eventPointContainer"
      style={{
        left: `${getTimeInPercentage(props.event.start, props.from, props.to)}%`,
      }}
    >
        <div
          className="barContainer"
          style={{
            opacity: `${sentiment*0.85}`,
          }}
        >
          <div
            className="barShadow"
            style={{
              top: `${negativeness}%`,
              height: `${(anger+(anger+joy)/2+joy+(joy+fear)/2+fear+surprise+sadness+(sadness+anger)/2)*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="anger"
            style={{
              top: `${negativeness}%`,
              height: `${anger*heightScalar}%`,
            }}
          >
          </div>

          <div
            className="anticipation"
            style={{
              top: `${negativeness+anger*heightScalar}%`,
              height: `${(anger+joy)/2*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="joy"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar}%`,
              height: `${joy*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="trust"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar+joy*heightScalar}%`,
              height: `${(joy+fear)/2*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="fear"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar+joy*heightScalar+(joy+fear)/2*heightScalar}%`,
              height: `${fear*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="surprise"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar+joy*heightScalar+(joy+fear)/2*heightScalar+fear*heightScalar}%`,
              height: `${surprise*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="sadness"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar+joy*heightScalar+(joy+fear)/2*heightScalar+fear*heightScalar+surprise*heightScalar}%`,
              height: `${sadness*heightScalar}%`,
            }}
          >
          </div>
          <div
            className="disgust"
            style={{
              top: `${negativeness+anger*heightScalar+(anger+joy)/2*heightScalar+joy*heightScalar+(joy+fear)/2*heightScalar+fear*heightScalar+surprise*heightScalar+sadness*heightScalar}%`,
              height: `${(sadness+anger)/2*heightScalar}%`,
            }}
          >
          </div>
        </div>
    </div>
  )
}

Event.propTypes = {
  event: React.PropTypes.object,
  sentiment: React.PropTypes.number,
  emotion: React.PropTypes.object,
  zoom: React.PropTypes.number,
  from:  React.PropTypes.object,
  to:  React.PropTypes.object,
}
