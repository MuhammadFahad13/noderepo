


const {readFile ,writeFile} = require('fs');

console.log(`starting task`)

readFile('./NewFolder/subfolder/first.txt', 'utf-8',(err,result)=>{

    if(err){
        console.log(err)
return
    }
    
 let first = result;

 readFile('./NewFolder/subfolder/first.txt', 'utf-8',(err,result)=>{

    if(err){
        console.log(err)
return
    }
    
 let second = result;
 writeFile('./NewFolder/asyncwritedfile.txt',`here is the result ${first}file and here is ${second} file`, {flag:'a'},(err,result) =>{


    if(err){
        console.log(err)
return
    }

    console.log(`done with task`)

 }
 
 )
 console.log(`starting next task`)



    
})
})