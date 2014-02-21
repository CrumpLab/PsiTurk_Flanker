
//Array containing all 12 congruent and 12 incongruent
//Flanker items made up from the letters
// sdjk
var FlankerStims=[["ssdss","d","s","inc"],
["ssjss","j","s","inc"],
["sskss","k","s","inc"],
["ddsdd","s","d","inc"],
["ddjdd","j","d","inc"],
["ddkdd","k","d","inc"],
["jjsjj","s","j","inc"],
["jjdjj","d","j","inc"],
["jjkjj","k","j","inc"],
["kkskk","s","k","inc"],
["kkjkk","j","k","inc"],
["kkdkk","d","k","inc"],
["kkkkk","k","k","con"],
["jjjjj","j","j","con"],
["sssss","s","s","con"],
["ddddd","d","d","con"],
["kkkkk","k","k","con"],
["jjjjj","j","j","con"],
["sssss","s","s","con"],
["ddddd","d","d","con"],
["kkkkk","k","k","con"],
["jjjjj","j","j","con"],
["sssss","s","s","con"],
["ddddd","d","d","con"]];



//Creates the trial sequence for the current experiments
//Trial sequence is a multiple of the above array
//order of trials is randomized

trialarray=multiplytrials(randomizearray(copy2darray(FlankerStims)),4*4);




//////////////////////////////////
///////////////////////////////////
//FUNCTION LIST
//
//Some helpful functions
///////////////////////////////////
///////////////////////////////////


//Array functions useful for manipulating trial arrays

//Copies a 2darray
//Useful for copying a 2d-array into another variable
//Prevents assignment by reference creating new 2d array
function copy2darray (input) {
	var temp=[''];
	for (x in input) {
	temp[x]=input[x].concat();
	}
	return temp;
}

//Takes comma separated lists of 2-d arrays as input
//joins all 2-d arrays into one large 2-d array
function extend2darray () {
var temp=[''];
var c=-1;
for (i=0; i<arguments.length; i++){
	for (x in arguments[i]) {
	c++;
	temp[c]=arguments[i][x].concat();
	}
}
return temp;
}

//input = a 2-d array
//ntimes= a number
//creates a new larger 2-d array in multiples of the input array
function multiplytrials(input,ntimes) {
	var temparray = new Array(new Array(''));
	iii=-1;
	for (i=0; i<=ntimes-1; i++) {
		for (ii=0; ii<=input.length-1; ii++){
			iii++;
			temparray[iii]=input[ii].concat();
		}
	}
	return temparray;
}

//Randomizes the order of elements in an array
function randomizearray(t){
    var tt= t;
    var n = 0;
    var a = "";
    var b = "";
    var i = 0;
    for (i=0; i <= t.length-1; i++){
        n = Math.floor(Math.random()*t.length);
        a = tt[i];
        b = tt[n];
        tt[i] = b;
        tt[n] = a;    
    }
    return tt;
}


//function for detecting client browser

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

var BrowserInfo = [];
BrowserInfo[0] = BrowserDetect.browser;
BrowserInfo[1] = BrowserDetect.version;
BrowserInfo[2] = BrowserDetect.OS;