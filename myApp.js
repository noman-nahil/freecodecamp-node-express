let express = require('express');
let app = express();

console.log("Hello world")


app.use(express.static(__dirname + "/public/style.css"));
//app.use(__dirname + '/public/style.css');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})































module.exports = app;