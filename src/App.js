import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js'
import { Event }  from './components/event'
import { EventTypeSelector } from './components/eventTypeSelector'

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      currentEventType: '',
    }
  }
  componentDidMount() {
    loadEvents().then(events => this.setState({ events }))
  }
  handleSelectionChange = (event) => {
    this.setState({ currentEventType: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>MyTimeLine</span>
        </div>
        <h2>Event Type</h2>
        <EventTypeSelector
          currentEventType={this.state.currentEventType}
          handleSelectionChange={this.handleSelectionChange}
        />
        <ul>
          {this.state.events.map(event =>  <Event event={event} key={event.id}/> )}
        </ul>
      </div>
    );
  }
}

export default App;
