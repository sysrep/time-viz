import { sentiment, emotion } from './indico';
import { getStringRepresentEvent } from './getStringRepresentEvent';

export const getSentimentOfEvent = (eventsArray) => {
  return sentiment(getStringRepresentEvent(eventsArray))
}

export const getEmotionOfEvent = (eventsArray) => {
  return emotion(getStringRepresentEvent(eventsArray))
}
