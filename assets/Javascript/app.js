
$("button").on("click", function() {

    var sports = $(this).attr("data-person");
    
    //API url
    var url =  "https://api.giphy.com/v1/gifs/search?q=" +
    sports + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    $.ajax({
        url: url,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(gifImage);
            $("#gifList").prepend(gifDiv);
        }
      });
    });

