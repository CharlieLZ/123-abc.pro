var createjs = createjs||{}; 
var Random = {
	randomListA: function (__length) {
		var listOrdered = [];
		for (var i=1; i<=__length; i++) {
			listOrdered.push(i);
		}
		var listSorted = [];
		var rnd;
		while (listOrdered.length>0) {
			rnd = Math.floor(Math.random()*listOrdered.length);
			listSorted.push(listOrdered[rnd]);
			listOrdered.splice(rnd,1);
		}
		return listSorted;
	},

	// create random list of length 
	listA: function (__length) {
		var listOrdered = [];
		for (var i=1; i<=__length; i++) {
			listOrdered.push(i);
		}
		var listSorted = [];
		var rnd;
		while (listOrdered.length>0) {
			rnd = Math.floor(Math.random()*listOrdered.length);
			listSorted.push(listOrdered[rnd]);
			listOrdered.splice(rnd,1);
		}
		return listSorted;
	},
	
	// create random list from option set length1 of length2
	listB: function (__length1, __length2) {
		var listOrdered = [];
		for (var i=1; i<=__length1; i++) {
			listOrdered.push(i);
		}
		var listSorted = [];
		var rnd;
		while (listSorted.length<__length2) {
			rnd = Math.floor(Math.random()*listOrdered.length);
			listSorted.push(listOrdered[rnd]);
			listOrdered.splice(rnd,1);
		}
		return listSorted;
	},
	
	// create random list from array
	listC: function (__list) {
		var listOrdered = __list;
		var listSorted = [];
		var rnd;
		while (listOrdered.length>0) {
			rnd = Math.floor(Math.random()*listOrdered.length);
			listSorted.push(listOrdered[rnd]);
			listOrdered.splice(rnd,1);
		}
		return listSorted;
	}
};
