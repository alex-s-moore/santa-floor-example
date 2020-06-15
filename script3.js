const fs = require('fs')
var uplevel = 0
var downlevel = 0
var i = 0
var uplevel2 = 0
var downlevel2 = 0
var i2 = 0

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
	while (uplevel2 >= downlevel2) {
		var testchar2 = txt.charAt(i2)
			if (testchar2 === '(') {
				uplevel2 = uplevel2 + 1;
				}
			else if (testchar2 === ')') {
				downlevel2 = downlevel2 + 1;
			}
		i2++
	}
	console.log("Santa ends up on Level: ",uplevel - downlevel)
	console.log("He first goes to the basement on his ",i2,"th step.")
	console.timeEnd('loop')
})