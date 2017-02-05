In previous section, we learned NLP methods that can apply on the text in our events. I want more analytical results, for example, I am interested in [sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis). I want to know the sentiment of the text in my events.

We will use an external machine-learning service [indico.co](https://indico.io/), which has powerful machine learning APIs.

Create your indico account on [indico.co](https://indico.io) and apply for free API key. You can make 10,000 calls by free API key. For us, this is more than enough.

After reading the [dev-doc](https://indico.io/docs), I decided to use two APIs under "Text Analysis", the [Sentiment Analysis](https://indico.io/docs#sentiment) API and [Emotion](https://indico.io/docs#emotion) API seems to be fun to play with.

In the [dev-doc](https://indico.io/docs), they use jQuery as the exmaple libraray, so I will install jQuery first by
```
yarn add jquery --save
```
I `cd` into `./lib`, create a new js file with the name `idico.js` (by `touch idico.js`). This is a new service that make API calls to indico's API endpoints. In `idico.js`, I import jQuery, copy the example on indico's document, and edit the example code according to our needs.
```
export const sentiment = (textArray) => {
  return $.post(
    'https://apiv2.indico.io/sentiment/batch',
    JSON.stringify({
      'api_key': [you_API_key],
      'data': textArray,
    })
  )
}
```
The `sentiment` function will receive a `textArray`, "POST" it to the API endpoints of indico with the url <https://apiv2.indico.io/sentiment/batch> and your API_key, and return a promise (What's a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)).

It seems that <https://apiv2.indico.io/sentiment/batch> endpoint only allows a array of text as data input. I need to reformat the event before into text array.

I create a new service `getStringRepresentEvent` in `./lib`. This function will accept an array of event, return a array of strings, representing the event. The string is composed by the tags in the event. 
```
export const getStringRepresentEvent = (eventsArray) => {
  return eventsArray.map((event) => {
    return event.targettedResource.tags.map((tag) => tag.text).toString()
  })
}
```
To make our code clean and easier to read, I create yet another new service `getSentiment.js` in `./lib` that is a composite function of `getStringRepresentEvent()` and  `sentiment()` in `lib/indico.js`.


I will import `getStringRepresentEvent()` from `./lib/getStringRepresentEvent.js` and  `sentiment()` from `lib/indico.js`.
```
import { sentiment } from './indico';
import { getStringRepresentEvent } from './getStringRepresentEvent';
```
Combine two imported function into ` getSentimentOfEvent`.
```
export const = (eventsArray) => {
  return sentiment(getStringRepresentEvent(eventsArray))
}

```
