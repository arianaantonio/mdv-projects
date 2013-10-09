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
    /*pull whereseen value
    function getTheater(){
        var theater = $("input:radio:selected").val();
        var theater = document.forms["addItemForm"].where;
        for (var i=0; i<theater.length; i++) {
            if (theater[i].checked) {
                theaterValue = theater[i].value;
            }
        }
    }*/
    //pull favorite value    
    function getFavorite() {
        if ($("input[type=checkbox]").is(':checked')) {
            favoriteValue = "Yes"
        } else {
            favoriteValue = "No";
        }
    }

    //var theaterValue;
    //var favoriteValue = "No";
    
    
    
    var storeData = function(key){
        if (!key) {
            var randomId = Math.floor(Math.random()*1000001);
        }else{
            randomId = key;
        }
        getFavorite();
        //getTheater();
        var obj = {};
            obj.title = ["Movie Title:", $("#movietitle").val()];
            obj.date = ["Date:", $("#dateseen").val()];
            obj.genre = ["Movie Genre:", $("#genre").val()];
            obj.movietheater = ["Where Seen:", $("input[type=radio]:checked").val()];
            obj.friends = ["Who Seen With:", $("#seenwith").val()];
            obj.starrating = ["Star Rating:", ($("#starrating").attr('value'))];
            obj.rating = ["Rating:", $("#rating").val()];
            obj.favorite = ["Favorite?", favoriteValue];
            obj.review = ["Review:", $("#review").val()];
        localStorage.setItem(randomId, JSON.stringify(obj));
        alert("Movie Saved!");
        window.location.reload();
    }         
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
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
	