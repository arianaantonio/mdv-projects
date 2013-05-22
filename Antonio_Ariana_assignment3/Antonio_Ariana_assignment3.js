// alert("JavaScript works!");

// Ariana Antonio
// SDI 1305
// Project 3
// Hiking with objects

//initial variables
var hikers = ["Ariana", "Jonathan", "Tim", "Bethany", "Becca"];


//JSON data
var hikingTrails = [
    {
        "easy": {
            "name": "Arroyo Canyon",
            "distanceInMiles": 5,
            "terrain": "mostly hills",
            "hard": false
        }
    },
    {
        "medium": {
            "name": "La Tuna",
            "distanceInMiles": 6,
            "terrain": "flat",
            "hard": false
        }
    },
    {
        "hard": {
            "name": "Malibu Canyon",
            "distanceInMiles": 3,
            "terrain": "very hilly",
            "hard": true
        }
    }
];
//procedure fuction
var startTheDay = function(niceWeather) {
	if (niceWeather === true) {
		console.log("Let's go for a hike!");
}	else {
		console.log("Go back to bed.");
}
};

//object
var hikeLeader = {
    name: "Ariana",
    age: 31,
    hikingExperience: "intermediate",
    yearStartedHiking: 1992,
    currentYear: 2013,
    introduceLeader: function() { //method: procedure
        console.log("Your leader today is " + this.name + ", she is " + this.age + ".");
    },
    changeExperience: function(newExperience) { //method: mutator
        this.hikingExperience = newExperience;
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









//outputs
startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that the weather is great for a hike! Please dress accordingly.");
console.log("Today you will be hiking the " + hikingTrails[1].medium.name + " trail which is " + hikingTrails[1].medium.distanceInMiles + " miles. The terrain is " + hikingTrails[1].medium.terrain + ".");
hikeLeader.introduceLeader();
hikeLeader.changeExperience("pro");
console.log("Your leader's experience is " + hikeLeader.hikingExperience + ".");

