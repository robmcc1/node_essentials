const events = require('events');
var emmiter = new events.EventEmitter();

emmiter.on('customEvent', function(message, status) {
    console.log(`message: \"${message}\", status: ${status}`);
       
});

emmiter.emit('customEvent','This is my message', 200); 