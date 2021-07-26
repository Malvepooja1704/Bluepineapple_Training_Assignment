const express = require('express');
const app = express();
var path = require("path");

app.use(express.static(__dirname + '/view'));

/*
app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.get('/api/course', (req, res) => {
    res.send([1, 2, 3, 4]);
});
*/
app.get('/start', function(req, res) {
    res.sendFile((path.join(__dirname + '/start.html')));
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});