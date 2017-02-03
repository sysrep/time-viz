export const fiterEventsByTime = (events, from, to) => {
  return events.filter((event)=> {
    if (event.start < from.getTime()) {
      return false;
    }
    if (event.start > to.getTime()) {
      return false;
    }
    return true;
  })
}
