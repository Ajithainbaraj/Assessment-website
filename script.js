function startAssessment() {
  document.getElementById("quiz-container").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = {
      q1: "HyperText Markup Language",
      q2: "<br>",
      q3: "JavaScript",
      q4: "Cascading Style Sheets",
      q5: "React"
    };

    let score = 0;
    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }

    let level = "";
    let course = "";

    if (score <= 2) {
      level = "🟠 Your Level: Basic";
      course = "📘 Suggested Course: Beginner HTML & Web Basics";
    } else if (score <= 4) {
      level = "🔵 Your Level: Intermediate";
      course = "📗 Suggested Course: Responsive Web Design with CSS";
    } else {
      level = "🟢 Your Level: Advanced";
      course = "📕 Suggested Course: JavaScript Projects & React Basics";
    }

    document.getElementById("result").innerHTML = `
      You scored <strong>${score}</strong> out of 5<br>
      ${level}<br>
      ${course}
    `;
  });
});
