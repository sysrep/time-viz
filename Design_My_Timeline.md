I have all the data I need. It's time to design visual elements which represent the results of data analysis.

I will inject the application states, the two array contains the data, `this.state.sentimentOfEvents` and `this.state.emotionOfEvents`, into my `<Event />` component. Note that I am using the second parameter of `.map()` to make sure I assign the correct value of sentiment and emotion.

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

Open `./lib/event/index.js`, add two extra props that have been injected. The type of sentiment should be a number and the type of emotion should an object.

```
Event.propTypes = {
  event: React.PropTypes.object,
  sentiment: React.PropTypes.number,
  emotion: React.PropTypes.object,
  zoom: React.PropTypes.number,
}
```

Let's remove the original code `{eventsInTimeRange.map(event =>  <Event event={event} key={event.id}/> )}`, and think how we arw going to use `props.emotion` and `props.sentiment` in `<Event />`

I want to use vertical positioning to represent the value of `props.sentiment`. The higher the `props.sentiment`, the height our event. The value of `props.sentiment` related to the positive emotion of the text context in the event. The more positive the text should have higher vertical positions in the timeline. My approach seems to make sense.

Since I am using the CSS "[top](http://www.w3schools.com/cssref/pr_pos_top.asp)" to apply visual style on my element. And by reading the definition of "[top](http://www.w3schools.com/cssref/pr_pos_top.asp)" in w3schools. I know that the "top" is the distance to the top edge of the element's nearest positioned ancestor. (In our case is the distance to the edge of timelineContainer). I create a new constant `negativeness` and assign its value to "(1 - sentiment)"

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

I have one additional props, the `props.emotion` which is an object has the value of different emotions.
```
{
  "anger": 0.11695790290000001,
  "joy": 0.5528126955,
  "fear": 0.2042851001,
  "sadness": 0.102752775,
  "surprise": 0.0231916048
}
```
I want to use these values of emotions as well. It will be more interesting. Instead of using a dot/circle shape representing my events. What about replacing the circle with a bar that is composed by elements representing different emotions?

I add a wrapper element, the "barContainer" `<div className="barContainer"></div>` in the "eventContainer" `<div className="eventContainer">...</div>`. In addition, I add more "emotion" `<div></div>` inside the parent "barContainer" `<div className="barContainer"></div>`, each of the "emotion" `<div></div>` represent one kind of emotion. For example, "angry". In the "emotion" `<div></div>`. I apply CSS style "height" which equals to the value of the emotion (e.g. props.emotion.angry). I also move the "top" from the the "eventContainer" `<div className="eventContainer">...</div>` and apply the "top" on the "emotion" `<div></div>` instead.

```
<div
  className="eventPointContainer"
  style={{
    left: `${getTimeInPercentage(props.event.start)}%`,
    top: `${negativeness}%`,
  }}
>
  <div
    className="barContainer"
  >
   <div
      className="anger"
      style={{
        top: `${negativeness}%`,
        height: `${props.emotion.anger}%`,
      }}
    >
    </div>
    [...other emotions]
  </div>
</div>
```
The second element in this bar should be the emotion of "joy". I think "top" CSS style should equal to value "top" and "height" in previous emotion element (the "angry").
```
<div
  className="eventPointContainer"
  style={{
    left: `${getTimeInPercentage(props.event.start)}%`,
    top: `${negativeness}%`,
  }}
>
  <div
    className="barContainer"
  >
   <div
      className="anger"
      style={{
        top: `${negativeness}%`,
        height: `${props.emotion.anger}%`,
      }}
    >
    </div>
    <div
      className="joy"
      style={{
        top: `${negativeness+props.emotion.anger}%`,
        height: `${props.joy}%`,
      }}
    >
    </div>
    [...other emotions]
  </div>
</div>
```
I apply the same princple to other emotions elemnts. I am a lazy person, I don't want to type `props.emotion` when I need to sue `props.emotion.[emotion]` so I create new constants.
```
const { joy, surprise, fear, anger, sadness } = props.emotion;
```
And use them in all my emotion elements as `joy` instead of `props.emotion.joy`.
I was reading this article [Putting Some Emotion into Your Design – Plutchik’s Wheel of Emotions](https://www.interaction-design.org/literature/article/putting-some-emotion-into-your-design-plutchik-s-wheel-of-emotions) so I apply these color stamps in my CSS file `./components/event/style.css`.

For exmaple, the backgorund color of anger element should be `rgba(217, 85, 151, 1.0)`.
```
.anger {
  background: rgba(217, 85, 151, 1.0);
}
```
from this color wheel (<https://public-media.interaction-design.org/images/uploads/70cb81fe1b87d2703d5c2f127841efad.jpg>

In addition, by reading the article, I learn that the emotion of "anticipation" is located between "anger" and "joy" on the color wheel. I make an assumption that the value of "anticipation" equals the average value of "anger" plus "joy" (anticipation = (anger+joy)/2). The result of this assumption is that I have more categories of emotion that have values could be applied to my design.

To give users more control of my time. I add a zoom function and a range controller that can adjust the resolution of the bar.

To improve the outlook the elements in
