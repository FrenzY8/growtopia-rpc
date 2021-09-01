module.exports._sortAscii = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        try {
            // client.call('frenzy.xyz')
            str = str.toString();
            return str.replace(/[^\x20-\x7E]/g, ' ');
        } catch (error) {
            return "Unknown"
        }
}
// Credit : AykutSarac
module.exports.ErrorHandler = (error) => {
    const { appendFileSync } = require('fs');
    appendFileSync('errorlog.txt', error.stack);
    console.error("we got an error! please report this to issues!");
    process.exit(0);
}
