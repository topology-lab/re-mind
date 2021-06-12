
var express = require('express');
var app = express();

var compression = require('compression');
app.use(compression({
  threshold: 0,
  level: 9,
  memLevel: 9
}));

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(function (req, res, next) {
//    res.removeHeader('X-Powered-By');
//    res.removeHeader('ETag');
//    res.header('Cache-Control', ['private', 'no-store', 'no-cache', 'must-revalidate', 'proxy-revalidate'].join(','));
//    res.header('no-cache', 'Set-Cookie');

//    // リモートIPアドレス(お好みで)
//    req.remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    var span = 604800;      // week
//    var span = 2592000000;  // month
//    var span = 31536000;    // year

    res.header('Cache-Control', 'max-age='+span+', public');
    var expireDate = new Date(Date.now() + span).toUTCString();
    console.log('Expire Date:' + expireDate);
    res.header('Expires', expireDate);

    // cache never use
//    res.header('Cache-Control', 'no-cache');
//    res.header('Pragma', 'no-cache');
//    res.header('Expires', 'Mon, 26 Jul 1997 05:00:00 GMT');

    next();
});

app.use(express.logger('dev'));
//app.use(express.compress());
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
