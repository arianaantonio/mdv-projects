/*
Author: Ariana Antonio
Project 4
ASD 1310
*/
var obj = {};
var itemKey = "";
/*$('#search').on('pageinit', function(){
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
});*/

$(document).on('pageinit', '#addItem', function(){

    //pull favorite? value    
    function getFavorite() {
        if ($("input[type=checkbox]").is(':checked')) {
            favoriteValue = "Yes"
        } else {
            favoriteValue = "No";
        }
    }
    
    //storing data to couch
    var storeData = function(key){
		console.log("function working");
		
        //$("#myKey").val(randomId)
        getFavorite();
        //var obj = {};
            obj.title = ["Movie Title:", $("#movietitle").val()];
            obj.date = ["Date:", $("#dateseen").val()];
            obj.genre = ["Movie Genre:", $("#genre").val()];
            obj.movietheater = ["Where Seen:", $("input[type=radio]:checked").val()];
            obj.friends = ["Who Seen With:", $("#seenwith").val()];
            obj.starrating = ["Star Rating:", ($("#starrating").attr('value'))];
            //obj.rating = ["Rating:", $("#rating").val()];
            obj.favorite = ["Favorite?", favoriteValue];
            obj.review = ["Review:", $("#review").val()];
            obj.myKey = ["key:", $("#myKey").val()];
			var newId = ' ';
			if (itemKey) {
				newId = obj._id
				//var randomId = Math.floor(Math.random()*1000001);
            
			}else{
				var randomId = Math.floor(Math.random()*1000001);
				//randomId = $("#myKey").val();
				newId = "genre:" + obj.genre[1] + ":" + randomId;
				obj._id = newId
			}
			//alert(obj);
			//console.log(req.responseText);
		$.couch.db("myhollywood").saveDoc(obj, {
			success: function() { alert("Movie Saved!");},
			error: function() {alert("Movie NOT Saved");}
		})	
        //localStorage.setItem(randomId, JSON.stringify(obj));
        //alert("Movie Saved!");
        //window.location.reload();
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
        onestar.attr("src", "filledStar_03.gif");
        twostar.attr("src", "emptystar_03.gif");
        threestar.attr("src", "emptystar_03.gif");
        fourstar.attr("src", "emptystar_03.gif");
        fivestar.attr("src", "emptystar_03.gif");
        ratingDiv.attr("value", "onestar");
    });
    twostar.click(function(){
        twostar.attr("src", "filledStar_03.gif");
        onestar.attr("src", "filledStar_03.gif");
        threestar.attr("src", "emptystar_03.gif");
        fourstar.attr("src", "emptystar_03.gif");
        fivestar.attr("src", "emptystar_03.gif");
        ratingDiv.attr("value", "twostars");
    });
    threestar.click(function(){
        threestar.attr("src", "filledStar_03.gif");
        onestar.attr("src", "filledStar_03.gif");
        twostar.attr("src", "filledStar_03.gif");
        fourstar.attr("src", "emptystar_03.gif");
        fivestar.attr("src", "emptystar_03.gif");
        ratingDiv.attr("value", "threestars");
    });
    fourstar.click(function(){
        fourstar.attr("src", "filledStar_03.gif");
        onestar.attr("src", "filledStar_03.gif");
        twostar.attr("src", "filledStar_03.gif");
        threestar.attr("src", "filledStar_03.gif");
        fivestar.attr("src", "emptystar_03.gif");
        ratingDiv.attr("value", "fourstars");
    });
    fivestar.click(function(){
        fivestar.attr("src", "filledStar_03.gif");
        onestar.attr("src", "filledStar_03.gif");
        twostar.attr("src", "filledStar_03.gif");
        threestar.attr("src", "filledStar_03.gif");
        fourstar.attr("src", "filledStar_03.gif");
        ratingDiv.attr("value", "fivestars");
    });
    
    //display data from local storage to display page
    function pullData() {
		//var key = $(this).data("key");
		//var rev = $(this).data("rev");
		//console.log(key);
		//var doc = {};
		//doc._id = key;
		//doc._rev = rev; 
		$.couch.db("myhollywood").view("myhollywoodapp/New", {
			success: function(data) {
				$("#displayPage").empty();
				//console.log(myKey);
					$.each(data.rows, function(index, movie) {
						//console.log(myKey);
						var title = movie.value.title;
						var date = movie.value.date;
						var genre = movie.value.genre;
						var movietheater = movie.value.movietheater;
						var friends = movie.value.friends;
						var starrating = movie.value.starrating;
						var favorite = movie.value.favorite;
						var review = movie.value.review;
						//console.log(title);
						$("#movieDisplay").append(
							$("<li>").append(
								$("<a>").attr("href", "genres.html?genre=" + title)
									.text(title)
									.attr("id", title)
							)
						);
						$(''+
                            
                        
                                  '<li>' + "Title: " + title + '</li>' +
                                  '<li>' + "Date: " + date + '</li>' +
                                  '<li>' + "Genre: " + genre + '</li>' +
                                  '<li>' + "Where Seen: " + movietheater + '</li>' +
                                  '<li>' + "Seen With: " + friends + '</li>' +
                                  '<li>' + "Rating: " + starrating + '</li>' +
                                  '<li>' + "Favorite?: " + favorite + '</li>' +
                                  '<li>' + "Review: " + review + '</li>' 
                              
                        ).appendTo("#movieDisplay");
					});
				/*console.log("Movie Displayed");*/},
			error: function() {alert("No movies to display");}
		})
        /*if (localStorage.length === 0) {
            alert("There are no movies saved so default movies were added");
            defaultData();
        }*/
        //var linksList;
        //pullImage(object.genre[1], newList);
        //linkList = newList.append("<li></li>");
        //createLinks(localStorage.key(i), linksList);
        /*for (var i=0, j=localStorage.length; i<j; i++) {
            var key = localStorage.key(i);
            var keyValue = localStorage.getItem(key);
            var object = JSON.parse(keyValue);
            for (var p in object) {
                if (object[p][0] === "Star Rating:" ) continue;
                movieData += "<li>" + object[p][0] + " " + object[p][1] + "</li>";  
            }
            if (object.starrating[1] === "onestar") {
              movieData += '<li><img src="filledstar_03.gif" class="star" /></li>';
            }else if (object.starrating[1] === "twostars") {
                movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
            }else if (object.starrating[1] === "threestars") {
                movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
            }else if (object.starrating[1] === "fourstars") {
                movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
            }else if (object.starrating[1] === "fivestars") {
                movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
            }
            movieData += '<li><a href="#addItem" class="editLink" style="display: block" data-key="' + key + '">Edit Movie</a></li>';
            movieData += '<li><a class="deleteLink" href="#" style="display: block" data-key="' + key + '">Delete Movie</a></li>';
        }
        $("#movieDisplay ul").append(movieData); */ 
        $(".editLink").on("click", editInput);
        $(".deleteLink")
            .after("<br>")
            .on("click", function() {
            var ask = confirm("Are you sure you want to delete this movie?");
            if (ask) {
                console.log("deleting");    
                localStorage.removeItem($(".deleteLink").data("key"));
                window.location.reload();
                alert("Movie deleted");
            }else{
                alert("This movie has not been deleted");
            }
    });
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
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "emptystar_03.gif");
            threestar.attr("src", "emptystar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "onestars");
        }
        if (obj.starrating[1] === "twostars") {
            twostar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "emptystar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "twostars");
        }else if (obj.starrating[1] === "threestars") {
            threestar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "threestars");
        }else if (obj.starrating[1] === "fourstars") {
            fourstar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "filledStar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "fourstars");
        }else if (obj.starrating[1] === "fivestars") {
            fivestar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "filledStar_03.gif");
            fourstar.attr("src", "filledStar_03.gif");
            ratingDiv.attr("value", "fivestars");
        }            
        $("#seenwith").val(obj.friends[1]);
        //obj.rating[1] = $("#rating").val();
        $("#review").val(obj.review[1]);
        $("#myKey").val(obj.myKey[1]);
        //console.log($("#myKey").val());
        /*saveMovie.on("click", function(){
               $(this).data("key");
               //saveMovie.key = this.key;
        });*/
        
        //var editSave = $("#savemovie");
        //console.log(editSave.val() + editSave.data());
        //editSave.on("click", confirmData);
        //editSave.key = this.key;
    }
    
   /* $(".deleteLink").on("click", function(e) {
		e.preventDefault();
		key = $(this).data("key");
		var rev = $(this).data("rev");
		var doc = {};
		doc._id = key;
		doc._rev = rev; 
        var ask = confirm("Are you sure you want to delete this movie?");
        if (ask) {
            console.log("deleting");
			$.couch.db("myhollywood").removeDoc(doc, {
				success: function() {console.log("Moved Deleted");},
				error: function() {console.log("Movie has NOT been deleted");}								 
			})
            //localStorage.removeItem($(".deleteLink").data("key"));
            //window.location.reload();
            alert("Movie deleted");
        }else{
            alert("This movie has not been deleted");
        }
    });*/
    
    
    
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
    var saveMovie = $("#savemovie");
});

$(document).on("pageinit", "#genrePage",  function(){
			$.couch.db("myhollywood").view("myhollywoodapp/Movies", {
				success: function (data) {
					$("genreslist").empty();
					$.each(data.rows, function(index, genre) {
						var title = genre.value.title;
						var type = genre.value.type;
						var date = movie.value.date;
						var genre = movie.value.genre;
						var movietheater = movie.value.movietheater;
						var friends = movie.value.friends;
						var starrating = movie.value.starrating;
						var favorite = movie.value.favorite;
						var review = movie.value.review;
						//console.log("page working");
						$("#genreslist").append(
							$("<li>").append(
								$("<a>").attr("href", "genres.html?genre=" + type)
									.text(title)
									.attr("id", type)
							)
						);
						$(''+
                            '<div>' +
                                '<ul>' +
                                  '<li>' + "Title: " + title + '</li>' +
                                  '<li>' + "Date: " + date + '</li>' +
                                  '<li>' + "Genre: " + genre + '</li>' +
                                  '<li>' + "Where Seen: " + movietheater + '</li>' +
                                  '<li>' + "Seen With: " + friends + '</li>' +
                                  '<li>' + "Rating: " + starrating + '</li>' +
                                  '<li>' + "Favorite?: " + favorite + '</li>' +
                                  '<li>' + "Review: " + review + '</li>' +
                                '</ul>' +
                            '</div>'
                        ).appendTo("#dataContent");
					});
					$("#genreslist").listview("refresh");
				}
			});  	
   		
   		/*
        $("#jsonData").on("click", function(){
                
            $.ajax({
                url: "data.json",
                type: "GET",
                dataType: "json",
                success: function(data){
                    for(var i=0, j=data.movies.length; i<j; i++){
                        var jsonDisplay = data.movies[i];
                        $(''+
                            '<div>' +
                                '<ul>' +
                                  '<li>' + "Title: " + jsonDisplay.title + '</li>' +
                                  '<li>' + "Date: " + jsonDisplay.date + '</li>' +
                                  '<li>' + "Genre: " + jsonDisplay.genre + '</li>' +
                                  '<li>' + "Where Seen: " + jsonDisplay.movietheater + '</li>' +
                                  '<li>' + "Seen With: " + jsonDisplay.friends + '</li>' +
                                  '<li>' + "Rating: " + jsonDisplay.starrating + '</li>' +
                                  '<li>' + "Favorite?: " + jsonDisplay.favorite + '</li>' +
                                  '<li>' + "Review: " + jsonDisplay.review + '</li>' +
                                '</ul>' +
                            '</div>'
                        ).appendTo("#dataContent");
                    };    
                }
            });
        });*/
      /*  
    $("#xmlData").on("click", function(){
        $.ajax({
            url: "data.xml",
            type: "GET",
            dataType: "xml",
            success: function(data){
                //var data = $.parseXML(xml);
                //var movies = $(data);
                $(data).find("movie").each(function(){
                    var movie = $(this);
                    $(''+
                            '<div>' +
                                '<ul>' +
                                  '<li>' + "Title: " + movie.find("title").text() + '</li>' +
                                  '<li>' + "Date: " + movie.find("date").text() + '</li>' +
                                  '<li>' + "Genre: " + movie.find("genre").text() + '</li>' +
                                  '<li>' + "Rating: " + movie.find("rating").text() + '</li>' +
                                  '<li>' + "Review: " + movie.find("review").text() + '</li>' +
                                '</ul>' +
                            '</div>'
                        ).appendTo("#dataContent");
                });
            }  
        });	*/
    });

var urlVars = function() {	
	var urlData = $($.mobile.activePage).data("url");
    var urlParts = urlData.split('?');
    var urlPairs = urlParts[1].split('&');
    var urlValues = {};
    for(var pair in urlPairs) {
        var keyValue = urlPairs[pair].split('=');
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        urlValues[key] = value;
    }
	return urlValues;
};



$(document).on("pageinit", "#movie",  function(){
	urlData = $(this).data("url");
	//console.log(urlData);
	//console.log(urlData.indexOf("title"));
	//var movieTitle = urlVars()["genre"];
	//console.log(movieTitle);
	
	$.couch.db("myhollywood").view("myhollywoodapp/New", {
		success: function (data) {
			/*var key = $(this).data("key");
					var rev = $(this).data("rev");
					var doc = {};
					data._id = key;
					data._rev = rev;
					console.log(doc._id);*/
			//$("#movieTitles").empty();
			//var key = $("#myKey");
			//var key = $(this).data("key");
			//var rev = $(this).data("rev");
			$.each(data.rows, function(index, movie) {
				
				//var rev = movie.rev;
				//console.log(movie.id);
				//console.log(movie.value._rev);
				var title = movie.value.title;
				//console.log(title);
				//console.log(date);
				var date = movie.value.date;
				var genre = movie.value.genre;
				var movietheater = movie.value.movietheater;
				var friends = movie.value.friends;
				var starrating = movie.value.starrating;
				var favorite = movie.value.favorite;
				var review = movie.value.review;
				//console.log(urlData.indexOf(title));
				//console.log(title[1]);
				//console.log(urlData.indexOf(title[1]) != -1);
						
				//if (urlData.indexOf(title[1] != -1)) {
					//console.log(title[1]);
					$(''+
						'<li>' + "Title: " + title[1] + '</li>' +
						'<li>' + "Date: " + date[1] + '</li>' +
						'<li>' + "Genre: " + genre[1] + '</li>' +
						'<li>' + "Where Seen: " + movietheater[1] + '</li>' +
						'<li>' + "Seen With: " + friends[1] + '</li>' +
						'<li>' + "Rating: " + starrating[1] + '</li>' +
						'<li>' + "Favorite?: " + favorite[1] + '</li>' +
						'<li>' + "Review: " + review[1] + '</li>' +
						//'<li><img src="" class="star" /></li>' +
						'<li><a href="#addItem" class="editLink" style="display: block" data-key="' + movie.id + '" data-rev="">Edit Movie</a></li>' +
						'<li><a class="deleteLink" href="#" style="display: block" data-key="' + movie.id + '" data-rev="">Delete Movie</a></li>' +
						'<br>'
					).appendTo("#movieTitles");
					/*if (starrating[1] === "onestar") {
						$(".star").attr("src", "filledstar_03.gif")
					}else if (starrating === "twostars") {
						//movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
					}else if (starrating === "threestars") {
						//movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
					}else if (starrating === "fourstars") {
						//movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
					}else if (starrating === "fivestars") {
						//movieData += '<li><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /><img src="filledstar_03.gif" class="star" /></li>';
					}*/
					$(".editLink").on("click", function(e){
						//var userInput = data.rows[$(info.currentTarget).attr('#myKey')].value;
                        //window.location.assign('#addItem');
						//console.log(userInput);
						//e.preventDefault();
						var key = $(this).data("key");
						var rev = $(this).data("rev");
						var doc = {};
						doc._id = key;
						doc._rev = rev;
						console.log(doc);
						$.couch.db("myhollywood").openDoc(key, {
							success: function(info) {	
							console.log(doc);
							console.log(title[1]);
							$("#movietitle").val(title[1]);
							},	
							error: function() {console.log("Movie not opened");}
						})
					});
					$(".deleteLink").on("click", function(e) {
						e.preventDefault();
						//key = $(this).data("key");
						//var rev = $(this).data("rev");
						//var doc = movie.id;
						//console.log(doc);
						//doc._id = key;
						//doc._rev = rev; 
						var ask = confirm("Are you sure you want to delete this movie?");
						if (ask) {
							//console.log(doc);
							$.couch.db("myhollywood").removeDoc(obj, {
								success: function() {console.log("Moved Deleted");},
								error: function() {console.log("Movie has NOT been deleted");}								 
							})
						//window.location.reload();
						}else{
							alert("This movie has not been deleted");
						}
					});
				//}
			});
		}
	});			
});

$(document).on("pageinit", "#displayPage",  function(){
	$.couch.db("myhollywood").view("myhollywoodapp/New", {
			success: function(data) {
				//$("#displayPage").empty();
				//console.log(myKey);
				$.each(data.rows, function(index, movie) {
					//console.log(myKey);
					//var key = $("myKey");
					var title = movie.value.title;
					var date = movie.value.date;
					var genre = movie.value.genre;
					var movietheater = movie.value.movietheater;
					var friends = movie.value.friends;
					var starrating = movie.value.starrating;
					var favorite = movie.value.favorite;
					var review = movie.value.review;
					//console.log(title);
					$("#movieDisplay").append(
						$("<li>").append(
							$("<a>").attr("href", "genres.html?title=" + title)
								.text(title[1])
								.attr("id", title)
						)
					);
				});
				$("#movieDisplay").listview("refresh");	
			},
			error: function() {alert("No movies to display");}
	});
});
function editInput() {
    key = $(this).data("key");
	var rev = $(this).data("rev");
	var doc = {};
	doc._id = key;
	doc._rev = rev;
		
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
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "emptystar_03.gif");
            threestar.attr("src", "emptystar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "onestars");
        }
        if (obj.starrating[1] === "twostars") {
            twostar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "emptystar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "twostars");
        }else if (obj.starrating[1] === "threestars") {
            threestar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            fourstar.attr("src", "emptystar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "threestars");
        }else if (obj.starrating[1] === "fourstars") {
            fourstar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "filledStar_03.gif");
            fivestar.attr("src", "emptystar_03.gif");
            ratingDiv.attr("value", "fourstars");
        }else if (obj.starrating[1] === "fivestars") {
            fivestar.attr("src", "filledStar_03.gif");
            onestar.attr("src", "filledStar_03.gif");
            twostar.attr("src", "filledStar_03.gif");
            threestar.attr("src", "filledStar_03.gif");
            fourstar.attr("src", "filledStar_03.gif");
            ratingDiv.attr("value", "fivestars");
        }            
        $("#seenwith").val(obj.friends[1]);
        //obj.rating[1] = $("#rating").val();
        $("#review").val(obj.review[1]);
        $("#myKey").val(obj.myKey[1]);
        //console.log($("#myKey").val());
        /*saveMovie.on("click", function(){
               $(this).data("key");
               //saveMovie.key = this.key;
        });*/
        
        //var editSave = $("#savemovie");
        //console.log(editSave.val() + editSave.data());
        //editSave.on("click", confirmData);
        //editSave.key = this.key;
    }