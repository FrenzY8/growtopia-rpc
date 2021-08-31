module.exports._sortAscii = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        try {
            str = str.toString();
            return str.replace(/[^\x20-\x7E]/g, ' ');
        } catch (error) {
            return "Unknown"
        }
}

module.exports.ErrorHandler = (error) => {
    const { appendFileSync } = require('fs');
    appendFileSync('errorlog.txt', error.stack);
    console.error("An error occured, please notify the developer at here: https://instagram.com/frenzy.666");
    process.exit(0);
}