//async process, event listeners 

var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your prefferred programming language?"
]
var answers = [];

function ask(i){
    process.stdout.write(`${questions[i]}`);
    process.stdout.write('  >  ');
}

//listen or user data
process.stdin.on('data', function(data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n');
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

})

process.on('exit', function(){
    process.stdout.write('\n\n\n\n');

    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
    process.stdout.write('\n\n\n\n');


})


ask(0);