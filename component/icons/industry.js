import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M448 0q26 0 45 19t19 45v891l536-429q17-14 40-14 26 0 45 19t19 45v379l536-429q17-14 40-14 26 0 45 19t19 45v1152q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h384z' }));;
}