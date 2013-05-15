//alert("JavaScript works!");

var distance = 5;
var distanceHiked = 0;
var hikers = ["Ariana", " Jonathan", " Tim", " Bethany", " Becca"];
var hikeLeader = "Ariana"; 

var startTheDay = function(niceWeather) {
	if (niceWeather === true) {
		console.log("Let's go for a hike!");
}	else {
		console.log("Go back to bed.");
}
};

var isItSunny = function(temp, skyOutlook) {
	
	if (temp > 70 && skyOutlook === "Sunny") {
	return true;
} else {
	return false;
}
};

var todaysHike = function(trail, miles) {
	var announcement;
	announcement = hikeLeader + " is leading this hike today. They will hike " + trail +
	 " trail which is " + miles + " miles long.";
	return announcement;
};
/*var howFarHiked = function(distanceHiked) {
	var areWeThereYet = function(
	
	while (distanceHiked <= distance) { 
		var distanceToGo = distance - distanceHiked;
		console.log("We have gone " + distanceHiked + " miles and we have " + distanceToGo + " left to go.");
		distanceHiked++;
}
};
*/
	
	


startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that it is warm & sunny so you should wear a hat and sunscreen.");
console.log("The people going on the hike today are " + hikers + ".");
var announceTodaysHike = todaysHike("Arroyo Seco", "5");
console.log(announceTodaysHike);
//howFarHiked(distanceHiked);





    