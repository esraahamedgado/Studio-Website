function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function updateClock() {
  var currentDate = new Date();
  var dateString = currentDate.toDateString();
  var timeString = currentDate.toLocaleTimeString();

  document.getElementById("date").innerHTML = dateString;
  document.getElementById("time").innerHTML = timeString;
}
setInterval(updateClock, 1000); // Update every 1 second

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === "block";
    document
      .querySelectorAll(".answer")
      .forEach((a) => (a.style.display = "none")); // Collapse other answers
    answer.style.display = isVisible ? "none" : "block";
  });
});
