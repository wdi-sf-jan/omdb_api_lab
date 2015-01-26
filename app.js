// Wait for the document to be ready before attempting any DOM
// interaction. This is jQuery's equivalent of window.onload.
$(document).ready(function () {

  // $("form") is jQuery's way of doing
  // document.getElementsByTagName("form). Listen to the "submit"
  // event. (This will listen for submit events on ALL the forms in
  // the page, but we only have one, so no big deal).
  $("form").on("submit", function (event) {

    // Prevent the page from reloading.
    event.preventDefault();

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
          var li = $("<li></li>").text(movie.Title);
          $results.append(li);
        });
      }
    });
  });
});
