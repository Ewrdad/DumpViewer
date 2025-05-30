/**
 * @typedef {Object} Filter
 * @property {string} segementedBy - The delimiter used to segment data (default: "/n").
 * @property {Object} columns - Configuration for column segmentation.
 * @property {boolean} columns.useCharCount - Whether to use character count for columns.
 * @property {string} columns.customChar - Custom character used for column segmentation (default: "/s").
 * @property {Object} exclude - Exclusion rules for filtering data.
 * @property {?RegExp} exclude.regex - Regular expression for excluding data.
 * @property {Object} exclude.lines - Line-based exclusion settings.
 * @property {number|undefined} exclude.lines.before - Number of lines before to exclude.
 * @property {number|undefined} exclude.lines.after - Number of lines after to exclude.
 * @property {Array} exclude.lines.list - List of specific lines to exclude.
 * @property {Object} highlight - Highlighting rules for data.
 * @property {?RegExp} highlight.regex - Regular expression for highlighting data.
 * @property {Object} highlight.lines - Line-based highlighting settings.
 * @property {number|undefined} highlight.lines.before - Number of lines before to highlight.
 * @property {number|undefined} highlight.lines.after - Number of lines after to highlight.
 * @property {Array} highlight.lines.list - List of specific lines to highlight.
 * @property {Array<Object>} sections - Array of section configurations.
 * @property {string} sections[].name - Name of the section.
 * @property {boolean} sections[].isVisible - Whether the section is visible.
 * @property {string|number} sections[].length - Length of the section ("all" or a number).
 * @property {number} sections[].viualWidth - Visual width of the section.
 * @property {Object} sections[].exclude - Exclusion rules specific to the section.
 * @property {?RegExp} sections[].exclude.regex - Regular expression for excluding data in the section.
 * @property {Object} sections[].highlight - Highlighting rules specific to the section.
 * @property {?RegExp} sections[].highlight.regex - Regular expression for highlighting data in the section.
 *
 **/
/** @type {typeof Filter} */
// @ts-ignore
export const Filter = {};
