The events in this app are hard coded into the app's initial state and any changes are maintained in memory and lost when the application reloads. Let's integrate a DiMe API for our events so we can get data from DiMe when the app is loaded.

I will create a "service" that help me to load events from DiMe. First, add a new folder `lib` and create a js `loadEvents.js` in the folder.

In `loadEvents.js`, I'm going to start with a constant. The first thing I want to do with this API to load the events into the application when the application starts. I search in the WiKi of DiMe and find the [API Doc](https://github.com/HIIT/dime-server/wiki/API)

I want all events at the same time, according to the [API Doc](http://www.hiit.fi/g/reknow/apidoc/dime-server/#api-Events-GetAll), I should call GET on <http://localhost:8080/api/data/events>

The const URL has the correct value (the API endpoint of DiMe events).
```
const url = 'http://localhost:8080/api/data/events'
```

When we call the DiMe API, We need username and password. Let's do it by adding a new const `option` when calling fetch.

```
const username = 'chen';
const password = '12345';
const options = {
    headers: {
      Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
    },
}
```

I'm going to export a function that I'm going to call load events, and this function's going to return a call to fetch with our base URL. Fetch is going to return a response object. Since we want the JSON formatted data out of that, we're going to call .then, because we're going to get a promise back, and that's going to accept a response. (see more on the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))

```
export const loadEvents = () => {
  return fetch(url, options)
    .then(res => res.json())
}
```

Go Back to `App.js`, import `loadEvents` function at the beginning of the file.

```
import { loadEvents } from './lib/loadEvents.js'
```
I will call `loadEvents` when my application fully loaded, the `componentDidMount()` seems to be the right place. Add the method after the constructor.
```
  componentDidMount() {
    loadEvents().then(events => this.setState({ events }))
  }
```
Since we are calling DiMe APIs to get events, to make sure the data is coming from DiMe, delete items in `this.states.events` and make it an empty array.
```
constructor() {
    super()
    this.state = {
      events: [],
      currentEventType: '',
    }
}
``` 
See the list of events from DiMe is the browser.

See source code in this [commit](https://github.com/sysrep/time-viz/commit/c551c5074dfeec0736cf26c0f6e15cb7a9955f35)
