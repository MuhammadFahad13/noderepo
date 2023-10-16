const { log } = require('console')
const os = require('os')

const user = os.userInfo();


console.log(user);

console.log(`System up time is ${os.uptime()} seconds`);

const systemosinfo ={

    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    FreeMem:os.freemem(),

}
console.log(systemosinfo)