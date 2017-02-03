The dropdown menu we created in section ["Controlled_Component"](https://github.com/sysrep/time-viz/blob/master/Controlled_Component.md) is surely a controlled component. It could mutate the application states via user interactions (click on the dropdown meanu and change its value). We could see changes on the UI accordingly (it is possible to "see" the value of dropdown menu when it changed.)

see the mutation of application states in the React tab, Chrome developer console.

However, is it possbile to use this application state (this.state.eventType) that it mutated and change other part of UI? What I want to do is to filter the list of events based on the "eventType". If user selects an eventType in the dropdown meanu, the only events rendered on our UI should be matched the "eventType".



