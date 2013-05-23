// alert("JavaScript works!");

// Ariana Antonio
// SDI 1305
// Project 3
// Hiking with objects

//global variables
var otherHikers = {
    "Brian" : "beginner",
    "Samantha": "pro",
    "Tim": "intermediate"
};
var activity = "hiking";

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
//JSON function
var jsonHikingTrails = function(hikingTrails) {
        var trailAnnouncement = "Today you will be hiking the " + hikingTrails[1].medium.name + " trail which is " + hikingTrails[1].medium.distanceInMiles + " miles. The terrain is " + hikingTrails[1].medium.terrain + ".";
        return trailAnnouncement;
};

//procedure fuction
var startTheDay = function(niceWeather) { //conditional
    if (niceWeather === true) {
	console.log("Let's go for a hike!");
    }
    else {
	console.log("Go back to bed.");
    }
};

//hikeLeader object
var hikeLeader = {
    name: "Ariana",
    age: 31,
    hikingExperience: "intermediate",
    favoriteTrails: ["La Tuna", "Chantry Flats", "Mount Wilson"],
    introduceLeader: function() { //method: procedure
        console.log("Your leader today is " + this.name + ", she is " + this.age + ".");
    },
    changeExperience: function(newExperience) { //method: mutator
        this.hikingExperience = newExperience;
    }
};

// Boolean function
var isItSunny = function(temp, skyOutlook) {
    if (temp > 70) {
        if (skyOutlook === "Sunny") { //nested conditional
            console.log("Better put on some sunscreen today.");
            return true;
        }
        else {
            console.log("No need for sunscreen today.");
            return true;
        }
    }
    else if (temp > 50 || skyOutlook === "No chance of rain.") {
	return true; 
    }
    else {
        return false;
    }
};
//shoes function with object argument/return
var hikingBoots = function(brand, size, height, weather) {
    var bootSpecs = {
        brandName: brand,
        bootSize: size,
        bootHeight: height,
        calculateBootWear: function(milesHiked) {
            var bootWear = 300 - milesHiked;
            return bootWear
        },
        weatherDurable: weather
    };
    return bootSpecs
};

//announceOtherHikers function
var announceOtherHikers = function() { //for in loop
    for (var key in otherHikers) {
    console.log("Another hiker is " + key + " and they are " + otherHikers[key] + ".");
    }
};

//number function
var howFarHiked = function(distanceHiked) {
        var distanceToGo,
        distance = 6;
	while (distanceHiked < distance) { 
		distanceToGo = distance - distanceHiked;
		console.log("We have hiked " + distanceHiked + " miles and have " + distanceToGo + " to go.");
		distanceHiked++;
}
	return distanceHiked;
};

//supplies object
var whoBringsWhat = {
    hikers: ["Ariana", "Tim", "Samantha", "Brian"],
    supplies: {
        needWater: "water",
        snack: "pretzels",
        lunch: "sandwiches",
        firstAid: "first aid kit"
    },
    assignSupplies: function() {
        var i = 0
        while (i < this.hikers.length) {
        
            for (var key in this.supplies) { //nested loop
                console.log(this.hikers[i] + " is bringing: " + this.supplies[key]);
            i++    
            };
    
        };
    }
};








//outputs
startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that the weather is great for " + activity + ". Please dress accordingly.");
console.log(jsonHikingTrails(hikingTrails));
hikeLeader.introduceLeader();
hikeLeader.changeExperience("pro");
console.log(hikeLeader.name + "'s experience is " + hikeLeader.hikingExperience + ".");
console.log(hikeLeader.name + "'s favorite trails are: " + hikeLeader.favoriteTrails + ".");
var leaderHikingBoots = hikingBoots("Keen", 7, "ankle", "waterproof");
console.log(hikeLeader.name +" is wearing " + leaderHikingBoots.brandName + " boots in size " + leaderHikingBoots.bootSize + ". They are " + leaderHikingBoots.bootHeight + " height and are " + leaderHikingBoots.weatherDurable + "." + "The boots have " + leaderHikingBoots.calculateBootWear(80) + " miles left of wear in them.");
//console.log(hikeLeader + " has hiked "  + " in the boots and can hike " + bootWearLeft + " more before needing a new pair.");
announceOtherHikers();
whoBringsWhat.assignSupplies();
console.log("Let's begin!");
var announceDistance = howFarHiked(0);
console.log("We have gone " + announceDistance + " miles and are finished!");
console.log("Great job today hikers!");