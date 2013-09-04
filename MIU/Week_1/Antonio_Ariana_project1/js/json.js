/*
Author: Ariana Antonio
Project 4: Movie Journal
VFW 1307
*/

//Dummy data
var json = {
    "movie1": {
        "title": ["Movie Title:", "The Lord Of The Rings"],
        "date": ["Date:", "2001-12-19"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Jonathan and Becca"],
        "rating": ["Rating:", "10"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "This is the best movie ever. We had a ton of fun that night and many people were dressed in costume!"]
    },
    "movie2": {
        "title": ["Movie Title:", "The Conjuring"],
        "date": ["Date:", "2013-07-20"],
        "genre": ["Movie Genre:", "Horror"],
        "movietheater": ["Where Seen:", "Movie Theater"],
        "friends": ["Who Seen With:", "Bethany"],
        "rating": ["Rating:", "8"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Lame at parts, but generally terrifying"]
    },
    "movie3": {
        "title": ["Movie Title:", "Love Actually"],
        "date": ["Date:", "2012-12-24"],
        "genre": ["Movie Genre:", "Romance"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "My family"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "A holiday staple, this movie is sweet and funny. I enjoy it every time."]
    },
    "movie4": {
        "title": ["Movie Title:", "Nacho Libre"],
        "date": ["Date:", "2013-08-30"],
        "genre": ["Movie Genre:", "Comedy"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Jonathan"],
        "rating": ["Rating:", "10"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Always make me laugh and cheers me up when I need it."]
    },
    "movie5": {
        "title": ["Movie Title:", "Mama"],
        "date": ["Date:", "2013-07-12"],
        "genre": ["Movie Genre:", "Horror"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Eden"],
        "rating": ["Rating:", "4"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Had some scary parts but overall pretty dumb."]
    },
    "movie6": {
        "title": ["Movie Title:", "Requiem For A Dream"],
        "date": ["Date:", "2008-12-11"],
        "genre": ["Movie Genre:", "Drama"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Beeca"],
        "rating": ["Rating:", "8"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Great movie although a bit depressing. Definitely scared me off of drugs!"]
    },
    "movie7": {
        "title": ["Movie Title:", "Serenity"],
        "date": ["Date:", "2006-11-21"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Alex"],
        "rating": ["Rating:", "10"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Such a great movie. Hard to put it in the action catagory because it is so many things. Love it love it."]
    },
    "movie8": {
        "title": ["Movie Title:", "Face/Off"],
        "date": ["Date:", "2013-08-31"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Jonathan"],
        "rating": ["Rating:", "5"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Loved this movie as a kid but found it pretty bad as an adult."]
    },
    "movie9": {
        "title": ["Movie Title:", "Monster's Ball"],
        "date": ["Date:", "2007-01-16"],
        "genre": ["Movie Genre:", "Drama"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Becca"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "A great and moving movie about horrible people. Always love Heath Ledger."]
    },
    "movie10": {
        "title": ["Movie Title:", "Napolean Dynamite"],
        "date": ["Date:", "2008-07-13"],
        "genre": ["Movie Genre:", "Comedy"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Heather and Kara"],
        "rating": ["Rating:", ""],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Funny and weird. Had a great time."]
    },
    "movie11": {
        "title": ["Movie Title:", "Monster's Inc"],
        "date": ["Date:", "2006-05-12"],
        "genre": ["Movie Genre:", "Comedy"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Bren & Petey"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Love this movie! So funny and sweet."]
    },
    "movie12": {
        "title": ["Movie Title:", "King Of Corn"],
        "date": ["Date:", "2013-08-03"],
        "genre": ["Movie Genre:", "Other"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Jonathan"],
        "rating": ["Rating:", "4"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "A fairly boring documentary about the corn industry. A few interesting parts."]
    },
    "movie13": {
        "title": ["Movie Title:", "Gladiator"],
        "date": ["Date:", "2003-03-01"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "At Home"],
        "friends": ["Who Seen With:", "Mom"],
        "rating": ["Rating:", "8"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "A fun and epic movie with great music. Always a good watch"]
    },
    "movie14": {
        "title": ["Movie Title:", "Once"],
        "date": ["Date:", "2010-11-22"],
        "genre": ["Movie Genre:", "Other"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Heather"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Such a cute and sweet musical."]
    },
    "movie15": {
        "title": ["Movie Title:", "Back To The Future"],
        "date": ["Date:", "2013-08-19"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Jonathan, Becca, Bethany, and Tim"],
        "rating": ["Rating:", "10"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Watched this at the cemetery. Always a good time and one of my favorites!"]
    },
    "movie16": {
        "title": ["Movie Title:", "The Grudge"],
        "date": ["Date:", "2006-04-03"],
        "genre": ["Movie Genre:", "Horror"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Heather"],
        "rating": ["Rating:", "7"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Could be dumb at parts but scared the beejezus out of me."]
    },
    "movie17": {
        "title": ["Movie Title:", "Inception"],
        "date": ["Date:", "2011-07-10"],
        "genre": ["Movie Genre:", "Action"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Jonathan and Jeremy"],
        "rating": ["Rating:", "10"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Best movie ever! Totally blew my mind. Will see it again in theaters."]
    },
    "movie18": {
        "title": ["Movie Title:", "Superbad"],
        "date": ["Date:", "2010-08-05"],
        "genre": ["Movie Genre:", "Comedy"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Jonathan and Jeremy"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "Hilarious!!"]
    },
    "movie19": {
        "title": ["Movie Title:", "Snatch"],
        "date": ["Date:", "2002-01-18"],
        "genre": ["Movie Genre:", "Other"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "Chris Osbrink"],
        "rating": ["Rating:", "6"],
        "favorite": ["Favorite?", "off"],
        "review": ["Review:", "Had some good stuff but felt like it was basically Lock Stock And Two Smoking Barrels."]
    },
        "movie20": {
        "title": ["Movie Title:", "Tropic Thunder"],
        "date": ["Date:", "2010-06-04"],
        "genre": ["Movie Genre:", "Comedy"],
        "movietheater": ["Where Seen:", "Theater"],
        "friends": ["Who Seen With:", "My family"],
        "rating": ["Rating:", "9"],
        "favorite": ["Favorite?", "on"],
        "review": ["Review:", "I laughed so hard during this movie. It was crazy funny."]
    }
} 