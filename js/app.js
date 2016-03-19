const readFile = require('fs-readfile-promise');

const onFulfilled = buffer => console.log(buffer.toString());
const onRejected = err => console.log('Cannot read the file.');
