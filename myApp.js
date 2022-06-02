let express = require('express');
let app = express();
const bodyParser = require()

console.log("Hello world")
var response = "Hello json"

bodyParser.urlencoded({
    extended: false
})
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
app.get("/:word/echo", (req, res) => {
    var {
        word
    } = req.params;
    res.json({
        echo: word
    })
})
app.get("/name", function (req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;

    var {
        first: firstName,
        last: lastName
    } = req.query;

    res.json({
        name: `${firstName} ${lastName}`
    });
});






























module.exports = app;