# Create a React Component and apply CSS styles

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
Our component renders statically. In order to render our component dynamically. We need to give our component "states".
Add a constructor in your class to initial the states of the component:
```
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
    }
  }
```
We have a state called events now. We want to render it (make it visible). In the `render()` method. We will add
```
<ul>
  {this.state.events.map(event => <li>{event.targettedResource.title}</li> )}
</ul>
```
We are using curly braces to separate my new JavaScript (`<li>{event.targettedResource.title}</li>`)from the surrounding JSX with `this.state.events`. For each event, I want to return the JSX that's going to represent what we had in our static markup, which is a list item with the content of our event and in order to do that I can use a "map". The map function will take its own function that will get an event. It will pass that into our mapping function. (more on the map on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Open browser console. There should be a warning says `warning.js:36 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of App`. To avoid this error, we should add `key={event.id}` on the `<li>{event.targettedResource.title}</li>`

See full source code in this [commit](https://github.com/sysrep/time-viz/commit/9b573965c9d5fac1b4caf5e72e6b50465ea1ab94)

##TASK

Try to edit `App.css` and `App.js`. Add new CSS Classes for `<h2></h2>` tag and `<li></li>` tag and see their styling changes on browser.
