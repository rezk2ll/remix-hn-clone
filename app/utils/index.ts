import type { AdjacentComments, FullItem } from '~/types';

/**
 * Extracts the domain name from a URL
 *
 * @param {string} url the full url
 * @returns {string} the domain name of the url
 */
export const getUrlDomain = (url: string): string => {
  return new URL(url).hostname;
};

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

/**
 * Recursively calculates the size of a comment tree
 *
 * @param {FullItem} comments - the initial comment list
 * @returns {number} the comment tree size
 */
export const getCommentsTreeSize = (comments: FullItem[]): number => {
  const initialSize = comments.length;

  return comments.reduce(
    (acc, comment) => acc + getCommentsTreeSize(comment.descendants),
    initialSize
  );
};

/**
 * Searches for the next and previous comment ids in a list of comments
 *
 * @param {FullItem[]} list the list of comments to search within
 * @param {number} index the current comment index
 * @returns {AdjacentComments} the previous and next comment ids
 * @example {next: 3, previous: 1}
 */
export const getAdjacentComments = (
  list: FullItem[],
  index: number
): AdjacentComments => {
  return {
    next: index === list.length - 1 ? null : list[index + 1].item.id,
    prev: index === 0 ? null : list[index - 1].item.id,
  };
};
