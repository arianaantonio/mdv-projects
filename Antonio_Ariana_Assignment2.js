//alert("JavaScript works!");

var milesToHike = 3;
var hikers = ["Jonathan", "Tim", "Bethany", "Becca"];
var hikeLeader = "Ariana"; 
var niceWeather = true;

if (niceWeather === true) {
	console.log("Let's go for a hike!");
}	else {
	console.log("I'm going back to bed.");
}

var isItSunny = function(Sunny) {
	
	if (Sunny === true) {
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



var sunnyToday = isItSunny(true);
console.log("Today it is " + sunnyToday + " that it is sunny so you should wear a hat and sunscreen.");
console.log("The people going on the hike today are, " + hikers + ".");
var announceTodaysHike = todaysHike("Arroyo Seco", 5);
console.log(announceTodaysHike);

    