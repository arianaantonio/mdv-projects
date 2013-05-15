//alert("JavaScript works!");

var distance = 5;
var distanceHiked = 0;
var hikers = ["Jonathan", "Tim", "Bethany", "Becca"];
var hikeLeader = "Ariana"; 
var niceWeather = true;

var startTheDay = function() {
	if (niceWeather === true) {
		console.log("Let's go for a hike!");
}	else {
		console.log("Go back to bed.");
}
};

var isItSunny = function(Sunny) {
	
	if (Sunny === true) {
	return true;
} else {
	return false;
}
};
/*
var todaysHike = function(trail, miles) {
	var announcement;
	announcement = hikeLeader + " is leading this hike today. They will hike " + trail +
	 " trail which is " + miles + " miles long.";
	return announcement;
};
var howFarHiked = function(distanceHiked) {
	var areWeThereYet = function(
	
	while (distanceHiked <= distance) { 
		var distanceToGo = distance - distanceHiked;
		console.log("We have gone " + distanceHiked + " miles and we have " + distanceToGo + " left to go.");
		distanceHiked++;
}
};
*/
	
	


startTheDay();
var sunnyToday = isItSunny(true);
console.log("Today it is " + sunnyToday + " that it is sunny so you should wear a hat and sunscreen.");
console.log("The people going on the hike today are, " + hikers + ".");
//var announceTodaysHike = todaysHike("Arroyo Seco", distance);
//console.log(announceTodaysHike);
//howFarHiked(distanceHiked);





    