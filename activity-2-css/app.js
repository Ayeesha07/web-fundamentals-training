// Puts the current year in the footer.
// Loaded with "defer", so the footer exists by the time this runs.
document.getElementById("year").textContent = new Date().getFullYear();
