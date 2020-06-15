const fs = require('fs')
var uplevel = 0
var downlevel = 0
var i2 = 0

fs.readFile('./problem.txt',(err,data) => {
    const sln = data.length;
    const txt = data.toString()
	console.time('loop')
	if (err) {
		console.log('error');
	}
	while (uplevel >= downlevel) {
		var testchar = txt.charAt(i2)
			if (testchar === '(') {
				uplevel = uplevel + 1;
				}
			else if (testchar === ')') {
				downlevel = downlevel + 1;
			}
		i2++
	}
	console.log(i2)
	console.timeEnd('loop')
})