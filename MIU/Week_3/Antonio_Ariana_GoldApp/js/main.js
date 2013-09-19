$('#home').on('pageinit', function(){
	//var search = $('#searchBtn');
        //search.addEventListener("click", searchApp);
        $('#searchBtn').click(function(){
                searchApp();
        });
});		
$('#addItem').on('pageinit', function(){

		var myForm = $('#addItemForm');
		    myForm.validate ({
			invalidHandler: function(form, validator) {
			},
                         //errorPlacement: function(error, element) {
                         //error.appendTo( element.parent("input").next("input") );
                       // },
			submitHandler: function() {
		var key = myForm.serializeArray();
			storeData(this.key);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

function id(x){
    var getElement = document.getElementById(x)
    return getElement;
    }
var autofillData = function (){
	 
};

var getData = function(){

};
//save data in form
var storeData = function(key){
    if (!key) {
        var randomId = Math.floor(Math.random()*1000001);
    }else{
            randomId = key;
    }
    getFavorite();
    getTheater();
    var obj = {};
        obj.title = ["Movie Title:", id("movietitle").value];
        obj.date = ["Date:", id("dateseen").value];
        obj.genre = ["Movie Genre:", id("genre").value];
        obj.movietheater = ["Where Seen:", theaterValue];
        obj.friends = ["Who Seen With:", id("seenwith").value];
        obj.rating = ["Rating:", id("rating").value];
        obj.favorite = ["Favorite?", favoriteValue];
        obj.review = ["Review:", id("review").value];
        localStorage.setItem(randomId, JSON.stringify(obj));
        alert("Movie Saved!");
        window.location.reload();
    } 

//clear local data					
var clearLocal = function(){
    if (localStorage.length === 0) {
        alert("Data is all clear!");
    }else {
        localStorage.clear();
        alert("All movies have been deleted");
        window.location.reload();
        return false;
    }
};
var clearDataLink = id("clearData");
    clearDataLink.addEventListener("click", clearLocal);

//pull whereseen value
function getTheater(){
    var theater = document.forms["addItemForm"].where;
    for (var i=0; i<theater.length; i++) {
        if (theater[i].checked) {
            theaterValue = theater[i].value;
        }
    }
}
//pull favorite value    
function getFavorite() {
    if (id("favorite").checked) {
        favoriteValue = id("favorite").value;
    } else {
        favoriteValue = "No";
        }
    }

var theaterValue;
var favoriteValue = "No";

//grabbing default json data
function defaultData() {
    for (var n in json) {
        var randomId = Math.floor(Math.random()*1000001);
        localStorage.setItem(randomId, JSON.stringify(json[n]));
    }
}
    
//pulling image for genre category
function pullImage(imgName, newList) {
    var imgLi = document.createElement("li");
    newList.appendChild(imgLi);
    var imgTag = document.createElement("img");
    var imgSrc = imgTag.setAttribute("src", "images/" + imgName +".jpg");
    imgLi.appendChild(imgTag);
}
//===========================================================

   
    
//hide form when displaying data
    
function controls(p) {
    switch(p) {
        case "on":
            id("addItemForm").style.display = "none";
            id("clearData").style.display = "inline";
            id("displayData").style.display = "none";
            id("savemovie").style.display = "inline";
            //newBg.setAttribute("class", "displayDataStyle");
            break;
        case "off":
            id("addItemForm").style.display = "block";
            id("clearData").style.display = "inline";
            id("displayData").style.display = "inline";
            id("savemovie").style.display = "none";
            id("values").style.display = "none";
            break;
        default:
        return false;
    }
}

    
function pullData() {
    if (localStorage.length === 0) {
        alert("There are no movies saved so default movies were added");
        defaultData();
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
        pullImage(object.genre[1], newList);
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
    editLink.addEventListener("click", editInput);
    editLink.innerHTML = changeText;
    linksList.appendChild(editLink);
        
    var lineBreak = document.createElement("br");
    linksList.appendChild(lineBreak);
        
    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.key = key;
    var deleteText = "Delete Movie";
    deleteLink.addEventListener("click", deleteInput);
        deleteLink.innerHTML = deleteText;
        linksList.appendChild(deleteLink);
    }
    
    function deleteInput() {
        var ask = confirm("Are you sure you want to delete this movie?");
        if (ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
            alert("Movie deleted");
        }else{
            alert("This movie has not been deleted");
        }
    }
    
    //creating edit input
    function editInput() {
        var grabValue = localStorage.getItem(this.key);
        var obj = JSON.parse(grabValue);
        controls("off");
        id("movietitle").value = obj.title[1];
        id("dateseen").value = obj.date[1];
        id("genre").value = obj.genre[1];
        var whereSeen = document.forms["addItemForm"].where;
        for (var i =0; i<whereSeen.length; i++) {
            if (whereSeen[i].value == "Movie Theater" && obj.movietheater[1] == "Movie Theater") {
                whereSeen[i].setAttribute("checked", "checked");
            } else if (whereSeen[i].value == "At Home" && obj.movietheater[1] == "At Home") {
                whereSeen[i].setAttribute("checked", "checked");
            } else if (whereSeen[i].value == "Other" && obj.movietheater[1] == "Other") {
                whereSeen[i].setAttribute("checked", "checked");
            }
        }
        if (obj.favorite[1] == "on") {
            id("favorite").setAttribute("checked", "checked");
        }
        id("seenwith").value = obj.friends[1];
        id("rating").value = obj.rating[1];
        id("review").value = obj.review[1];
        
        //saveMovie.removeEventListener("click", storeData);
        id("savemovie").value = "Edit Movie";
        var editSave = id("savemovie");
        //editSave.addEventListener("click", confirmData);
        editSave.key = this.key;
    } 
    
function searchApp () {
    var text = id("search").value;
        
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
};

 
       
    
    //variables
    var movieGenre = ["Genre", "Comedy", "Action", "Drama", "Romance", "Horror", "Other"],
        theaterValue,
        favoriteValue = "No",
        //newBg = id("background");
    
    errorMsg = id("errors");
    
    
    //Link click events
    var displayDataLink = id("displayData");
    displayDataLink.addEventListener("click", pullData);
    //var clearDataLink = id("clearData");
    //clearDataLink.addEventListener("click", clearLocalData);
    var saveMovie = id("savemovie");
    //saveMovie.addEventListener("click", confirmData);
