const path = require('path');
console.log(path.basename(__filename));

var dirUploads = path.join(__dirname,'www','files','uploads');
console.log(dirUploads);

const util = require('util');

util.log(dirUploads);

//chromes v8 tells you about ram
const v8 = require('v8');
util.log(v8.getHeapStatistics());

util.log(v8.getHeapSpaceStatistics());
