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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M688 128q-48 0-79.5 34t-31.5 82q0 14 3 28l150 624h-26l-116-482q-9-38-39.5-62t-69.5-24q-47 0-79 34t-32 81q0 11 4 29 3 13 39 161t68 282 32 138v227l-307-230q-34-26-77-26-52 0-89.5 36.5t-37.5 88.5q0 67 56 110l507 379q34 26 76 26h694q33 0 59-20.5t34-52.5l100-401q8-30 10-88t9-86l116-478q3-12 3-26 0-46-33-79t-80-33q-38 0-69 25.5t-40 62.5l-99 408h-26l132-547q3-14 3-28 0-47-32-80t-80-33q-38 0-68.5 24t-39.5 62l-145 602h-127l-164-682q-9-38-39.5-62t-68.5-24zm645 1664h-694q-85 0-153-51l-507-380q-50-38-78.5-94t-28.5-118q0-105 75-179t180-74q25 0 49.5 5.5t41.5 11 41 20.5 35 23 38.5 29.5 37.5 28.5l-123-512q-7-35-7-59 0-93 60-162t152-79q14-87 80.5-144.5t155.5-57.5q83 0 148 51.5t85 132.5l103 428 83-348q20-81 85-132.5t148-51.5q87 0 152.5 54t82.5 139q93 10 155 78t62 161q0 30-7 57l-116 477q-5 22-5 67 0 51-13 108l-101 401q-19 75-79.5 122.5t-137.5 47.5z' }));;
}