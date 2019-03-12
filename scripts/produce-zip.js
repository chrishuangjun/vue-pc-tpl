const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const env = 'sit';
// const chalk = require('chalk')

module.exports = function() {
  //   console.log(chalk.cyan('  Zip files.\n'))
  //   console.time('key')
  var output = fs.createWriteStream(`publish/ibcp_protal.zip`);
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
  archive.directory(path.resolve(__dirname, '../dist/'), false, function(
    //需要压缩文件的目录
    entryData
  ) {
    return entryData.name === 'dist.zip' ? false : entryData; //过滤不需要压缩的文件
  });
  archive.finalize();
};
