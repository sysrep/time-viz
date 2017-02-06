I have the all the data I need. It's time to design visual elements which represent the results of data analyisis.

I will inject the application states, the two array contains the data, `this.state.sentimentOfEvents` and `this.state.emotionOfEvents`, into my `<Event />` component. Note that I am using the second parameter of `.map()` to make sure I assign the corret value of sentiment and emotion.

```
{eventsInTimeRange.map((event, index) =>  {
  return (
    <Event
      event={event}
      sentiment={this.state.sentimentOfEvents[index]}
      emotion={this.state.emotionOfEvents[index]}
      key={event.id}
    />
  )
})}
```

Open `./lib/event/index.js`, add two extra props that have been injected. The type of sentiment should be number and the type of emotion should an object.

```
Event.propTypes = {
  event: React.PropTypes.object,
  sentiment: React.PropTypes.number,
  emotion: React.PropTypes.object,
  zoom: React.PropTypes.number,
}
```

Let's remove the original code `{eventsInTimeRange.map(event =>  <Event event={event} key={event.id}/> )}`, and think how we arw going to use `props.emotion` and `props.sentiment` in `<Event />`

I want to use vertical positioning to represent the value of `props.sentiment`. The higher the `props.sentiment`, the hight our event. The value of `props.sentiment` related to the positive emotion of the text context in the event. The more postive the text should have higher vertical positions in the timeline. My appraoch seems to make sense.

Since I am using the CSS "[top](http://www.w3schools.com/cssref/pr_pos_top.asp)" to apply visual style on my element. And by reading the definition of "[top](http://www.w3schools.com/cssref/pr_pos_top.asp)" in w3schools. I know that the "top" is the distance to the top edge of the elemnt's nearest positioned ancestor. (In our case is the distance to the edge of timelineContainer). I create a new constant `negativeness` and assing its value to "(1 - sentiment)"

```
const { sentiment } = props;
const negativeness = (1 - sentiment);
```
I will then assign the value of negativeness to CSS "top" and test if the result is what I wanted.
```
<div
  className="eventPointContainer"
  style={{
    left: `${getTimeInPercentage(props.event.start)}%`,
    top: `${negativeness}%`,
  }}
>
</div>
```
If it doesn't work, I will look into its nearest element the `timelineContainer` and add `position: absolute;` in its CSS class.
