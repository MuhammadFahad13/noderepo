const {readFileSync ,writeFileSync} = require('fs');

console.log(`starting task`)

const first = readFileSync('./NewFolder/subfolder/first.txt','utf-8');
const second = readFileSync('./NewFolder/subfolder/second.txt','utf-8');

writeFileSync('./NewFolder/writedfile.txt',`here is the ${first}file and here is ${second} file`,{flag:'a'})
console.log(`done with task`)

console.log(first,second);
console.log(`starting next task`)