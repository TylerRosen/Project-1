// //Global Variables

var likes = $("#likes").val();
var dislikes = $("#dislikes").val();

//----------------------------------------------------------------


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
var ids = [{id: '2Zb7wnGUnNPCas2E0wWSQ5',
            likes: 0} , 
            {id: '6jG2YzhxptolDzLHTGLt7S',
             likes: 0   } , 
            {id: '37jTPJgwCCmIGMPB45jrPV',
            likes: 0}, 
            {id: '49FYlytm3dAAraYgpoJZux',
             likes: 0   },
             {id: '4JQtQTDIaM4uu5Qnd9i0b3',
             likes: 0   },
             {id: '6sfhk9WyMdsyv2cErsZtZT',
             likes: 0   },
             {id: '22EMUMpsSr4cFyY22O9cUb',
             likes: 0   },
             {id: '1xThrFiHN6iQ63nQgvKpiC',
             likes: 0   }, 
             {id: '5UAHT3ovaYrDqHaVRgKVEd',
             likes: 0}];
        console.log(ids[0].likes);
var count = 0;

//Displays graph

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
//grabs songs from firebase and display them one at the time   
function loadSong() {
    //setting a second function that will fire when new content is added to firebase
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        $('#music').empty();
        console.log(childSnapshot);
        firebaseSongKey = childSnapshot.val();
        //store song key in a variable
        var spotifyId = childSnapshot.val().spotifyId;
        //here we store the id of the song that was liked/ 
        var likeB = $('<button>').text('like').addClass('btn btn-default').attr('data-spotifyKey', childSnapshot.key).attr('data-type', 'like');
        var dislikeB = $('<button>').text('dislike').addClass('btn btn-default').attr('data-spotifyKey', childSnapshot.key).attr('data-type', 'dislike');
        
        //creates new div and populates it with a song
        function switcher(){
        var link = "https://open.spotify.com/embed/track/" + ids[count].id;
        $('#music').append($('<div>')
            .addClass('song').attr("id", "resultD_")
            .append($("<iframe src=" + link + " value='hello'></iframe>"))).append(likeB).append(dislikeB);

        $(likeB).on('click', function() {
            count++;
            var a = ids[count].likes;
            a++;
            $("#likes").html(a);
            $("#dislikes").html(0);
            $('#music').empty();
            switcher();
            displayChart ();
            //keeps count of likes
            var spotifyKey = $(this).attr('data-spotifyKey');
            var type = $(this).attr('data-type');
            // alert(spotifyKey + " " + type);
            console.log(a);
            
            
            return false;
        });

        $(dislikeB).on('click', function() {
            count++;
            var a = ids[count].likes;
            a++;
            $("#dislikes").html(a);
            $("#likes").html(0);
            $('#music').empty();
            switcher();
            displayChart ();
            //keeps count of likes
            var spotifyKey = $(this).attr('data-spotifyKey');
            var type = $(this).attr('data-type');
            // alert(spotifyKey + " " + type);
            console.log(a);
            
            
            return false;
        });
    };
    switcher();
    });
}
loadSong();
});