/*
Author: Ariana Antonio
Project 2: Movie Journal
VFW 1307
*/
//DOM Loading
window.addEventListener("DOMConteLoaded", function(){
    
    //Generic function to grab elements
    function id(x){
        var getElement = document.getElementById(x)
        return getElement;
    }
    //Dynamic select function
    var movieGenre = ["Genre", "Comedy", "Action", "Drama", "Romance", "Horror", "Other"]

    //Link click events
    var displayDataLink = id("displayData");
    displayDataLink.addEventListener("click", pullData);
    var clearDataLink = id("clearData");
    clearDataLink.addEventListener("click", clearLocalData);
    var saveMovie = id("logMovie");
    saveMovie.addEventListener("click", saveData);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});