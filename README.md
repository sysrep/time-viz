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

# Get Start
* I prefer the Atom editor <https://atom.io/>
* cd to your project folder
* `yarnpkg start`
* open <http://localhost:3000> in Chrome. You should see a "Welcome to React" screen.
* open your project folder in Atom
* try edit `src/App.js` (e.g. replace the string "welcome to react" to something else) to see the changes
* try & read error message

# Add elements and apply CSS styles
replace App.js with the following code:
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
      </div>
    );
  }
}

export default App;

```
* 
