function(doc) {
  if (doc._id.substr(0,6) === "movie:") {
    emit(doc._id.substr(6), {
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
};