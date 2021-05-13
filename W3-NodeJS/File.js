var fs = require('fs');
 
// fs.writeFile('demo.txt' ,"JAVED AHmaD" ,(err)=>{
//     if(err) console.log("ERROR:" + err);
//     else console.log("File Creared succesfully");
// })
fs.appendFile('demo.txt' ,"I am 23 years old" , (err)=>{
    if(err)  console.log(err);
    else console.log("Conent added");
})

// fs.readFile('demo.txt' , 'UTF-8' , (err , data)=>{
//     if(err) console.log(err);
//     else console.log(data)
// })
// fs.writeFile('demo.txt' ,"COntent is replaced" , (er)=>{
//     if(err)console.log(err);
//     else console.log("replaced");
// })



// fs.rename('demo.txt' , 'demo1.txt' ,(err)=>{
//     if(err) console.log(err);
//     else console.log("file Renamed");
// })


// fs.readFile('demo1.txt' ,'utf-8' ,(err , data)=>{
//     if(err) console.log("error: " + err);
//     else console.log(data);
// })
