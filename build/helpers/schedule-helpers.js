"use strict";function isInTimeframe(e,r){const[t,s]=e.split(":"),n=Number.parseInt(t,10),i=Number.parseInt(s,10),[m,a]=r.split(":"),u=Number.parseInt(m,10),p=Number.parseInt(a,10),o=(new Date).getHours(),I=(new Date).getMinutes(),f=n>u||n===u&&i>p;return!f&&(o>n||o===n&&I>=i)&&(o<u||o===u&&I<p)||!(!f||!(o>n||o===n&&I>=i||o<u||o===u&&I<p))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isInTimeframe=void 0,exports.isInTimeframe=isInTimeframe;