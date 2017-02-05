export const getStringRepresentEvent = (eventsArray) => {
  return eventsArray.map((event) => {
    return event.targettedResource.tags.map((tag) => tag.text).toString()
  })
}
