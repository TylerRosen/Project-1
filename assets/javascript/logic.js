$("#submit").on("click", function () {
    console.log("Song!");
    var track = $('#user-input').val().trim();
    var searchQuery = "";
    var queryURL = 'https://api.spotify.com/v1/search?q=' + track + '&type=track&limit=1';
       console.log(queryURL);
         $.ajax({
         url: queryURL,
         method: "GET"
       })
       .done(function(response) {
         var results = response;
         console.log(results);
         // console.log(results.tracks.items[0]);
         console.log(results.tracks.items[0].name);
         console.log(results.tracks.items[0].artists[0].name);
         console.log(results.tracks.items[0].id);
         var trackId = results.tracks.items[0].id;
         var link = "https://open.spotify.com/embed/track/" + trackId;
         console.log(link);
// $('#tracks').append(results.tracks.items[0].name);
$('#tracks2').append($('<div>').addClass('song').append('<embed src=' + link +'>'));
return false;
// var song = "spotify:track:6rqhFgbbKwnb9MLmUQDhG6"
// song.play();
var song = "spotify:track:" + songID 
var songId= results.tracks.items[0].id;
});
});

$("#battle").on("click", function () {
	$("#user-input, #submit, #battle").hide();

	var voteDiv = $("<div id='vote'>");
	var vote1 = $('<input type = "button" value="Vote"/>');
	var vote2 = $('<input type = "button" value="Vote"/>')

	$("#searchbar").prepend(voteDiv).html("Vote Now!");
	$("#vote").prepend(vote1, vote2);
});