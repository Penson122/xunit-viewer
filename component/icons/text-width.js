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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M209 129l54 27q12 5 211 5 44 0 132-2t132-2q70 0 246.5-1t304.5-.5 247 4.5q33 1 56-31l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-47.5t-15-73.5-7-36q-10-13-27-19-5-2-66-2-30 0-93-1t-103-1-94 2-96 7q-9 81-8 136l1 152v-52q0 55 1 154t1.5 180 .5 153q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q7-16 11.5-74t6-145.5 1.5-155-.5-153.5-.5-89q0-7-2.5-21.5t-2.5-22.5q0-7 .5-44t1-73 0-76.5-3-67.5-6.5-32q-11-12-162-12-41 0-163 13.5t-138 24.5q-19 12-34 71.5t-31.5 111.5-42.5 54q-42-26-56-44v-383zm1229 1282q12 0 42 19.5t57.5 41.5 59.5 49 36 30q26 21 26 49t-26 49q-4 3-36 30t-59.5 49-57.5 41.5-42 19.5q-13 0-20.5-10.5t-10-28.5-2.5-33.5 1.5-33 1.5-19.5h-1024q0 2 1.5 19.5t1.5 33-2.5 33.5-10 28.5-20.5 10.5q-12 0-42-19.5t-57.5-41.5-59.5-49-36-30q-26-21-26-49t26-49q4-3 36-30t59.5-49 57.5-41.5 42-19.5q13 0 20.5 10.5t10 28.5 2.5 33.5-1.5 33-1.5 19.5h1024q0-2-1.5-19.5t-1.5-33 2.5-33.5 10-28.5 20.5-10.5z' }));;
}