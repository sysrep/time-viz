# time-viz
build a timeline visualization using your digital footprint.

# Install UI Development Environment 
* install node.js <https://nodejs.org/en/>
* isntall reactjs app creater `npm install -g create-react-app`
* `cd` to your project folder
* `create-react-app .`

# Configure DiMe for Development
* `cd ~./dime`
* `mkdir config`
* `touch application-local.properties`
* `open application-local.properties` and add a line `dime.corsAllowOrigin=http://localhost:3000,chrome-extension://[your-chrome-id]` (find your chrome extension id in <chrome://extensions/>. There should be a ID for a dime-webextension

[take a break for 10 mins]

# Start!
* I prefer the Atom editor <https://atom.io/>
* cd to your project folder
* `yarnpkg start`
* open <http://localhost:3000> in Chrome. You should see a "Welcome to React" screen.
* open your project folder in Atom
* try edit `src/App.js` (e.g. replace the string "welcome to react" to something else) to see the changes
* try & read error message

# Add elements and apply CSS styles
replace all content in `App.js` with the following code:
```
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>MyTimeLine</h2>
        </div>
        <ul>
          <li>Yo! Hello World</li>
          <li>Its Me Again</li>
          <li>No not again</li>
        </ul>
      </div>
    );
  }
}

export default App;

```
replace all content in `App.css` with the following code:
```
.App-header {
  height: 20px;
  color: black;
}

```
edit the height, background-color and color in `.App-header` to see the changes

# Apply "States" to your component.
Our component render statically. In order to render our component dynamically. We need to give our component "states".
Add a constrictor in your class to intial the states of the component:
```
  constructor() {
    super()
    this.state = {
      events: [
        { id: 0, content: 'Yo! Hello World'},
        { id: 1, content: 'Its Me Again'},
        { id: 2, content: 'No not again'},
      ]
    }
  }
```
We have a state called events now. We want to render it (make it visible). In the `render()` method. We will add
```
<ul>
  {this.state.events.map(event => <li>{event.content}</li> )}
</ul>
```
We are using curly braces to separate my new JavaScript (`<li>{event.content}</li>`)from the surrounding JSX with `this.state.events`. For each event, I want to return the JSX that's going to represent what we had in our static markup, which is a list item with the content of our event and in order to do that I can use a "map". The map function will take its own function that will get a event. It will pass that into our mapping function. (more on the map on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Open browser console. There should be a warning says `warning.js:36 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of App`. To avoid this error, we should add `key={event.id}` on the `<li>{event.content}</li>`

[take a break for 10 mins]

# A Controlled Component
In react, our render view should be function of application states. If we change the state, the UI should be change accordingly.
