var os = require('os');
console.log(os.arch());
const freeMemo = os.freemem();
console.log(`${freeMemo/1024/1024/1024}`);
// const freeMemo = os.freemem();
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.uptime());

