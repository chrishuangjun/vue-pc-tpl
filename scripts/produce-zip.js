const fs = require('fs');
const archiver = require('archiver');
const env = 'sit';
// const chalk = require('chalk')

module.exports = function() {
  //   console.log(chalk.cyan('  Zip files.\n'))
  //   console.time('key')
  var output = fs.createWriteStream(`publish/test.zip`);
  var archive = archiver('zip');

  output.on('close', function() {
    // console.log(chalk.cyan('  Zip files.\n'))
    // console.timeEnd('key')
    console.log('compress completed...ready upload');
    // require('./publish')()
  });

  output.on('end', function() {});

  archive.on('error', function(err) {
    throw err;
  });

  archive.pipe(output);
  archive.glob('./dist' + '/**');
  archive.finalize();
};
