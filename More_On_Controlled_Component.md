The dropdown menu we created in section ["Controlled_Component"](https://github.com/sysrep/time-viz/blob/master/Controlled_Component.md) is surely a controlled component. It could mutate the application states via user interactions (click on the dropdown meanu and change its value). We could see changes on the UI accordingly (it is possible to "see" the value of dropdown menu when it changed.)

see the mutation of application states in the React tab, Chrome developer console.

However, is it possbile to use this application state (this.state.eventType) that it mutated and change other part of UI? What I want to do is to filter the list of events based on the "eventType". If user selects an eventType in the dropdown meanu, the only events rendered on our UI should be matched the "eventType".

Let's look at the this.state.events to see what event types we have. There seems to be a "type" in the fisrt event object. However, all events in this list seems to have all the same "type". It is impossilbe to fiter events by type if all events have the same "type".

We see another key in the event object. There is a "start" key in the object. This is the timestamp of events. If we want to filter events by a key. Filtering timestamps will be useful since we are creating a timeline.

I will duplicate the folder of eventTypeSelector and rename it as eventDateSelector. I will use the `form` tag as my wrapper element.

```
export const EventDateSelector = (props) => (
)
```

I will use a HTML5 input element with the type "datatime-local" here. We want a range of time so there should be a "from" input element (with a label "from").

```
<label>from
  <input
    type="datetime-local"
  />
</label>
```
And also the "to" input with a label.
```
<label>to
  <input
    type="datetime-local"
  />
</label>
```
I want the our `EventDateSelect` to be a controlled component. I will link the `props` to the value of the input. I also add a listener on the element so if the value changes we will mutate the application states accordingly.

The fully-controlled component with two inputs.
```
<form>
  <label>from
    <input
      type="datetime-local"
      value={props.from}
      onChange={props.onFromChange} />
  </label>
  <label>to
    <input
      type="datetime-local"
      value={props.to}
      onChange={props.onToChange} />
  </label>
</form>
```
Don't forget to add the type checking for our props (from, to, onFromChange, onToChange)
```
EventDateSelector.propTypes = {
  from: React.PropTypes.string,
  to: React.PropTypes.string,
  onFromChange: React.PropTypes.func,
  onToChange: React.PropTypes.func,
}
```
Our component is almost ready. I will import into `App.js`.
```
import { EventDateSelector } from './components/eventDateSelector'
```
In the constructor of our App, I will add two additional application states `from` and `to`.
```
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
```
I also add two methods, `handleOnFromChange()` and `handleOnToChange()` for our App.
```
handleOnFromChange = (event) => {
  const newFromData = new Date(event.target.value)
  this.setState({ from: newFromData });
}
handleOnToChange = (event) => {
  const newEndDate = new Date(event.target.value)
  this.setState({ to: newEndDate });
}
```
Then I add our `<EventDateSelector />` component into our `render()` method. Don't forget to attach the application states and also the two methods. (We are calling the `.toISOString().replace("Z","")` because the input has reuirments for the format of date.
```
<EventDateSelector
  from={this.state.from.toISOString().replace("Z","")}
  to={this.state.to.toISOString().replace("Z","")}
  onFromChange={this.handleOnFromChange}
  onToChange={this.handleOnToChange}
/>
```
So far, what we have create a controllered element. Just like what we did in section ["Controlled_Component"](https://github.com/sysrep/time-viz/blob/master/Controlled_Component.md). The next thing we want to do is to apply the application state to other components.

I create a new file lib/filterEventsByTime.js and add the following code in it.
```
export const fiterEventsByTime = (events, from, to) => {
  return events.filter((event)=> {
    if (event.start < from.getTime()) {
      return false;
    }
    if (event.start > to.getTime()) {
      return false;
    }
    return true;
  })
}
```
Import the `fiterEventsByTime` function in our `App.js`
```
import { fiterEventsByTime } from './lib/fiterEventsByTime.js'
```
Create a const `eventsInTimeRange` at the beginning of `render()` method.
```
const eventsInTimeRange = fiterEventsByTime(this.state.events, this.state.from, this.state.to);
```
And use the new const `eventsInTimeRange` for the map.
```
<ul>
  {eventsInTimeRange.map(event =>  <Event event={event} key={event.id} /> )}
</ul>
```
Go to the browser to see the change of the application state in Developer console. The application state is used to filter the events by creating a new constant(a new list of events) using `this.state.from`  and `this.state.to`.

Soure code in this [commit](https://github.com/sysrep/time-viz/commit/4de9e2deb9fba1eadafe69116865bd4e8604f350)
