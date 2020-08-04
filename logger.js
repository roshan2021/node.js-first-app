//Event
const EventEmitter = require('events');

var url = 'http://mylodger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        //Raise an event                  //Event Argument
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;

