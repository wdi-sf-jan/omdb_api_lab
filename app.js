// Wait for the document to be ready before attempting any DOM
// interaction. This is jQuery's equivalent of window.onload.
$(document).ready(function () {

  // Grab a reference to the <div> with an ID of "poster".
  var $poster = $("#poster");

  // $("form") is jQuery's way of doing
  // document.getElementsByTagName("form). Listen to the "submit"
  // event. (This will listen for submit events on ALL the forms in
  // the page, but we only have one, so no big deal).
  $("form").on("submit", function (event) {

    // Prevent the page from reloading.
    event.preventDefault();

    // Remove any old posters (if any).
    $poster.empty();

    // Can either grab the search term through event.target or this.
    var query = this.searchTerm.value;

    // Call the OMDB API. {s: query} passes the query term as the "s"
    // parameter to the API. The third argument is a function that is
    // called when the request is successful.
    $.getJSON("http://www.omdbapi.com/", {s:query}, function (data) {
      var $results = $("#results").empty();
      if (data.Error) {
        $results.html("No results found.");
      } else {
        data.Search.forEach(function (movie) {
          // Create a new list item.
          var li = $("<li></li>");
          // Create a new link.
          var a = $("<a></a>");
          // Set the link's text to be the title of the movie.
          a.text(movie.Title);
          // Set it's `href` attribute so it looks like a link.
          a.attr("href", "#");
          // Listen for a click event, in order to load the poster.
          a.on("click", function (event) {
            console.log("you clicked " + movie.Title);
            // Remove old poster (if any).
            $poster.empty();
            // Call OMDB for info about a specific movie.
            $.getJSON("http://www.omdbapi.com/", {i:movie.imdbID}, function (moreData) {
              console.log(moreData);
              var img = $("<img>").attr("src", moreData.Poster);
              $poster.html(img);
            });
          });
          // Add the link to the list item.
          li.append(a);
          // Add the list item to the page.
          $results.append(li);
        });
      }
    });
  });
});
