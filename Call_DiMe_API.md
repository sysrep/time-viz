The events in this app are hard coded into the app's initial state and any changes are maintained in memory and lost when the application reloads. Let's integrate a DiMe API for our events so we can get data from DiMe when app is loaded.

I will create a "service" that help me to load events from DiMe. First, add a new folder `lib` and creat a js `loadEvent.js` in the folder.

In `loadEvent.js`, I'm going to start with a constant. The first thing I want to do with this API is use it to load the events into the application when the application starts. I search in the WiKi of DiMe and find the [API Doc](https://github.com/HIIT/dime-server/wiki/API)

I want all events at the same time, according to the API Doc, I should call GET on <http://localhost:8080/api/data/events>
<http://www.hiit.fi/g/reknow/apidoc/dime-server/#api-Events-GetAll>

The const url has the corret value (the API endpoint of DiMe events).
```
const url = 'http://localhost:8080/api/data/events'
```

When we call the DiMe API, We need username and password. Let's do it by adding a new const `option` when calling fetch.

```
const username = [your_user_name];
const password = [your_password];
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

