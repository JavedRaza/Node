// const chalk = require('chalk');
// const validator = require('validator');
// console.log(chalk.red("Hello World"));
// let res = validator.isEmail("javed@javecom");
// console.log(res);
// res?console.log(chalk.green(res)):console.log(chalk.red(res));
 
const http = require('http');

http.createServer((req,res)=>{
     if(req.url=="/"){
         res.end("Welcom to home page");
     }
     else if(req.url=="/contact"){
        // res.writeHead(200,{"Content-Type":"html/text"});
         res.end("Welcome to contact us page");
     }
     else{
        // res.writeHead(404 );
         res.end("404 error");
     }
    
}).listen(8080);