const del = require('del');
const { getConfig } = require('@elderjs/elderjs');

const { distDir } = getConfig();

console.log(' Clearing out public folder.');
del.sync(`${distDir}*`);
