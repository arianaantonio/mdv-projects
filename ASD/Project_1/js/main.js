/*
Author: Ariana Antonio
Project 1
ASD 1310
*/
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
	