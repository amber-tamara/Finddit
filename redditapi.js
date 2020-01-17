export default {
  search: function(searchTerm, searchLimit, sortBy) {
    fetch(`http://www.reddit.com/search.json?q=
    ${searchTerm}&sort=${searchLimit}&limit=${searchLimit}`)
      .then(res => res.json())
      .then(data => console.log(data));
    //.then(data => console.log(typeof data));
  }
};
