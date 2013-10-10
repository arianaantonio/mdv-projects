/*
Author: Ariana Antonio
Project 2
ASD 1310
*/
$('#search').on('pageinit', function(){
    var text = $("#searchInput").val();
    console.log(text);
    function searchApp(){
        
       if (text !== " ") {
            //console.log("yo");
            $("<div></div>")
                .insertAfter("#searchForm")
                //.attr("id", "values")
                .append("<ol></ol>");
            $("div ul").attr("id", "searchUl");    
            for (var i=0, j=localStorage.length; i<j; i++) {
                //console.log("working");
                $("div ol").append("<li></li>");
                //var linksList = document.createElement("li");
                var key = localStorage.key(i);
                var keyValue = localStorage.getItem(key);
                var obj = JSON.parse(keyValue);
                
                $("div ol li").append("<ul></ul>");
                for (l in obj) {
                        console.log(text);
                    if (text == obj[l][1]) {
                        console.log(text);
                        for(k in obj){
                            $("div ol li ul").append("<li></li>");
                            $("div ol li ul li").attr("class", "newLiStyle");
                            $("div ol li ul li").text("obj[k][0] + ' ' + obj[k][1]");
                            //newList.appendChild(linksList);
                            console.log(obj[k][0] + ": "+ obj[k][1]);
                        }
                    }
                }
            } 
        }
    }
    $('#searchBtn').on("click", function(){
        searchApp();
    });
});

$('#addItem').on('pageinit', function(){
    //pull favorite? value    
    function getFavorite() {
        if ($("input[type=checkbox]").is(':checked')) {
            favoriteValue = "Yes"
        } else {
            favoriteValue = "No";
        }
    }
    
    //storing data to local storage
    var storeData = function(key){
        if (!key) {
            var randomId = Math.floor(Math.random()*1000001);
        }else{
            randomId = key;
        }
        getFavorite();
        var obj = {};
            obj.title = ["Movie Title:", $("#movietitle").val()];
            obj.date = ["Date:", $("#dateseen").val()];
            obj.genre = ["Movie Genre:", $("#genre").val()];
            obj.movietheater = ["Where Seen:", $("input[type=radio]:checked").val()];
            obj.friends = ["Who Seen With:", $("#seenwith").val()];
            obj.starrating = ["Star Rating:", ($("#starrating").attr('value'))];
            //obj.rating = ["Rating:", $("#rating").val()];
            obj.favorite = ["Favorite?", favoriteValue];
            obj.review = ["Review:", $("#review").val()];
        localStorage.setItem(randomId, JSON.stringify(obj));
        alert("Movie Saved!");
        window.location.reload();
    }
    
    //setting up vars for star rating    
    var onestar = $("#1ststar");
    var twostar = $("#2ndstar");
    var threestar = $("#3rdstar");
    var fourstar = $("#4thstar");
    var fivestar = $("#5thstar");	
    var ratingDiv = $("#starrating");
    
    //setting up click events for star ratings to get value
    onestar.click(function(){
        onestar.attr("src", "images/filledStar_03.gif");
        twostar.attr("src", "images/emptystar_03.gif");
        threestar.attr("src", "images/emptystar_03.gif");
        fourstar.attr("src", "images/emptystar_03.gif");
        fivestar.attr("src", "images/emptystar_03.gif");
        ratingDiv.attr("value", "onestar");
    });
    twostar.click(function(){
        twostar.attr("src", "images/filledStar_03.gif");
        onestar.attr("src", "images/filledStar_03.gif");
        threestar.attr("src", "images/emptystar_03.gif");
        fourstar.attr("src", "images/emptystar_03.gif");
        fivestar.attr("src", "images/emptystar_03.gif");
        ratingDiv.attr("value", "twostars");
    });
    threestar.click(function(){
        threestar.attr("src", "images/filledStar_03.gif");
        onestar.attr("src", "images/filledStar_03.gif");
        twostar.attr("src", "images/filledStar_03.gif");
        fourstar.attr("src", "images/emptystar_03.gif");
        fivestar.attr("src", "images/emptystar_03.gif");
        ratingDiv.attr("value", "threestars");
    });
    fourstar.click(function(){
        fourstar.attr("src", "images/filledStar_03.gif");
        onestar.attr("src", "images/filledStar_03.gif");
        twostar.attr("src", "images/filledStar_03.gif");
        threestar.attr("src", "images/filledStar_03.gif");
        fivestar.attr("src", "images/emptystar_03.gif");
        ratingDiv.attr("value", "fourstars");
    });
    fivestar.click(function(){
        fivestar.attr("src", "images/filledStar_03.gif");
        onestar.attr("src", "images/filledStar_03.gif");
        twostar.attr("src", "images/filledStar_03.gif");
        threestar.attr("src", "images/filledStar_03.gif");
        fourstar.attr("src", "images/filledStar_03.gif");
        ratingDiv.attr("value", "fivestars");
    });
    
    //display data from local storage to display page
    function pullData() {
        if (localStorage.length === 0) {
            alert("There are no movies saved so default movies were added");
            defaultData();
        }
        //var linksList;
        //pullImage(object.genre[1], newList);
        //linkList = newList.append("<li></li>");
        //createLinks(localStorage.key(i), linksList);
        for (var i=0, j=localStorage.length; i<j; i++) {
            var key = localStorage.key(i);
            var keyValue = localStorage.getItem(key);
            var object = JSON.parse(keyValue);
            
            /*$("<ul></ul>")
                .attr("data-role", key)
                .appendTo("#movieDisplay")
                //.wrap("<div></div>");*/
                
            
            for (var p in object) {
                if (object[p][0] === "Star Rating:" ) continue;
                movieData += "<li>" + object[p][0] + " " + object[p][1] + "</li>";  
            }
            console.log(movieData);
            if (object.starrating[1] === "onestar") {
                //console.log("one star");
                numOfStars();
            }else if (object.starrating[1] === "twostars") {
                //console.log("two stars");    
                numOfStars();
                numOfStars();
            }else if (object.starrating[1] === "threestars") {
                //console.log("three stars");
                numOfStars();
                numOfStars();
                numOfStars();
            }else if (object.starrating[1] === "fourstars") {
                //console.log("four stars");
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
            }else if (object.starrating[1] === "fivestars") {
                //console.log("five stars")
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
            }    
        $("<a></a>").appendTo("#values div ul")
            .text("Edit Movie")
            .attr("href", "#addItem")
            .css("display", "block")
            .data("key", key)
            .on("click", editInput);    
        $("<a></a>").appendTo("#values div ul")
            .text("Delete Movie")
            .attr("href", "#")
            .on("click", deleteInput)
            .attr("id", "deleteLink")
            .after("<br>")
            .data("key", key);   
        }
        $("#movieDisplay ul").append(movieData);
    }
    //call pulldata function when display data link is clicked
    $("#displayData").on("click", function(){
        $("#movieDisplay ul").html(" ");
        movieData = " ";
        pullData(); 
    }); 
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
    $("#clearData").on("click", clearLocal);
    
    //creating star rating values for display page
    function numOfStars(){ $("#values div ul").append("<img />");
        $("#values div ul img")
            .attr("src", "images/filledstar_03.gif")
            .attr("class", "star");
    };
    
    //creating edit and delete functions
    function editInput() {
        var key = $(this).data("key");
        var grabValue = localStorage.getItem(key);
        var obj = JSON.parse(grabValue);
        $("#movietitle").val(obj.title[1]);
        $("#dateseen").val(obj.date[1]);
        $("#genre").val(obj.genre[1]);
        var whereSeen = document.forms["addItemForm"].where;
        for (var i =0; i<whereSeen.length; i++) {
            if ($(whereSeen[i]).val("Movie Theater") && obj.movietheater[1] == "Movie Theater") {
                $("#movietheater").attr("checked", "checked");
                //console.log($("#movietheater").attr());
                console.log($("#movietheater").val());
            } else if ($(whereSeen[i]).val("At Home") && obj.movietheater[1] == "At Home") {
                $("#athome").attr("checked", "checked");
            } else if ($(whereSeen[i]).val("Other") && obj.movietheater[1] == "Other") {
                $("#other").attr("checked", "checked");
            }
        }
        if (obj.favorite[1] == "Yes") {
            //$('#favorite').prop('checked', true);    
            $("#favorite").attr("checked", "checked")
        }
        if (obj.starrating[1] === "onestar") {
            onestar.attr("src", "images/filledStar_03.gif");
            twostar.attr("src", "images/emptystar_03.gif");
            threestar.attr("src", "images/emptystar_03.gif");
            fourstar.attr("src", "images/emptystar_03.gif");
            fivestar.attr("src", "images/emptystar_03.gif");
            ratingDiv.attr("value", "onestars");
        }
        if (obj.starrating[1] === "twostars") {
            twostar.attr("src", "images/filledStar_03.gif");
            onestar.attr("src", "images/filledStar_03.gif");
            threestar.attr("src", "images/emptystar_03.gif");
            fourstar.attr("src", "images/emptystar_03.gif");
            fivestar.attr("src", "images/emptystar_03.gif");
            ratingDiv.attr("value", "twostars");
        }else if (obj.starrating[1] === "threestars") {
            threestar.attr("src", "images/filledStar_03.gif");
            onestar.attr("src", "images/filledStar_03.gif");
            twostar.attr("src", "images/filledStar_03.gif");
            fourstar.attr("src", "images/emptystar_03.gif");
            fivestar.attr("src", "images/emptystar_03.gif");
            ratingDiv.attr("value", "threestars");
        }else if (obj.starrating[1] === "fourstars") {
            fourstar.attr("src", "images/filledStar_03.gif");
            onestar.attr("src", "images/filledStar_03.gif");
            twostar.attr("src", "images/filledStar_03.gif");
            threestar.attr("src", "images/filledStar_03.gif");
            fivestar.attr("src", "images/emptystar_03.gif");
            ratingDiv.attr("value", "fourstars");
        }else if (obj.starrating[1] === "fivestars") {
            fivestar.attr("src", "images/filledStar_03.gif");
            onestar.attr("src", "images/filledStar_03.gif");
            twostar.attr("src", "images/filledStar_03.gif");
            threestar.attr("src", "images/filledStar_03.gif");
            fourstar.attr("src", "images/filledStar_03.gif");
            ratingDiv.attr("value", "fivestars");
        }            
        $("#seenwith").val(obj.friends[1]);
        //obj.rating[1] = $("#rating").val();
        $("#review").val(obj.review[1]);
        
        //saveMovie.removeEventListener("click", storeData);
        $("#savemovie")
            .val("Edit Movie")
            .data(this.key);
        //var editSave = $("#savemovie");
        //editSave.addEventListener("click", confirmData);
        //editSave.key = this.key;
    }
    
    function deleteInput() {
        var ask = confirm("Are you sure you want to delete this movie?");
        if (ask) {
            console.log("deleting");    
            localStorage.removeItem($("#deleteLink").data("key"));
            window.location.reload();
            alert("Movie deleted");
        }else{
            alert("This movie has not been deleted");
        }
    }
    
    
    
    //validating form    
    var myForm = $('#addItemForm');
    myForm.validate ({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
		    var key = myForm.serializeArray();
			storeData(this.key);
		}
    });
    
    //global variables
    var movieData;
});
	