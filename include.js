/**
 * Component Loader Script
 * Dynamically fetches and inserts shared header and footer HTML components.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("header.html")
      .then((response) => {
        if (!response.ok) throw new Error("Header fetch failed");
        return response.text();
      })
      .then((data) => {
        headerPlaceholder.innerHTML = data;
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) throw new Error("Footer fetch failed");
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
});