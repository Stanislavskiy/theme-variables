function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $349a00930b14e029$export$2e2bcd8739ae039);
const $56172f1930ea069d$export$aacb266d5c99b002 = (themeObject, selectedTheme)=>{
    /**
   * Creates an object where the key matches the name of a CSS variable,
   * and the corresponding value depends on the passed key of the active theme
   *
   * @param  {Object} themeObject  An object containing theme description.
   * @param  {String} selectedTheme   A key of an active theme.
   */ let map = {
    };
    const iter = (obj, acc)=>{
        const keys = Object.keys(obj);
        keys.forEach((key)=>{
            if (typeof obj[key] === 'object') iter(obj[key], `${acc ? acc + '-' : '--'}${key}`);
            else if (key === selectedTheme) map[acc] = obj[key];
        });
    };
    iter(themeObject);
    return map;
};


const $d53ef5a1e3c01f1f$export$eb7563eff861cd45 = 'string';
const $d53ef5a1e3c01f1f$export$bbe2229a70517919 = 'object';
const $d53ef5a1e3c01f1f$export$9868bd9fa8772546 = [
    'string',
    'object'
];
const $d53ef5a1e3c01f1f$export$4fd720569787ab6f = {
    NOT_ALLOWED_TYPE: "You have provided an unexpected value type in your theme config. The value type for '$name' key is '$wrongType' which is not allowed. Only " + `${$d53ef5a1e3c01f1f$export$9868bd9fa8772546.map((string)=>string.replace(/^|$/gi, '\'')
    ).join(' | ')} ` + 'value types are allowed for the theme config.',
    NO_THEME_CONFIG: 'No theme config provided. Theme config is required.',
    WRONG_THEME_CONFIG: `Theme config has unexpected format. Only '${$d53ef5a1e3c01f1f$export$bbe2229a70517919}' is allowed.`,
    WRONG_KEY_TYPE: 'Invalid value for the theme key. Expected \'string\' but got \'$unexpected\''
};


const $494bf8388f3514e4$export$721aae4e3ead4833 = (themeConfig, key)=>{
    $494bf8388f3514e4$export$83ba20b3794774e1(key);
    $494bf8388f3514e4$export$d69bfe8f13fdef74(themeConfig);
};
const $494bf8388f3514e4$export$83ba20b3794774e1 = (key)=>{
    if (typeof key !== $d53ef5a1e3c01f1f$export$eb7563eff861cd45) throw new Error($d53ef5a1e3c01f1f$export$4fd720569787ab6f.WRONG_KEY_TYPE.replace('$unexpected', typeof key));
};
const $494bf8388f3514e4$export$d69bfe8f13fdef74 = (themeConfig)=>{
    if (typeof themeConfig !== $d53ef5a1e3c01f1f$export$bbe2229a70517919) throw new Error($d53ef5a1e3c01f1f$export$4fd720569787ab6f.WRONG_THEME_CONFIG);
    $494bf8388f3514e4$export$3592c43e6916be21(themeConfig);
};
const $494bf8388f3514e4$export$82f4a04ece8c92f1 = (key, value)=>{
    const replacer = {
        '$name': key,
        '$wrongType': typeof value
    };
    if ($d53ef5a1e3c01f1f$export$9868bd9fa8772546.indexOf(typeof value) === -1) throw new Error($d53ef5a1e3c01f1f$export$4fd720569787ab6f.NOT_ALLOWED_TYPE.replace(/\$name|\$wrongType/gi, (placeholder)=>replacer[placeholder]
    ));
};
const $494bf8388f3514e4$export$3592c43e6916be21 = (themeObject)=>{
    const iter = (obj)=>{
        const keys = Object.keys(obj);
        keys.forEach((key)=>{
            $494bf8388f3514e4$export$82f4a04ece8c92f1(key, obj[key]);
        });
    };
    iter(themeObject);
};


const $349a00930b14e029$var$main = (themeConfig, themeKey)=>{
    /**
   * Generate theme variables and assign values from the given theme config
   *
   * @param  {Object} themeConfig  An object containing theme description.
   * @param  {String} themeKey   A key of an active theme.
   */ $494bf8388f3514e4$export$721aae4e3ead4833(themeConfig, themeKey);
    const map = $56172f1930ea069d$export$aacb266d5c99b002(themeConfig, themeKey);
    const root = document.documentElement;
    for(let key in map)if (map.hasOwnProperty(key)) root.style.setProperty(key, map[key]);
};
var $349a00930b14e029$export$2e2bcd8739ae039 = $349a00930b14e029$var$main;


//# sourceMappingURL=main.js.map
