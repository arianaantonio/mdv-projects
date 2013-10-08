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
	