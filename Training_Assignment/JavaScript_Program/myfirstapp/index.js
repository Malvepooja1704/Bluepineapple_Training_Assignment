const express = require('express');
var math = require('mathjs');
const bodyParser = require('body-parser');
const { response, request } = require("express");
const app = express();
var jsonParser = bodyParser.json();

app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static("./"));
app.use(bodyParser.urlencoded({ extended: false }));

function complex_add(addNum1, addNum2) {
    var ans = math.add(addNum1, addNum2);
    if (ans.imag === '0') return '' + ans.real;
    if (ans.real === 0) return '' + ans.imag + 'i';
    if (ans.imag < 0) return '' + ans.real + ans.imag + 'i';
    return '' + ans.real + '+' + ans.imag + 'i';
}

app.post("/add", (request, response, next) => {
    console.log("got req of addition");
    console.log(request.body);
    const addFun1 = math.complex(request.body.real1, request.body.img1)
    const addFun2 = math.complex(request.body.real2, request.body.img2)
    var addOutput = complex_add(addFun1, addFun2);
    reaponse.send(addOutput);
});