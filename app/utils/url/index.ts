/**
 * Extracts the domain name from a URL
 *
 * @param {string} url the full url
 * @returns {string} the domain name of the url
 */
export const getUrlDomain = (url: string): string => {
  return new URL(url).hostname;
};
