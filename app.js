
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,charts= require('./routes/charts');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/charts',charts.charts);
app.get('/stats',charts.stats);
app.get('/prediction',charts.prediction);
app.get('/about',charts.about);
app.get('/blockChain',charts.blockChain);
app.get('/bitcoinDestroy',charts.bitcoinDestroy);
app.get('/bitcoinDestroyCummilative',charts.bitcoinDestroyCummilative);
app.get('/bitcoinsUsed',charts.bitcoinsUsed);

app.get('/costPercTransVol',charts.costPercTransVol);
app.get('/costPerTran',charts.costPerTran);
app.get('/deep_minified',charts.deep_minified);
app.get('/difficulty',charts.difficulty);
app.get('/exchangeRate',charts.exchangeRate);
app.get('/hashRate',charts.hashRate);
app.get('/marketCapitalization',charts.marketCapitalization);
app.get('/marketPriceUSD',charts.marketPriceUSD);
app.get('/medianTrans',charts.medianTrans);
app.get('/minersRevenue',charts.minersRevenue);
app.get('/orphanBlocks',charts.orphanBlocks);
app.get('/outputVolume',charts.outputVolume);
app.get('/totalBitcoin',charts.totalBitcoin);
app.get('/tradeVStransaction',charts.tradeVStransaction);
app.get('/transactionFees',charts.transactionFees);
app.get('/transactionPerBlock',charts.transactionPerBlock);
app.get('/transactionPerDay',charts.transactionPerDay);
app.get('/transactionPerDayNoPopularPlaces',charts.transactionPerDayNoPopularPlaces);
app.get('/transactionVolume',charts.transactionVolume);
app.get('/transLessThan10000',charts.transLessThan10000);
app.get('/USDtradeVolume',charts.USDtradeVolume);
app.get('/USDtransactionVolume',charts.USDtransactionVolume);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
