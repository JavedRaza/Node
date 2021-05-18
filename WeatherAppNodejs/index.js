const http = require('http');
const fs = require('fs');
const requests = require('requests');
const mydata = fs.readFileSync('./home.html' , 'utf-8');
 
const replacedata = (temdata,orgdata) =>{
       let temprature = temdata.replace("{%tempval%}" , ((orgdata.main.temp)-273).toFixed())
        temprature = temprature.replace("{%country%}" , (orgdata.sys.country));
        temprature = temprature.replace("{%location%}" , (orgdata.name));
        temprature = temprature.replace("{%tempmax%}" , ((orgdata.main.temp_max)-273).toFixed() )
        temprature = temprature.replace("{%tempmin%}" , ((orgdata.main.temp_min)-273).toFixed())
        temprature = temprature.replace("{%tempstat%}" , (orgdata.weather[0].main));
        return temprature;
}


const server = http.createServer((req, res)=>{
     if(req.url == "/"){
          requests("http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=2b7b85d97b784b44af7d599df9fe628b")
         .on('data',  (chunk) => {
                   const realdata = [JSON.parse(chunk)];
               //  console.log(realdata);
                   const orgdata = realdata[0].main;
                   const replaceVal = realdata.map((org)=> replacedata(mydata ,org)).join("");
                    // console.log(replaceVal);
                    res.write(replaceVal);
                   })
         .on('end',  (err) => {
         if (err) return console.log('connection closed due to errors', err);
          // console.log("error");
           res.end();
         });
     }
     else{
          res.writeHead("404" , {"Content-type":"text/html"});
          res.end("404 Error");
     }
})
server.listen(3000,"127.0.0.1");





















  