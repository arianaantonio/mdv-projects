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
    
    function saveData() {
        var randomId = Math.floor(Math.random()*1000001);
        var obj = {};
            obj.genre = ["Genre", id("genre").value];
            obj.title = ["Title", id("title").value];
        //    obj.movietheater = ["Movie Theater", theaterValue];
            obj.friends = ["Friends", id("friends").value];
            obj.date = ["Date", id("date").value];
            obj.rating = ["Rating", id("rating").value];
        //    obj.favorite = ["Favorite?", favoriteValue];
            obj.review = ["Review", id("review").value];
        localStorage.setItem(randomId, JSON.stringify(obj));
    }
    
    //variables
    var movieGenre = ["Genre", "Comedy", "Action", "Drama", "Romance", "Horror", "Other"]
    makeGenreSelect();
    
    
    //Link click events
   /* var displayDataLink = id("displayData");
    displayDataLink.addEventListener("click", pullData);
    var clearDataLink = id("clearData");
    clearDataLink.addEventListener("click", clearLocalData); */
    var saveMovie = id("logMovie");
    saveMovie.addEventListener("click", saveData);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
