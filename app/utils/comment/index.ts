import type { AdjacentComments, FullItem } from '~/types';

/**
 * Recursively calculates the size of a comment tree.
 *
 * the total size is the number of comments + the parent comment
 *
 * @param {FullItem} comments - the initial comment list
 * @returns {number} the comment tree size
 */
export const getCommentsTreeSize = (comments: FullItem[]): number => {
  const initialSize = comments.length + 1;

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
