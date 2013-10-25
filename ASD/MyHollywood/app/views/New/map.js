function(doc) {
  if (doc.myKey) {
	//var key = doc._id.split(':');
    emit(doc._id, {
	    //"id": doc._id,
	    "rev": doc._rev,
    	"title": doc.title,
    	"date": doc.date,
    	"movietheater": doc.movietheater,
    	"genre": doc.genre,
    	"friends": doc.friends,
    	"favorite": doc.favorite,
    	"starrating": doc.starrating,
    	"review": doc.review	
    });
	/*emit(doc._rev, {
    	"title": doc.title,
    	"date": doc.date,
    	"movietheater": doc.movietheater,
    	"genre": doc.genre,
    	"friends": doc.friends,
    	"favorite": doc.favorite,
    	"starrating": doc.starrating,
    	"review": doc.review	
    });*/
  }
};

/*function(doc) {
  if (doc.myKey) {
    emit(doc._rev, {
    	"title": doc.title,
    	"date": doc.date,
    	"movietheater": doc.movietheater,
    	"genre": doc.genre,
    	"friends": doc.friends,
    	"favorite": doc.favorite,
    	"starrating": doc.starrating,
    	"review": doc.review	
    });
  }
};*/