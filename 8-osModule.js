const os=require('os');

//info about user 
const userName = os.userInfo();
console.log(userName);
//method return system uptime
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalmem:os.totalmem(),
}
console.log(currentOs);
