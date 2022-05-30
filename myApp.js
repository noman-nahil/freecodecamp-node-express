let express = require('express');
let app = express();


console.log("Hello world")
var response = "Hello json"

app.use("/public", express.static(__dirname + "/public"));
//app.use(__dirname + '/public/style.css');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
});

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({
            "message": "HELLO JSON"
        })
    } else {
        res.json({
            "message": "Hello json"
        })
    }
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        "time": req.time
    })
})































module.exports = app;