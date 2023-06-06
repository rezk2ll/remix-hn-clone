/**
 * Calculates the time difference between the current time and a given unix timestamp
 *
 * @param {number} unixTimestamp the unix timestamp
 * @returns {string} the time difference in days, hours, minutes or seconds
 */
export const getTimeDifference = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days`;
  }

  if (hours > 0) {
    return `${hours} hours`;
  }

  if (minutes > 0) {
    return `${minutes} minutes`;
  }

  return `${seconds} seconds`;
};
