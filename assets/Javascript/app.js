
var people = ["Michael Jordan", "LeBron James", "Mike Trout", "Tom Brady"];

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
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    // var p = $("<p>").text("Rating: " + results[i].rating);
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);
                    // gifDiv.append(p);
                    gifDiv.append(gifImage);
                    $("#gifList").prepend(gifDiv);    
                }

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
                people.push(person);
                $("#person-input").val("");
                displayNewButton();
            });

    //Display Buttons at refresh of browser and displaying gifs for button click
    $(document).on("click", ".person", displayGifs)
        displayNewButton();
    $("button").on("click", function(){
        displayNewButton();
    });



