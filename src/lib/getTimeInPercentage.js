export const getTimeInPercentage = (time, from, to) => {
  const t = new Date(time);
  const totalTimeOnTimeLine = Math.floor(to - from);
  return 100 * ((t.getTime() - from.getTime()) / totalTimeOnTimeLine);
}
