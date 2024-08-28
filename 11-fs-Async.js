const {readFile,writeFile}=require('fs');

// const fs = require('fs');
// fs.readFile

//require a callback if complete then run call back
// readFile('./context/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
    

// })
readFile('./context/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./context/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './context/result-async.txt',
            `here the result : ${first},${second}`,
            (err,result)=>{
                if(err){
                console.log(err);
                return
            }
            console.log(result)
        })
    })
})


