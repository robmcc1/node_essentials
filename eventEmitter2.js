const EventEmitter = require('events').EventEmitter;
const util = require('util');

var Person = function(_name) {
    this.name = _name;
};
util.inherits(Person, EventEmitter);

var ben = new Person('Ben Franklin');

ben.on('speak', function(said){
    console.log(`${this.name} says ${said}`);
    
});

ben.emit('speak', 'You may delay, but time will not');
