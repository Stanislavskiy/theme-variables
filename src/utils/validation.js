import { ALLOWED_VALUE_TYPE_LIST, ERRORS, THEME_CONFIG_TYPE, THEME_KEY_TYPE } from '../constants';

export const _validate = (themeConfig, key) => {
  _validateKey(key);
  _validateThemeConfig(themeConfig);
};

export const _validateKey = (key) => {
  if (typeof key !== THEME_KEY_TYPE) {
    throw new Error(ERRORS.WRONG_KEY_TYPE.replace('$unexpected', typeof key))
  }
}

export const  _validateThemeConfig = (themeConfig) => {
  if (typeof themeConfig === undefined) {
    throw new Error(ERRORS.NO_THEME_CONFIG);
  }

  if (typeof themeConfig !== THEME_CONFIG_TYPE) {
    throw new Error(ERRORS.WRONG_THEME_CONFIG);
  }

  _validateObjectValues(themeConfig);
};

export const _validateValue = (key, value) => {
  const replacer = {
    '$name': key,
    '$wrongType': typeof value
  };

  if (ALLOWED_VALUE_TYPE_LIST.indexOf(typeof value) === -1) {
    throw new Error(
      ERRORS.NOT_ALLOWED_TYPE.replace(
        /\$name|\$wrongType/gi,
        (placeholder) => replacer[placeholder])
    )
  }
};

export const _validateObjectValues = (themeObject) => {
  const iter = (obj) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      _validateValue(key, obj[key]);
    })
  };

  iter(themeObject);
};