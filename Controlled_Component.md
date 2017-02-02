
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
  events: [...],
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

See source in this [commit](https://github.com/sysrep/time-viz/commit/9b573965c9d5fac1b4caf5e72e6b50465ea1ab94)
