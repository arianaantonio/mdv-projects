/*
Author: Ariana Antonio
Project 2: My Hollywood - Gold
MIU 1309
*/
//Some non-functioning code has been commented out to be fixed later. Not required for project.
//DOM Loading
window.addEventListener("DOMContentLoaded", function(){
    
    //Generic function to grab elements
    function id(x){
        var getElement = document.getElementById(x)
        return getElement;
    }
    
    //Search button
    var search = id("searchBtn");
    search.addEventListener("click", searchApp);
    
    function searchApp () {
        //var genres = id("genre").value;
        var text = id("search").value;
        /*
        //Search by genre only
        if (genres != "Genre" && text=="") {
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "values");
            var createList = document.createElement("ul");
            createDiv.appendChild(createList);
            document.body.appendChild(createDiv);
            for (var i=0, j=localStorage.length; i<j; i++) {
                var createLi = document.createElement("li");
                var linksList = document.createElement("li");
                createList.appendChild(createLi);
                var key = localStorage.key(i);
                var keyValue = localStorage.getItem(key);
                var obj = JSON.parse(keyValue);
                var newList = document.createElement("ul");
                createLi.appendChild(newList);
                if(genres === obj.genre[1]) {
                    for (l in obj){
                        var newLi = document.createElement("li");
                        newList.appendChild(newLi);
                        var optText = obj[l][0] + " " + obj[l][1];
                        newLi.innerHTML = optText;
                        newList.appendChild(linksList);
                        console.log(obj[l][0] + ": "+ obj[l][1]);
                    }
                }
            }
        }*/
        //Search by text only
        if (text != "") {
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "values");
            var createList = document.createElement("ul");
            createDiv.appendChild(createList);
            var createSearch = id("searchForm");
            createSearch.appendChild(createDiv);
            for (var i=0, j=localStorage.length; i<j; i++) {
                var createLi = document.createElement("li");
                //var linksList = document.createElement("li");
                createList.appendChild(createLi);
                var key = localStorage.key(i);
                var keyValue = localStorage.getItem(key);
                var obj = JSON.parse(keyValue);
                var newList = document.createElement("ul");
                createLi.appendChild(newList);
                for (l in obj) {
                    if (text === obj[l][1]) {
                        for(k in obj){
                            var newLi = document.createElement("li");
                            newList.appendChild(newLi);
                            newLi.setAttribute("class", "newLiStyle")
                            var optText = obj[k][0] + " " + obj[k][1];
                            newLi.innerHTML = optText;
                            //newList.appendChild(linksList);
                            //console.log(obj[k][0] + ": "+ obj[k][1]);
                        }
                    }
                }
            } 
        }
        /*
        //Search by text and genre
        if (text !="" && genres != "Genre") {
            for (var i=0, j=localStorage.length; i<j; i++) {
                var key = localStorage.key(i);
                var keyValue = localStorage.getItem(key);
                var obj = JSON.parse(keyValue);
                for (l in obj) {
                    if (genres === obj.genre[1] && text === obj[l][1]) {
                        for(k in obj){
                            console.log(obj[k][0] + ": "+ obj[k][1]);
                        }    
                    }
                }
            }
        }*/
    }
});
