var express = require('express'),
    app = express(),
    port = 3000

var bodyParser = require('body-parser')

app.use('/', express.static(__dirname + '/'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./expressfs.server.js')(app)

app.listen(port)
