const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}
module.exports = Logger;