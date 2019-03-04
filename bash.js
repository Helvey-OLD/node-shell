//output a promt
process.stdout.write('prompt > ');

//The stdin 'data' evetn fires after a user types in a line
process.stdin.on('data', (data) => {
    //const cmd = data.toString().trim(); //remove new line.   



    process.stdout.write(`Current directory: ${process.cwd()}`);
    process.stdout.write('\nprompt > ');
});