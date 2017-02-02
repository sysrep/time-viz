import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        {
          id: 0,
          type: 'work',
          targettedResource: {
            title: 'Yo! Hello World'
          },
        },
        {
          id: 1,
          type: 'errand',
          targettedResource: {
            title: 'Its Me Again',
          },
        },
        {
          id: 2,
          type: 'errand',
          targettedResource: {
            title: 'No not again',
          }
        },
      ],
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
        <select value={this.state.currentEventType} onChange={this.handleSelectionChange}>
          <option value="work">work</option>
          <option value="errand">errand</option>
        </select>
        <ul>
          {this.state.events.map(event => <li key={event.id} >{event.targettedResource.title}</li> )}
        </ul>
      </div>
    );
  }
}

export default App;
