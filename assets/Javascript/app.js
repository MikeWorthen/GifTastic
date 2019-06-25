
var people = ["Michael Jordan", "Shaq", "Mike Trout", "Magic Johnson"];

//Pull's input value from API and turns it into div and img html by using the src
function displayGifs() {
    var sports = $(this).attr("data-name");
            //API url
            var url =  "https://api.giphy.com/v1/gifs/search?q=" +
            sports + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
            console.log(url);
            $.ajax({
                url: url,
                method: "GET"
              })
              .then(function(response) {
                var results = response.data;
                console.log(results)
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    // var p = $("<p>").text("Rating: " + results[i].rating);
                    var gifImage = $("<img class='img'>");
                    gifImage.attr("src", results[i].images.fixed_height.url, results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-state", "animated");
                    gifDiv.append(gifImage);
                    $("#gifList").prepend(gifDiv);    
                }
                $(".img").on("click", function() {
                    var state = $(this).attr("data-state");
                    if (state === "animated") {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    } else {
                      $(this).attr("src", $(this).attr("data-animate"));
                      $(this).attr("data-state", "animated");
                    }
                  });

              });
            }

            //Add's the new buttons to the array and empties the array first to not duplicate the buttons
            function displayNewButton() {
                $("#button-view").empty();
                // Looping through the array of people
                for (var i = 0; i < people.length; i++) {
                    var a = $("<button class='bg-success'>");
                    a.addClass("person");
                    a.attr("data-name", people[i]);
                    a.text(people[i]);
                    $("#button-view").append(a);
                }
            }
            
            //The actual click to add new buttons
            $("#add-person").on("click", function(event){
                event.preventDefault();
                var person = $("#person-input").val().trim();
                // if(people.indexOf(person) == -1) {
                //     people.push(person);
                // }
                people.push(person);
                displayNewButton();
                $("#person-input").val("");
            });

    //Display Buttons at refresh of browser and displaying gifs for button click
    // $(document).on("click", ".person", displayGifs)
        displayNewButton();
       
    $("#button-view").on("click", ".person", displayGifs)
    
 
        
    



