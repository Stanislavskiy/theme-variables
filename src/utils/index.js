export const _generateStyleMap = (themeObject, selectedTheme) => {
  /**
   * Creates an object where the key matches the name of a CSS variable,
   * and the corresponding value depends on the passed key of the active theme
   *
   * @param  {Object} themeObject  An object containing theme description.
   * @param  {String} selectedTheme   A key of an active theme.
   */
	let map = {};

  const iter = (obj,acc) => {
		const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] === 'object') {
      	iter(obj[key], `${acc ? acc+'-' : '--'}${key}`);
      } else {
      	if (key === selectedTheme) {
        	map[acc] = obj[key]
        }
      }
    })
  };

  iter(themeObject);

  return map
};