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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1280 704q0-26-19-45t-45-19q-172 0-318 49.5t-259.5 134-235.5 219.5q-19 21-19 45 0 26 19 45t45 19q24 0 45-19 27-24 74-71t67-66q137-124 268.5-176t313.5-52q26 0 45-19t19-45zm512-198q0 95-20 193-46 224-184.5 383t-357.5 268q-214 108-438 108-148 0-286-47-15-5-88-42t-96-37q-16 0-39.5 32t-45 70-52.5 70-60 32q-30 0-51-11t-31-24-27-42q-2-4-6-11t-5.5-10-3-9.5-1.5-13.5q0-35 31-73.5t68-65.5 68-56 31-48q0-4-14-38t-16-44q-9-51-9-104 0-115 43.5-220t119-184.5 170.5-139 204-95.5q55-18 145-25.5t179.5-9 178.5-6 163.5-24 113.5-56.5l29.5-29.5 29.5-28 27-20 36.5-16 43.5-4.5q39 0 70.5 46t47.5 112 24 124 8 96z' }));;
}