const {readFileSync,writeFileSync}=require('fs');

// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./context/first.txt','utf-8');

const second = readFileSync('./context/second.txt','utf-8');

console.log(first,second);

writeFileSync(
    './context/result-sync.txt',`the result is: ${first},${second}`,
    {flag:'a'}
);



