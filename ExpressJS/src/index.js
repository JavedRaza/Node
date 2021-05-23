const path = require('path');
const express = require("express");
const app = express();
const port = 8000;
const staticpath = path.join(__dirname, "../statweb");
console.log(staticpath);
app.use(express.static(staticpath));

app.get('/', (req, res) => {
    res.send("this ss is a s home pages page");
})
app.get('/json', (req, res) => {
    res.json({
        name: "javed",
        branch: "B.tech",
        age: 23
    });
    console.log("jason");
});
app.get("/htmlpage", (req, res) => {
    res.send("< h3 > This is a heading < /h3>");
});

app.listen(port, () => {
    console.log("listning...");
})