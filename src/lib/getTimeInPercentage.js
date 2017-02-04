export const getTimeInPercentage = (time) => {
  const t = new Date(time);
  const seconds = t.getSeconds();
  const hoursInSec = t.getHours() * 60 * 60;
  const minInSec = t.getMinutes() * 60;
  return 100 * ((hoursInSec + minInSec + seconds) / 86400);
}
