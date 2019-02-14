var operator = process.argv[2]; 
var query = process.argv[3];

// require("dotenv").config();
var axios = require("axios"); 
// var keys = require("keys-js"); 
// var spotify = new Spotify(keys.spotify);

var options = {
    provider: "bandsintown", 
    apikey: "/events?app_id=codingbootcamp"
}

if (operator === "concert-this"){
    var queryUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp"

    console.log(queryUrl);
    
    axios.get(queryUrl).then(
        function(response){
            console.log(response); 
        }
    ); 
    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")

}else
if (operator === "movie-this"){
    var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response) {
            console.log(response);
            console.log("Title: " + response.data.Title); 
            console.log("Release year: " + response.data.Year); 
            console.log("IMDB Rating: " + response.data.imdbRating); 
            console.log("Rotten Tomatoes score: " + response.data.Ratings[1].Value); 
            console.log("Country: " + response.data.Country); 
            console.log("Plot: "+ response.data.Plot); 
            console.log("Actors: "+ response.data.Actors);
        }
    );
}


// concert-this

// spotify-this-song

// do-what-it-says