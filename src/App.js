import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js'
import { fiterEventsByTime } from './lib/fiterEventsByTime.js'
import { getSentimentOfEvent,  getEmotionOfEvent } from './lib/getSentiment';
import { getRandomSubarray } from './lib/getRandomSubarray';
import { filterEventHasNoTag } from './lib/filterEventHasNoTag';
import { Event }  from './components/event'
import { TimeStamp } from './components/timeStamp';
import { EventDateSelector } from './components/eventDateSelector'
import { Range } from './components/range';

class App extends Component {
  constructor() {
    super()
    const now = new Date();
    const yestarday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    this.state = {
      events: [],
      sentimentOfEvents: [],
      emotionOfEvents: [],
      currentEventType: '',
      from: yestarday,
      to: now,
      zoom: 0.5,
    }
  }
  componentDidMount() {
    loadEvents().then(events => {
      const randomSample = getRandomSubarray(filterEventHasNoTag(events), 1000)
      getSentimentOfEvent(randomSample).then(respond => {
        const { results } = JSON.parse(respond)
        this.setState({ sentimentOfEvents: results })
      })
      getEmotionOfEvent(randomSample).then(respond => {
        const { results } = JSON.parse(respond)
        this.setState({ emotionOfEvents: results })
      })
    })
  }
  handleOnFromChange = (event) => {
    const newFromData = new Date(event.target.value)
    this.setState({ from: newFromData });
  }
  handleOnToChange = (event) => {
    const newEndDate = new Date(event.target.value)
    this.setState({ to: newEndDate });
  }
  handleOnZoomChange = (event) => {
    this.setState({ zoom: parseFloat(event.target.value) });
  }
  render() {
    const eventsInTimeRange = fiterEventsByTime(this.state.events, this.state.from, this.state.to);
    return (
      <div className="App">
        <div className="timelineContainer">
          {eventsInTimeRange.map((event, index) =>  {
            return (
              <Event
                event={event}
                sentiment={this.state.sentimentOfEvents[index]}
                emotion={this.state.emotionOfEvents[index]}
                zoom={this.state.zoom}
                key={event.id}
              />
            )
          })}
          <TimeStamp />
        </div>
        <div className="eventDateSelectorContainer">
          <EventDateSelector
            from={this.state.from.toISOString().replace("Z","")}
            to={this.state.to.toISOString().replace("Z","")}
            onFromChange={this.handleOnFromChange}
            onToChange={this.handleOnToChange}
          />
        </div>
        <div className="zoom">
          <Range
            min={0.1}
            max={10}
            value={this.state.zoom}
            onChange={this.handleOnZoomChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
