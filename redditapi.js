export default {
  search: function(searchTerm, searchLimit, sortBy) {
    return fetch(`http://www.reddit.com/search.json?q=
    ${searchTerm}&sort=${searchLimit}&limit=${searchLimit}`)
      .then(res => res.json())
      .then(data => data.data.children.map(data => data.data))
      .catch(err => console.log(err));
  }
};
