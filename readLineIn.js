var readLine = require('readline');
var rl = readLine.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    sayings: []
}

rl.question('What is the name of a person?', function(answer) { 
    realPerson.name = answer;

    rl.setPrompt(`What would ${realPerson.name} say? `);

    rl.prompt();

    rl.on('line', function(saying){
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            realPerson.sayings.push(saying);

            rl.setPrompt(`What else would ${realPerson.name} say? (Type 'exit' to exit) `)
            
            rl.prompt();
        }
    });
});

rl.on('close', function(){
    console.log('%s is a real person that says %j',realPerson.name,realPerson.sayings);
    process.exit();
})