export const breakpoints = {
  lg: '1200px',
  md: '960px',
  sm: '768px',
  xs: '360px',
};

/**
 * @description mediaQuery
 * @param lg `1200px`
 * @param md `960px`
 * @param sm `600px`
 * @param xs `360px`
 */
export const mediaQuery = {
  lg: `@media (max-width: ${breakpoints.lg})`,
  md: `@media (max-width: ${breakpoints.md})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  xs: `@media (max-width: ${breakpoints.xs})`,
};
