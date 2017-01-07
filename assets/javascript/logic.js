//Global Variables

var voteDiv = $("<div id='vote'>");
	var vote1 = $('<input type = "button" value="Vote"/>');
	var vote2 = $('<input type = "button" value="Vote"/>')

	var counter= 181
	var timer;

//---------------------------------------------------------------

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

//Tells timer to decrease every second
function run () {
 timer = setInterval(decrement, 1000);
}


	//Counts down seconds
function decrement () {
	counter--;

//Converts miliseconds into minutes and seconds
	var converted = timeConverter(counter);
	$("#timer").html(counter + converted);

//Once timer reaches 0, stop the timer
	if (counter === 0) {

	stop();

  };

};

run();


//Converts seconds into minutes
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

	$("#user-input, #submit, #battle").hide();

	$("#searchbar").prepend(voteDiv).html("Vote Now!");
	$("#vote").prepend(vote1, vote2);

});