//output a promt

let pwd = require('./pwd.js')
let ls = require('./ls.js')
let cat = require('./cat.js')

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //remove new line.
    //process.stdout.write(`You typed: ${cmd}`);
    if (cmd === 'pwd') {
        return pwd()
    } else if (cmd === 'ls') {
        return ls()
    } else if (cmd === 'cat') {
        return cat()
    } else {
        process.stdout.write('\nprompt > ');
    }
});