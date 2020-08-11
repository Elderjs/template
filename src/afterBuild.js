const glob = require('glob');
const { getConfig } = require('@elderjs/elderjs');
const path = require('path');

const config = getConfig();
console.log(glob.sync(path.join(process.cwd(), config.locations.public) + '/**/**'));
