export const filterEventHasNoTag = (events) => {
  return events.filter((event)=> {
    if (event.targettedResource && event.targettedResource.tags && Array.isArray(event.targettedResource.tags) && event.targettedResource.tags.length > 0) {
      return true;
    }
    return false;
  })
}
