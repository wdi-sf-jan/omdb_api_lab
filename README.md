OMDB Lab
========

The Open Movie Database (OMDB) allows you to search for movies and
find out details about them. We going to create a movie search tool
that relies on OMDB's API.

In this lab we're going to make use of this week's
[jQuery](http://jquery.com/) lessons. The main objective will be to
search the [OMDB API](http://www.omdbapi.com/) using jQuery's AJAX
methods. A secondary objective will be to reinfornce our use of jQuery
to interact with the DOM (e.g., selecting HTML elements, adding event
listeners, and rendering new elements to the page).

Part 1
------

1. In this directory, create an `index.html` and an`app.js` file.
2. Use a `<script>` tag to load the `app.js` into `index.html`.
    * How can you determine that you're loading the file correctly?
3. We'll use jQuery for this lab, so load that into your page as
well.
    * There are several ways to load jQuery. How will you do it?
        * Do you have a Sublime snippet?
    * Note: You'll want to load jQuery _before_ you load your script
      so that jQuery is available by the time your script runs.
5. Create a `<form>` in your HTML file that contains a text input
and a submit button.
    * Add some `<label>`s if you want to keep Elie happy.
6. Use jQuery to add an event listener to handle when the form is
submitted.
    * Think about the different ways to reference your form. Does it
    need an ID, class, or neither?
    * Do you need to use
      [document.ready](http://learn.jquery.com/using-jquery-core/document-ready/)
      so you don't try to reference your form too early?
    * Listen for the `submit` event.
    * Use `event.preventDefault()` to prevent the page from
    refreshing.
6. When the submit button is clicked, search the
[OMDB API](http://www.omdbapi.com/) for movie titles containing the
search term.
    * How will you know what search term was entered?
        * Some cool ways are to use `this` or `event.target`, but
          there are other ways as well.
    * You'll need to investigate the OMDB home page to learn how to
      use its API.
    * Use one of jQuery's AJAX methods: `$.ajax()`, `$.get()`, or `$.getJSON()`.
    * You don't need to sign up for an API key, unless you want to.
    * Try using the 's' parameter to return multiple results.
7. When the list of matching movies is returned, render the movie
titles to the screen.
    * Use jQuery to construct new DOM elements for the titles and add
    them to the page.
    * A good strategy might be to have a container (e.g., a `<div>` or
    `<ul>` in your HTML file that will hold the search results.
    * You may want to clear any old results before rendering new ones.
8. If your search response does not return any results, make sure to let the user know that nothing was found! 
    * Need a search term? Why not 'zealoushacker'

Part 2: Bonus
-------------

Part 2 depends on having finished Part 1.

1. By this point, you should be rendering a list of movies to the page
based on a user search.
2. Make each movie title a link (or a button) that you can click to
   see the poster for that movie.
    * You'll need to make another AJAX request to the OMDB API to
    retrieve enough movie info to find the poster.
    * Create an `<img>` tag with jQuery and set its `src` attribute to
      be the movie poster URL.
