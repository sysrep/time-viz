We have created a timeline. It's a controlled component. We could mutate the application state and see it changed. However, it looks ugly. I want to improve the style of our timeline. I will add CSS classes to the element and transform it into a horizontal timeline.

To make it horizontal, I have written a service function `getTimeByPercentage.js` in the `lib` that helps us to get time in the format of percentage. If an event has a timestamp "10:00" (in 24h format), the service function will return the timestamp in percentage, which equals 10/24 === 0.416 (41.6%).

Add `getTimeInPercentage.js` in `lib` with the following content.
```
export const getTimeInPercentage = (time) => {
  const t = new Date(time);
  const seconds = t.getSeconds();
  const hoursInSec = t.getHours() * 60 * 60;
  const minInSec = t.getMinutes() * 60;
  return 100 * ((hoursInSec + minInSec + seconds) / 86400);
}
```

I will import`getTimeByPercentage` in our event component.
Replace (almost) everything in `components/event/index.js` with the following code.

```
import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../../lib/getTimeInPercentage.js'

export const Event = (props) => (
  <div
    className="eventPoint"
    style={{
      left: `${getTimeInPercentage(props.event.start)}%`,
    }}
  >
  </div>
)

Event.propTypes = {
  event: React.PropTypes.object,
}
```

Note that we use getTimeInPercentage to get the position of the element. I will create a CSS file called `style.css` and import in our element. In `style.css`, I add some basic styles for the event.
```
.eventPoint {
  position: absolute;
  top: 20vh;
  height: 5vh;
  width: 5vh;
  border-radius: 5vh;
  background: rgba(0, 0, 0, 0.2);
}
```

In `App.js`, replace the orginal JSX in render() with the following code
```
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
```
Note that there is a new CSS class `timelineContainer`. I will add the class in our App.css.
```
.timelineContainer {
  margin: 10px 20px 0;
  width: 100%;
  height: 75vh;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
```
New tweak applies on `.eventDateSelectorContainer` as well.
```
.eventDateSelectorContainer {
  margin: 10px 20px 0;
}
```

[Source code for this step](https://github.com/sysrep/time-viz/commit/c7d91477a4234720488d7c537f6dee072acc0726).

## TASK

* Try new CSS styles, for exmaple, edit `background`, `width` or `border-radius` in `.eventPoint` CSS class to see how it changes.
* Make a vertical timeline instead of horizontal one we have.
