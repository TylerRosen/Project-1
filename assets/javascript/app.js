// API Info
var config = {
    apiKey: "AIzaSyD80Gu2sk47F3EZtbzaORhXzDILBAIUsbc",
    authDomain: "st-project-152bb.firebaseapp.com",
    databaseURL: "https://st-project-152bb.firebaseio.com",
    storageBucket: "st-project-152bb.appspot.com",
    messagingSenderId: "11992794894"
  };

//Initialize Firebase
  
  firebase.initializeApp(config);
  var database = firebase.database();
  
  // Create Firebase event for adding songs to website
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  $('#song').empty();
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var idBucket = childSnapshot.val().songIds;
  var what = childSnapshot.val().theme;

  // Embedd song onto page
  console.log(idBucket);
for (var i=0; i<idBucket.length; i++){
          var link = "https://open.spotify.com/embed/" + what + "/" + idBucket[i].id ;
          $('#song').append($('<div>')
                .addClass('song').attr("id","resultD_"+i)
                    .append($('<iframe src=' + link + '></iframe>')));
         }
});