const fs = require('fs');

module.exports = function() {
    fs.readFile('/etc/passwd', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);

    });
}