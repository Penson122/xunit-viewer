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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M657 1008h207q-14 158-98.5 248.5t-214.5 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-203q-5-64-35.5-99t-81.5-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 40 51.5 66 18q95 0 109-139zm712 0h206q-14 158-98 248.5t-214 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-204q-4-64-35-99t-81-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 39.5 51.5 65.5 18q49 0 76.5-38t33.5-101zm359-119q0-207-15.5-307t-60.5-161q-6-8-13.5-14t-21.5-15-16-11q-86-63-697-63-625 0-710 63-5 4-17.5 11.5t-21 14-14.5 14.5q-45 60-60 159.5t-15 308.5q0 208 15 307.5t60 160.5q6 8 15 15t20.5 14 17.5 12q44 33 239.5 49t470.5 16q610 0 697-65 5-4 17-11t20.5-14 13.5-16q46-60 61-159t15-309zm192-761v1536h-2048v-1536h2048z' }));;
}