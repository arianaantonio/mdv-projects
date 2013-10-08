/*
Author: Ariana Antonio
Project 2
ASD 1310
*/
$('#search').on('pageinit', function(){
    var text = $("search").val();
    function searchApp(){
       if (text != "") {
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "values");
            var createList = document.createElement("ul");
            createDiv.appendChild(createList);
            var createSearch = $("searchForm");
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
	