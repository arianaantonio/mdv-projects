// alert("JavaScript works!");

// Ariana Antonio
// SDI 1305
// Project 3
// Hiking with objects

//initial variables
var distance = 5;
var hikers = ["Ariana", "Jonathan", "Tim", "Bethany", "Becca"];
// var hikeLeader = "Ariana";

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

console.log("Today you will be hiking the " + hikingTrails[1].medium.name + " trail which is " + hikingTrails[1].medium.distanceInMiles + " miles. The terrain is " + hikingTrails[1].medium.terrain + ".");
/*string function
var todaysHike = function(trail, distance, terrain) {
	var announcement,
        trail = hikingTrails[].name;
	announcement = hikeLeader + " is leading this hike today. We will hike " + trail +
	 " trail which is " + hikingTrails[i].distance + " miles long and is " + hikingTrails[i].terrain;
	return announcement;
};
*/

//procedure method object
var hikeLeader = {
    name: "Ariana",
    age: 31,
    hikingExperience: "pro",
    introduceLeader : function() {
        console.log("Your leader today is " + this.name + ", she is " + this.age + " years old and her experience level is " + this.hikingExperience + ".");
    }
};
hikeLeader.introduceLeader();
