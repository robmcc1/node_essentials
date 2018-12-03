var waitTime = 3000;
var currentTime = 0;
var waitInterval = 110;
var percentWaiting = 0;
// console.log('wait for it');
// setTimeout(()=> console.log('done'),waitTime);

function writeWaitingPercentage(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting .. ${p}%`);
}


var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaiting = Math.floor((currentTime / waitTime) * 100)
    // console.log(`waiting ${currentTime /1000} seconds...`);
    writeWaitingPercentage(percentWaiting);
}, waitInterval);

setTimeout(function() {
    clearInterval(interval);
    writeWaitingPercentage(100);
    console.log('\n\ndone \n\n');
    // process.exit();
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercentage(percentWaiting);
