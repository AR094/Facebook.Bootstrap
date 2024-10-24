const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // Logic for search or redirection can be placed here
    console.log('Search for:', searchInput.value);
  }
});
