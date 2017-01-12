//Global Variables

var likes = $("#likes").val();
var dislikes = $("#dislikes").val();

//-----------------------------------------------------------------

// Displays graph

function displayChart() {
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

$("#likebutton").on("click", function () {
	$("#container").show();
	likes++;
	$("#likes").html(likes);
	displayChart();
	console.log(likes);
});

$("#dislikebutton").on("click", function () {
	$("#container").show();
	dislikes++;
	$("#dislikes").html(dislikes);
	displayChart();
	console.log(dislikes);
});