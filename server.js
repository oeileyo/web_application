let express = require('express');
let app = express();

app.get('/', function (req, res){
    res.sendFile('/Users/Anastasia/Desktop/Учеба/5 и 6 семестр/WEB/new_10_02/index.html')
});

app.listen(8089);