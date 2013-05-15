//alert("JavaScript works!");

//Ariana Antonio
//SDI 1305
//Project 2
//Hiking with friends


var distance = 5;
//var distanceHiked = 0;
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

var howFarHiked = function(distanceHiked) {
	
	 while (distanceHiked < distance) { 
			var distanceToGo = distance - distanceHiked;
			console.log("We have hiked " + distanceHiked + " miles and have " + distanceToGo + " to go.");
			distanceHiked++;
}

	return distanceHiked;
};

	
	


startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that it is warm & sunny so everyone should wear a hat and sunscreen.");
console.log("The people going on the hike today are " + hikers + ".");
var announceTodaysHike = todaysHike("Arroyo Seco", "5");
console.log(announceTodaysHike);
console.log("Let's begin!");
var announceDistance = howFarHiked(0);
console.log("We have gone " + announceDistance + " miles and are finished!");





    