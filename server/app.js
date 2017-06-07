var express = require('express');
var app = express();
var logger = require('morgan');

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express(),
    server = require('http').createServer(app);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));


//静态文件
app.use(express.static(path.join(__dirname, 'public')));

//上传文件中间件开始
var upload = require('jquery-file-upload-middleware');
// configure upload middleware
upload.configure({
    uploadDir: path.join(__dirname, 'public', 'uploads'),
    uploadUrl: '/uploads',
    imageVersions: {
        thumbnail: {
            width: 80,
            height: 80
        }
    }
});
app.use('/upload', upload.fileHandler());
//上传文件中间件结束

var httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({auth: "admin:"});
proxy.on('error', function (err, req, res) {
    console.error(err);
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});

app.use('/camera01', function (req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    proxy.web(req, res, {target: 'http://192.168.3.91:81'});
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).end();
});

//start
var port = 3000;
server.listen(port, function () {
    console.log('App listening on port ' + port);
});

