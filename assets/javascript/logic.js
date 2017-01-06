console.log("Hello")

$("#play_song").on("click", function () {
	console.log("Song!");

var queryURL = ""
        console.log(queryURL);

          $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

var song = "spotify:track:6rqhFgbbKwnb9MLmUQDhG6"

song.play ();

});

});