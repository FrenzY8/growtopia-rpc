// Assalammualaikum Warahmatullahiwabarokatuh
/*Coded by FrenzySG#9999
Thanks to : 
- iMix
- Goodless
- iCrawl
- ChickenGTPS*/

// importing path
#!/usr/bin/env node

var join = require('path').join
var childProcess = require('child_process');
var args = process.argv.slice(2);

/* Failed Imported
const fs = require('fs')
const api = require('api.frenzy.xyz')
Stfu its Just Failed */

 args.unshift(__dirname + '/../'); 

childProcess.exec('npm start', (err, stdout) => {
if (err) console.log(err); // restart like usual
console.log(stdout);
})
