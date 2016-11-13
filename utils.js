'use strict';
const breakdownInput = function(input){
	//get an array of possible colors from the input
	const candidateColors = input.split(';');
	const output = candidateColors.reduce(function(prev,curr){
		console.log({curr:curr.trim()})
		if(/^(rgb)?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/.test(curr.trim())){
			console.log('matched an rgb: '+curr.trim());
			return [...prev, {rgb:curr.trim(), hex:rgb2Hex(curr.trim())}]
		}else if(/^#?[0-9A-Fa-f]{6}$/.test(curr.trim())){
			console.log('matched a hex:' +curr.trim());
			return [...prev, {hex:curr.trim(), rgb:hex2RGB(curr.trim())}]
		}
		return prev
	}, []);

	return output;
}

const rgb2Hex = function (rgb){
	console.log(rgb);
	const reMatch = /\d{1,3}/g;
	const matches = rgb.match(reMatch);
	if(matches&&matches.length&&matches.length===3)
		return "#" + getHex(matches[0])+""+getHex(matches[1])+""+getHex(matches[2]);
	else
		return null;
}

const hex2RGB = function(hex){
	const r = parseInt(hex.slice(1,3),16);
	const g = parseInt(hex.slice(3,5),16);
	const b = parseInt(hex.slice(5),16);
	return "rgb(" + r + "," + g + "," + b + ")";
}

const getHex = function(x){
	x = parseInt(x);
	console.log({x});
	if(x===undefined)
		return "00";
	return ((x).toString(16)).length>1?((x).toString(16)):"0"+((x).toString(16));
}
