// Function to load external components like header, footer, etc.
function loadComponent(elementId, filePath) {
    // Fetch the HTML content from the file path
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          // If the response is not OK, throw an error
          throw new Error(`Failed to load component from ${filePath}`);
        }
        return response.text(); // Return the response as text
      })
      .then(data => {
        // Insert the fetched HTML content into the specified element
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(`Error loading component: ${error}`));
  }
  
  // Event listener to ensure components load after the DOM is ready
  document.addEventListener("DOMContentLoaded", function() {
    // Load header and footer components
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
  
    // Add more components as needed, for example:
    // loadComponent('head', '/components/head.html');
    // loadComponent('sidebar', '/components/sidebar.html');
  });
  