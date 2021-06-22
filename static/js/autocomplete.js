// ? Trigger Autocomplete Search

$(".click-me").click(function () {
  $(".drop-menu").addClass("open");
});

// # AutocompleteJS

new autoComplete({
  data: {
    // Data src [Array, Function, Async] | (REQUIRED)
    src: films,
  },
  selector: "#autoCompleteMovies", // Input field selector              | (Optional)
  threshold: 1, // Min. Chars length to start Engine | (Optional)
  debounce: 100, // Post duration for engine to start | (Optional)
  searchEngine: "strict", // Search Engine type/mode           | (Optional)
  resultsList: {
    // Rendered results list object      | (Optional)
    render: true,
    container: (source) => {
      source.setAttribute("id", "movie-list");
      source.setAttribute(
        "class",
        "drop-menu text-left suggestion-search-menu add-scroll"
      );
    },
    destination: document.querySelector("#autoCompleteMovies"),
    position: "afterend",
    element: "ul",
  },
  maxResults: 5, // Max. number of rendered results | (Optional)
  //   highlight: true, // Highlight matching results      | (Optional)
  resultItem: {
    // render: false,
    // Rendered result item            | (Optional)
    content: (data, source) => {
      source.innerHTML = `<a href="#" class="suggestion-anchor">
                    <div class="sleft">
                      <div class="media">
                        <div class="media-body">
                          <h5>${data.match}</h5>
                        </div>
                      </div>
                    </div>
                  </a>`;
    },
    element: "li",
  },
  onSelection: (feedback) => {
    // Action script onSelection event | (Optional)
    document.getElementById("autoCompleteMovies").value =
      feedback.selection.value;
  },
});
