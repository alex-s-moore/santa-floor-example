const fs = require('fs')
var uplevel = 0
var downlevel = 0
var i = 0

fs.readFile('./problem.txt',(err,data) => {
    const sln = data.length;
    const txt = data.toString()
	console.time('loop')
	if (err) {
		console.log('error');
	}
	while (i < sln) {
		var testchar = txt.charAt(i)
			if (testchar === '(') {
				uplevel = uplevel + 1;
				}
			else if (testchar === ')') {
				downlevel = downlevel + 1;
			}
		i++
	}
	console.log(uplevel - downlevel)
	console.timeEnd('loop')
})