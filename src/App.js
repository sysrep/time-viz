import React, { Component } from 'react';
import './App.css';
// import { loadEvents } from './lib/loadEvents.js'
import { fiterEventsByTime } from './lib/fiterEventsByTime.js'
// import { getSentimentOfEvent,  getEmotionOfEvent } from './lib/getSentiment';
// import { getRandomSubarray } from './lib/getRandomSubarray';
// import { filterEventHasNoTag } from './lib/filterEventHasNoTag';
import { TimeLine } from './components/timeLine'
import { EventDateSelector } from './components/eventDateSelector'
import { Range } from './components/range';
import { emotionOfEvents } from './data/emotionOfEvents'
import { sentimentOfEvents } from './data/sentimentOfEvents'
import { events }  from './data/events';

class App extends Component {
  constructor() {
    super()
    const from = new Date(new Date().getTime() - 12.5 * (24 * 60 * 60 * 1000));
    const to = new Date(new Date().getTime() - 8 * (24 * 60 * 60 * 1000));
    this.state = {
      events: [],
      sentimentOfEvents: [],
      emotionOfEvents: [],
      currentEventType: '',
      from: from,
      to: to,
      zoom: 0.1,
    }
  }
  componentDidMount() {
    // loadEvents().then(events => {
      // const eventsHasTag = filterEventHasNoTag(events)
      // getSentimentOfEvent(eventsHasTag).then(respond => {
      //   const { results } = JSON.parse(respond)
      //   this.setState({ sentimentOfEvents: results })
      //   getEmotionOfEvent(eventsHasTag).then(respond => {
      //     const { results } = JSON.parse(respond)
      //     this.setState({ emotionOfEvents: results })
      //     this.setState({ events: eventsHasTag })
      //   })
      // })
    // })
    this.setState({ emotionOfEvents })
    this.setState({ sentimentOfEvents })
    this.setState({ events })
  }
  handleFromChange = (event) => {
    const v = event.target.value
    if (v.indexOf('-') > -1) {
      const year = v.slice(0,4);
      const month = parseFloat(v.slice(5,7)) - 1
      const date = parseFloat(v.slice(8,10))
      const newTime = new Date(this.state.from)
      newTime.setYear(year)
      newTime.setMonth(month)
      newTime.setDate(date)
      this.setState({ from: newTime });
    }
    if (v.indexOf(':') > -1) {
      const hour = parseFloat(v.slice(0,2))
      const min = parseFloat(v.slice(3,5))
      const second = parseFloat(v.slice(6,8))
      const newTime = new Date(this.state.from)
      newTime.setHours(hour)
      newTime.setMinutes(min)
      newTime.setSeconds(second)
      this.setState({ from: newTime });
    }
  }
  handleToChange = (event) => {
    const v = event.target.value
    if (v.indexOf('-') > -1) {
      const year = v.slice(0,4);
      const month = parseFloat(v.slice(5,7)) - 1
      const date = parseFloat(v.slice(8,10))
      const newTime = new Date(this.state.to)
      newTime.setYear(year)
      newTime.setMonth(month)
      newTime.setDate(date)
      this.setState({ to: newTime });

    }
    if (v.indexOf(':') > -1) {
      const hour = parseFloat(v.slice(0,2))
      const min = parseFloat(v.slice(3,5))
      const second = parseFloat(v.slice(6,8))
      const newTime = new Date(this.state.to)
      newTime.setHours(hour)
      newTime.setMinutes(min)
      newTime.setSeconds(second)
      this.setState({ to: newTime });
    }
  }
  handleOnZoomChange = (event) => {
    this.setState({ zoom: parseFloat(event.target.value) });
  }

  render() {
    const eventsInTimeRange = fiterEventsByTime(this.state.events, this.state.from, this.state.to);
    return (
      <div className="App">
        <TimeLine
          events={eventsInTimeRange}
          sentimentOfEvents={this.state.sentimentOfEvents}
          emotionOfEvents={this.state.emotionOfEvents}
          zoom={this.state.zoom}
          from={this.state.from}
          to={this.state.to}
          numberOfTimeMarks={24}
        />
        <EventDateSelector
          from={this.state.from}
          to={this.state.to}
          onFromChange={this.handleFromChange}
          onToChange={this.handleToChange}
        />
        <Range
          min={0.1}
          max={10}
          value={this.state.zoom}
          onChange={this.handleOnZoomChange}
        />
      </div>
    );
  }
}

export default App;
