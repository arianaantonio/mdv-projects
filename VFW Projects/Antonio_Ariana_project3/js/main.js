/*
Author: Ariana Antonio
Project 3: Movie Journal
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
    
    function controls(p) {
        switch(p) {
            case "on":
                id("movieForm").style.display = "none";
                id("clearData").style.display = "inline";
                id("displayData").style.display = "none";
                id("newMovie").style.display = "inline";
                newBg.setAttribute("class", "displayDataStyle");
                break;
            case "off":
                id("movieForm").style.display = "block";
                id("clearData").style.display = "inline";
                id("displayData").style.display = "inline";
                id("newMovie").style.display = "none";
                id("values").style.display = "none";
                break;
            default:
                return false;
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
        if (localStorage.length === 0) {
            alert("There are no movies saved");
        }
        controls("on");
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "values");
        var createList = document.createElement("ul");
        createDiv.appendChild(createList);
        document.body.appendChild(createDiv);
        id("values").style.display = "block";
        for (var i=0, j=localStorage.length; i<j; i++) {
            var createLi = document.createElement("li");
            var linksList = document.createElement("li");
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
                newList.appendChild(linksList);
            }
            createLinks(localStorage.key(i), linksList);
        }
    }
    //creating edit and delete links
    function createLinks(key, linksList) {
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var changeText = "Edit Movie";
        //editLink.addEventListener("click", editInput);
        editLink.innerHTML = changeText;
        linksList.appendChild(editLink);
        
        var lineBreak = document.createElement("br");
        linksList.appendChild(lineBreak);
        
        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Movie";
        //deleteLink.addEventListener("click", deleteInput);
        deleteLink.innerHTML = deleteText;
        linksList.appendChild(deleteLink);
    }
    
    function clearLocalData() {
        if (localStorage.length === 0) {
            alert("Data is all clear!");
        }else {
            localStorage.clear();
            alert("All movies have been deleted");
            window.location.reload();
            return false;
        }
    }
    
    //variables
    var movieGenre = ["Genre", "Comedy", "Action", "Drama", "Romance", "Horror", "Other"],
        theaterValue,
        favoriteValue = "No",
        newBg = id("background");
    makeGenreSelect();
    
    //Link click events
    var displayDataLink = id("displayData");
    displayDataLink.addEventListener("click", pullData);
    var clearDataLink = id("clearData");
    clearDataLink.addEventListener("click", clearLocalData);
    var saveMovie = id("logMovie");
    saveMovie.addEventListener("click", saveData);
});
