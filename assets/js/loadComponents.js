document.addEventListener("DOMContentLoaded", function() {
    // Load header component
    console.log("Attempting to load header...");
    loadComponent('header', '/components/header.html');
  
    // Load footer component
    console.log("Attempting to load footer...");
    loadComponent('footer', '/components/footer.html');
  });
  
  function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then(response => {
        console.log(`Fetching ${filePath}...`);
        if (!response.ok) {
          console.error(`Failed to load ${filePath}: ${response.statusText}`);
          return;
        }
        return response.text();
      })
      .then(data => {
        if (data) {
          document.getElementById(elementId).innerHTML = data;
          console.log(`${elementId} loaded successfully`);
        } else {
          console.error(`No data found for ${filePath}`);
        }
      })
      .catch(error => console.error(`Error loading ${filePath}: ${error}`));
  }
  