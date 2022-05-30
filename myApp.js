let express = require('express');
let app = express();


console.log("Hello world")
var response = "Hello json"

app.use("/public", express.static(__dirname + "/public"));
//app.use(__dirname + '/public/style.css');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})



app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({
            "message": response.toUpperCase()
        })
    } else {
        res.json({
            "message": response + "ok"
        })
    }

})































module.exports = app;