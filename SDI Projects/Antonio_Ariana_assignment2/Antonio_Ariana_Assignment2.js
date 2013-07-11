//alert("JavaScript works!");

//Ariana Antonio
//SDI 1305
//Project 2
//Hiking with friends

//initial variables
var distance = 5;
var hikers = ["Ariana", "Jonathan", "Tim", "Bethany", "Becca"];
var hikeLeader = "Ariana"; 

//procedure function
var startTheDay = function(niceWeather) {
	if (niceWeather === true) {
		console.log("Let's go for a hike!");
}	else {
		console.log("Go back to bed.");
}
};
// Boolean function
var isItSunny = function(temp, skyOutlook) {
	if (temp > 70 && skyOutlook === "Sunny") {
		return true;
}
	else if (temp > 50 || skyOutlook === "No chance of rain.") {
		return true; 
} 	else {
	return false;
}
};
//string function
var todaysHike = function(trail, miles) {
	var announcement;
	announcement = hikeLeader + " is leading this hike today. We will hike " + trail +
	 " trail which is " + miles + " miles long.";
	return announcement;
};
//number function
var howFarHiked = function(distanceHiked) {
	var distanceToGo
	while (distanceHiked < distance) { 
		distanceToGo = distance - distanceHiked;
		console.log("We have hiked " + distanceHiked + " miles and have " + distanceToGo + " to go.");
		distanceHiked++;
}
	return distanceHiked;
};
//array function
var rollCall = function(numOfHikers, hikers) {
	hikers.shift();
	for (var i=0; i < hikers.length; i++) {
		console.log("We still have " + hikers[i] + " with us. That's " + numOfHikers + " hikers.");
		numOfHikers++;
		var isEveryoneHere = numOfHikers -1;
}
	return isEveryoneHere;
};		
	

//outputs
startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that the weather is great for a hike! Please dress accordingly.");
console.log("The people going on the hike today are " + hikers + ".");
var announceTodaysHike = todaysHike("Arroyo Seco", "5");
console.log(announceTodaysHike);
console.log("Let's begin!");
var announceDistance = howFarHiked(0);
console.log("We have gone " + announceDistance + " miles and are finished!");
console.log("We should make sure everyone made it.");
var takeRollCall = rollCall(1, hikers); 
console.log("Oh no! We've lost " + hikeLeader + "! Next time we should pick a different leader.");
console.log("Great hike today everyone!");





    