/*
Author: Ariana Antonio
Project 2: Movie Journal
VFW 1307
*/
//DOM Loading
window.addEventListener("DOMContentLoaded", function(){
    
    //Generic function to grab elements
    function id(x){
        var getElement = document.getElementById(x)
        return getElement;
    }
    //Dynamic select function
    function makeGenreSelect() {
        var form = document.getElementsByTagName("form"),
            liSelect = id("select"),
            createSelect = document.createElement("select");
            createSelect.setAttribute("id", "genre");
        for (var i=0, j=movieGenre.length; i<j; i++) {
            var createOption = document.createElement("option"),
                optText = movieGenre[i];
                createOption.setAttribute("value", optText);
                createOption.innerHTML = optText;
                createSelect.appendChild(createOption);
        }
        liSelect.appendChild(createSelect);
    }
    
    //functions for theaterValue and favoriteValue
    function getTheater(){
        var theater = document.forms[0].where;
        for (var i=0; i<theater.length; i++) {
            if (theater[i].checked) {
                theaterValue = theater[i].value;
            }
        }
    }
    
    function getFavorite() {
        if (id("favorite").checked) {
            favoriteValue = id("favorite").value;
        } else {
            favoriteValue = "No";
        }
    }
    //saving data
    function saveData() {
        var randomId = Math.floor(Math.random()*1000001);
        getFavorite();
        getTheater();
        var obj = {};
            obj.title = ["Movie Title:", id("title").value];
            obj.date = ["Date:", id("date").value];
            obj.genre = ["Movie Genre:", id("genre").value];
            obj.movietheater = ["Where Seen:", theaterValue];
            obj.friends = ["Who Seen With:", id("friends").value];
            obj.rating = ["Rating:", id("rating").value];
            obj.favorite = ["Favorite?", favoriteValue];
            obj.review = ["Review:", id("review").value];
        localStorage.setItem(randomId, JSON.stringify(obj));
        alert("Movie Saved!");
    }
    
    function pullData() {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "values");
        var createList = document.createElement("ul");
        createDiv.appendChild(createList);
        document.body.appendChild(createDiv);
        for (var i=0, j=localStorage.length; i<j; i++) {
            var createLi = document.createElement("li");
            createList.appendChild(createLi);
            var key = localStorage.key(i);
            var keyValue = localStorage.getItem(key);
            var object = JSON.parse(keyValue);
            var newList = document.createElement("ul");
            createLi.appendChild(newList);
            for (var p in object) {
                var newLi = document.createElement("li");
                newList.appendChild(newLi);
                var optText = object[p][0] + " " + object[p][1];
                newLi.innerHTML = optText;
            }
        }
    }
    
    //variables
    var movieGenre = ["Genre", "Comedy", "Action", "Drama", "Romance", "Horror", "Other"],
        theaterValue,
        favoriteValue = "No";
    makeGenreSelect();
    
    
    
    //Link click events
    var displayDataLink = id("displayData");
    displayDataLink.addEventListener("click", pullData);
    //var clearDataLink = id("clearData");
    //clearDataLink.addEventListener("click", clearLocalData); */
    var saveMovie = id("logMovie");
    saveMovie.addEventListener("click", saveData);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
