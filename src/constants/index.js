export const THEME_KEY_TYPE = 'string';
export const THEME_CONFIG_TYPE = 'object';
export const ALLOWED_VALUE_TYPE_LIST = [
  'string',
  'object'
];

export const ERRORS = {
  NOT_ALLOWED_TYPE: 'You have provided an unexpected value type in your theme config. ' +
    'The value type for \'$name\' key is \'$wrongType\' which is not allowed. Only ' +
    `${ALLOWED_VALUE_TYPE_LIST.map(string => string.replace(/^|$/gi, '\'')).join(' | ')} ` +
    'value types are allowed for the theme config.',
  NO_THEME_CONFIG: 'No theme config provided. Theme config is required.',
  WRONG_THEME_CONFIG: `Theme config has unexpected format. Only '${THEME_CONFIG_TYPE}' is allowed.`,
  WRONG_KEY_TYPE: 'Invalid value for the theme key. Expected \'string\' but got \'$unexpected\'',
}