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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1152 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zm-185-607q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zm-107-212q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zm-805-741q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 6 6.5 17.5t7.5 16.5q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z' }));;
}