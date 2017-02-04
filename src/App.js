import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js'
import { fiterEventsByTime } from './lib/fiterEventsByTime.js'
import { Event }  from './components/event'
import { EventDateSelector } from './components/eventDateSelector'

class App extends Component {
  constructor() {
    super()
    const now = new Date();
    const yestarday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    this.state = {
      events: [],
      currentEventType: '',
      from: yestarday,
      to: now,
    }
  }
  componentDidMount() {
    loadEvents().then(events => this.setState({ events }))
  }
  handleOnFromChange = (event) => {
    const newFromData = new Date(event.target.value)
    this.setState({ from: newFromData });
  }
  handleOnToChange = (event) => {
    const newEndDate = new Date(event.target.value)
    this.setState({ to: newEndDate });
  }
  render() {
    const eventsInTimeRange = fiterEventsByTime(this.state.events, this.state.from, this.state.to);
    return (
      <div className="App">
        <div className="timelineContainer">
          {eventsInTimeRange.map(event =>  <Event event={event} key={event.id}/> )}
        </div>
        <div className="eventDateSelectorContainer">
          <EventDateSelector
            from={this.state.from.toISOString().replace("Z","")}
            to={this.state.to.toISOString().replace("Z","")}
            onFromChange={this.handleOnFromChange}
            onToChange={this.handleOnToChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
