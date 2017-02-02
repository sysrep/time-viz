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
        { id: 0, type: 'work', content: 'Yo! Hello World'},
        { id: 1, type: 'errand', content: 'Its Me Again'},
        { id: 2, type: 'errand', content: 'No not again'},
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

In react, our render view should be function of application states. If we change the state, the UI should be change accordingly. In this section, we will mutate the application states via user interactions on a “controlled component” and see changes on the UI accordingly (the UI is a representation of the current application state).

To see the React application state, you can install the [React Dev Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US)

Let's add a dropdown menu using HTML "select" tag with options in the method `render()`. 

```
<h2>Event Type</h2>
<select value={this.state.currentEventType} onChange={this.handleSelectionChange}>
  <option value="work">work</option>
  <option value="errand">errand</option>
</select>
```
And I also add a new key `currentEventType` property in the state.
```
this.state = {
  events: [
    { id: 0, type: 'work', content: 'Yo! Hello World'},
    { id: 1, type: 'errand', content: 'Its Me Again'},
    { id: 2, type: 'errand', content: 'No not again'},
  ],
  currentEventType: '',
}
```
Now, when I try to change the option of dropdown menu, nothing is going to happen. That's because my value is set to that empty string, and currently, I have no way of changing that. In order to allow input, we need to create an event handler that can capture the selected option and assign the value to the `currentEventType` property in the component state.

Let's start by adding a method to the component. I'm going to call that `handleSelectionChange`. That's going to accept an event. It will get the value of the option by calling `event.target.value`. We want to use this to reassign the current `currentEventType` property in our state.

If you're new to React, you're first instinct might be to call `this.state`, `.currentEventType` and reassign it using this incoming value. Instead, what we want to do is call the components, setState method and pass in a new value.

I'll call `this.setState`. I'm going to pass `.setState` an object (`{ currentEventType: event.target.value }`). This object is going to contain the key or the keys (`currentEventType`) that I want to update, along with their new values (`event.target.value`).

I want to update the `.currentEventType` value and I want that to be this `event.target.value`, so paste that in there. In order for this method to update our state, we have to do two things. First, we need to reference it in our constructor and bind it to this. (There are [many ways](https://medium.com/@housecor/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56#.kddkemxl5) to bind "this". I prefer "Use Arrow Function in Class Property")

I save my changes, the browser's refresh. I'm going to open up my React DevTools. We'll see that `currentEventType` is part of my state. I'm going to come up to my dropdown menu. I'm going to change the option. As I change the option, we're going to see the `currentEventType` in our state down in DevTools gets updated to reflect the current value of our my dropdown menu.

By doing this, we've ensured that our view as a function of state, keeping the rendered output and the state data in sync.

[take a break for 10 mins]
