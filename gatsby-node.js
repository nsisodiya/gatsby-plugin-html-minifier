/**
 * A Gatsby plugin to easily minify HTML file
 * Narendra Sisodiya <narendra.sisodiya.1983@gmail.com>
 */

var minify = require('html-minifier').minify;
const fs = require('fs');
const path = require('path');

exports.onPostBuild = (_, pluginOptions) => {
    return new Promise((resolve, reject) => {
        // do async work
        console.log('=== HMTL minification started ===');
        var f = path.resolve(__dirname, '../../public/index.html');
        console.log('full path', f);
        fs.readFile(f, 'utf8', (err, inp) => {
            if (err) {
                reject();
                throw err;
            }
            var result = minify(inp, pluginOptions);
            var reducedPercentage = (
                ((inp.length - result.length) / inp.length) *
                100
            ).toFixed(2);
            console.log(`We have reduced index.html by ${reducedPercentage}%`);

            fs.writeFile(f, result, err2 => {
                if (err2) {
                    reject();
                    throw err;
                }
                console.log('index.html has been saved!');
                resolve();
            });
        });
    });
};
