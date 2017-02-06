We're going to take the "event" that is currently defined in the `App` component and place in its own component. I've created a new directory under source called components and inside components another directory called "event".

In the "event" directory, I'm going to create a new file and I'm going to call that `index.js`. At the top of my new file, I'm going to import React from react.

```
import React from 'react'
```

Instead of creating a class that extends component like an App.js, we can define this component as a plain JavaScript function. I'm going to declare constant call event and I'll just define this as an arrow function, and our return value will go inside this parenthesis. Our return value is going to be the JSX for an event element.

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

This `<Event />` component represents an event that we can use to create new event items. In order for it to function properly, it receives a prop that is a javascript object contains the data of an event. If another member of our team wanted to use this component in another part of the application we'd like to be able to ensure they are passing in the correct props. Luckily, React has a mechanism for validating our component input called prop types. The first step in defining prop types for a component is to reference that component and call its prop types property.

I'll start with current `<Event />` component. We want to specify the `<Event />` component should be an object. We'll do that by calling `react.proptypes.string`. It's important to note when we're referencing prop types off of React to pick the type of our property we want to make sure we use the prop types here with a capital P. (see the list of [React PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)).

```
Event.propTypes = {
  event: React.PropTypes.object,
}
```
Source code in this [commit](https://github.com/sysrep/time-viz/commit/46a8c31323889bf07e8d182dc44fb021767f80fd)

##TASK

The next thing I will do is to make a stateless functional component for our dropdown menu (I want it a name as `<EventTypeSelector />`). I will follow the same steps in this tutorial. I suggest you try this task by yourself. The answer is in this [commit](https://github.com/sysrep/time-viz/commit/7e078eb506925a47d8748b7dc224c2f7677d6a6c).


