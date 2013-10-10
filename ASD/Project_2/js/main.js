/*
Author: Ariana Antonio
Project 2
ASD 1310
*/
$('#search').on('pageinit', function(){
    var text = $("#searchInput").val();
    function searchApp(){
       if (text != "") {
            $("#searchForm").append("div")
            $("searchForm div").attr("id", "values");
            $("searchForm div").append("ul");
            for (var i=0, j=localStorage.length; i<j; i++) {
                $("#searchForm div ul").append("li");
                //var linksList = document.createElement("li");
                var key = localStorage.key(i);
                var keyValue = localStorage.getItem(key);
                var obj = JSON.parse(keyValue);
                $("#searchForm div ul li").append("ul");
                for (l in obj) {
                    if (text === obj[l][1]) {
                        for(k in obj){
                            $("#searchForm div ul li ul").append("li");
                            $("#searchForm div ul li ul li").attr("class", "newLiStyle");
                            $("#searchForm div ul li ul li").text("obj[k][0] + ' ' + obj[k][1]");
                            //newList.appendChild(linksList);
                            //console.log(obj[k][0] + ": "+ obj[k][1]);
                        }
                    }
                }
            } 
        }
    }
    $('#searchBtn').click(function(){
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
            $("<ul></ul>")
                .attr("data-role", key)
                .appendTo("#values")
                .wrap("<div></div>");
            //$("#values div")
                //.append("<ul></<ul>")    
            //var counter=0;
            for (var p in object) {
                if (object[p][0] === "Star Rating:" ) continue;
                $("<li></li>")
                    .html(object[p][0] + " " + object[p][1])
                    .appendTo("#values div ul");    
                //counter++;
                }
            if (object.starrating[1] === "onestar") {
                //console.log("one star");
                numOfStars();
            }
            if (object.starrating[1] === "twostars") {
                //console.log("two stars");    
                numOfStars();
                numOfStars();
            }
            if (object.starrating[1] === "threestars") {
                //console.log("three stars");
                numOfStars();
                numOfStars();
                numOfStars();
            }
            if (object.starrating[1] === "fourstars") {
                //console.log("four stars");
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
            }
            if (object.starrating[1] === "fivestars") {
                //console.log("five stars")
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
                numOfStars();
            }
        $("<a></a>").appendTo("#values div ul")
            .text("Edit Movie")
            .attr("href", "#")
            .css("display", "block")
        /*var timestamp = +new Date();
        var deleteMovie = '<a href="#" class="delete" data-key="' + timestamp + '">Delete</a>';
        $(".delete").on("click", function(){
            localStorage.removeItem(key);        
        })
        $("#values div ul").append(deleteMovie);*/
        $("<a></a>").appendTo("#values div ul")
            .text("Delete Movie")
            .attr("href", "#")
            .on("click", deleteInput)
            .attr("id", "deleteLink")
            .after("<br>")
            .data("key", key);
        //key = $("#deleteLink").data("key");   
        }
    }
    //call pulldata function when display data link is clicked
    $("#displayData").on("click", pullData);  
    
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
    
    //creating edit and delete links
    /*function createLinks(key, linksList) {
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
    }*/
    
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
});
	