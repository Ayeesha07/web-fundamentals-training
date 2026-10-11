// Puts the current year in the footer.
// It fails if this script runs before the footer exists. Why? (Hint: <script> in the <head>)
document.getElementById("year").textContent = new Date().getFullYear();
