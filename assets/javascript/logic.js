//Global Variables

var likes = $("#likes").val();
var dislikes = $("#dislikes").val();

//-----------------------------------------------------------------
// Displays graph

function displayChart() {
    console.log("hello");
    Highcharts.chart('container', {
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Likes vs. Dislikes'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });

    $("#datatable").hide();
};


$( document ).ready(function() {
//firebase configuration
var config = {
    apiKey: "AIzaSyD80Gu2sk47F3EZtbzaORhXzDILBAIUsbc",
    authDomain: "st-project-152bb.firebaseapp.com",
    databaseURL: "https://st-project-152bb.firebaseio.com",
    storageBucket: "st-project-152bb.appspot.com",
    messagingSenderId: "11992794894"
};

firebase.initializeApp(config);
var database = firebase.database();
var firebaseSongKey;
var likes = 0;
var dislikes = 0;

//grabs songs from firebase and display them one at the time   
function loadSong() {
    //setting a second function that will fire when new content is added to firebase
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        $('#music').empty();

        firebaseSongKey = childSnapshot.val();
        //store song key in a variable
        var spotifyId = childSnapshot.val().spotifyId;
        //here we store the id of the song that was liked/disliked

        // '<button class="btn btn-default" id="likebutton" type="submit" style="background-color:#30336f;color: white;margin-left: 10px; margin-top: 20px;padding: 20px 50px;border:5px solid black;font-size: 20px;font-family: 'Fugaz One', cursive;">Like</button>'

        var likeB = $('<button>').text('like').addClass('btn btn-default').attr('data-spotifyKey', childSnapshot.key).attr('data-type', 'like').attr('id', 'likebutton');

        var dislikeB = $('<button>').text('dislike').addClass('btn btn-default').attr('data-spotifyKey', childSnapshot.key).attr('data-type', 'dislike').attr('id', 'dislikebutton');
        //creates new div and populates it with a song
        var link = "https://open.spotify.com/embed/track/" + spotifyId;
        $('#music').append($('<div>')
            .addClass('song').attr("id", "resultD_")
            .append($("<iframe src=" + link + " value='hello'></iframe>"))).append(likeB).append(dislikeB);

        // $('button').on('click', function() {
        //     var spotifyKey = $(this).attr('data-spotifyKey');
        //     var type = $(this).attr('data-type');

            $("#likebutton").on("click", function () {
                var spotifyKey = $(this).attr('data-spotifyKey');
                var type = $(this).attr('data-type');
                $("#container").show();
                likes++;
                $("#likes").html(likes);
                displayChart();
                console.log(likes);
            });

            $("#dislikebutton").on("click", function () {
                var spotifyKey = $(this).attr('data-spotifyKey');
                var type = $(this).attr('data-type');
                $("#container").show();
                dislikes++;
                $("#dislikes").html(dislikes);
                displayChart();
                console.log(dislikes);
            });
            // alert(spotifyKey + " " + type);
            
            // database.ref().set({

            //     'likes': likes,

            // });

            // database.once('value', function(snapshot) {

            //   if( snapshot.val() === null ) {
            //       /* does not exist */
            //   } else {snapshot.ref().update({"likes": likes}); }
            //   });

            // trainName = $("#train-name-edit").val().trim();
            // destination = $("#destination-edit").val().trim();
            // firstTrainTime = $("#first-train-time-edit").val().trim();
            // frequency = $("#frequency-edit").val().trim();

            // firebase.database().ref().child(trainKey).set({

            // trainName: trainName,
            // destination: destination,
            // firstTrainTime: firstTrainTime,
            // frequency: frequency,
            // dateAdded: firebase.database.ServerValue.TIMESTAMP

            // });

            return false;
    });
}
loadSong();
});