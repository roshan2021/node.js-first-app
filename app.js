
//Event
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');


// //File System
// const fs = require('fs');
//
// // const files = fs.readdirSync('./');
// // console.log(files);
//
// //Asynchronous
// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });


// //Path via node.js
// const path = require('path');
//
// var pathObj = path.parse(__filename);
//
// console.log(pathObj);

// //Operating System
// const os = require('os');
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
//
// //Template string
// //ES6 / ES2015 : ECMAScript 6
//
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
