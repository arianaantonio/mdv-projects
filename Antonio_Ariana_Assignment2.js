//alert("JavaScript works!");

//Ariana Antonio
//SDI 1305
//Project 2
//Hiking with friends


var distance = 5;
var hikers = ["Ariana", "Jonathan", "Tim", "Bethany", "Becca"];
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
	var distanceHiked = 0;
	while (distanceHiked < distance) { 
		var distanceToGo = distance - distanceHiked;
		console.log("We have hiked " + distanceHiked + " miles and have " + distanceToGo + " to go.");
		distanceHiked++;
}

	return distanceHiked;
};
var rollCall = function(numOfHikers, hikers) {
	var numOfHikers = 1;
	for (var i=0; i < hikers.length; i++) {
		console.log("We still have " + hikers[i] + " with us. That's " + numOfHikers + " hikers.");
		numOfHikers++;
		var isEveryoneHere = numOfHikers -1;
}
	return isEveryoneHere;
};		
	


startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that it is warm & sunny so everyone should wear a hat and sunscreen.");
console.log("The people going on the hike today are " + hikers + ".");
var announceTodaysHike = todaysHike("Arroyo Seco", "5");
console.log(announceTodaysHike);
console.log("Let's begin!");
var announceDistance = howFarHiked();
console.log("We have gone " + announceDistance + " miles and are finished!");
var takeRollCall = rollCall(5, hikers); 
console.log("All " + takeRollCall + " hikers are present and accounted for.");
console.log("Great hike today everyone!");




    