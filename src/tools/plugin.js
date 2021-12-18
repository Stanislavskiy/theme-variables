import { _generateStyleMap } from '../utils';
import { _validate } from '../utils/validation';

const plugin = (themeConfig, themeKey) => {
  /**
   * Generate theme variables and assign values from the given theme config
   *
   * @param  {Object} themeConfig  An object containing theme description.
   * @param  {String} themeKey   A key of an active theme.
   */
  _validate(themeConfig, themeKey);

  const map = _generateStyleMap(themeConfig, themeKey);
  const root = document.documentElement;

  for (let key in map) {
    if (map.hasOwnProperty(key)) {
      root.style.setProperty(key, map[key])
    }
  }
};

export default plugin;