We're going to take the "event" that is currently defined in the `App` component and place in its own component. I've created a new directory under source called components and inside components another directory called "event".

In the "event" directory, I'm going to create a new file and I'm going to call that `index.js`. At the top of my new file, I'm going to import React from react.

```
import React from 'react'
```

Instead of creating a class that extends component like an App.js, we can define this component as a plain JavaScript function. I'm going to declare constant call event and I'll just define this as an arrow function, and our return value will go inside these parenthesis. Our return value is going to be the JSX for a event element.

let's cut that out of `App.js`
```
<li>{event.targettedResource.title}</li>
```
to `component/event/index.js`
```
export const Event = () => (
  <li>{event.targettedResource.title}</li>
)
```
We need to export our component, so we can use it in our app. We can go into AppJS and import it.
```
import { Event }  from './components/event'
```
Now that we've imported the component, let's use it in our JSX. In `render()` method of `App`, I add `<Event />` in between the `<ul>` tag. (don't forget the "key" since it's in a map function.)
```
<ul>
  {this.state.events.map(event =>  <Event key={event.id}/> )}
</ul>
```
This is not enough, we need to pass the event data to the `<Event />`. This is done by passing "props".
To pass "props" in './components/event'
```
export const Event = (props) => (
  <li>{props.event.targettedResource.title}</li>
)
```
Add also in `App`. Add event props on `<Event />`
```
<ul>
  {this.state.events.map(event =>  <Event event={event} key={event.id}/> )}
</ul>
```


