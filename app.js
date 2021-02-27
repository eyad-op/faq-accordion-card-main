/* const question = document.getElementsByClassName("question");

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
} */

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const activeQuestion = document.querySelector(".answer.active");
    if (activeQuestion && activeQuestion !== answer) {
      activeQuestion.nextElementSibling.style = "display: none";
    }

    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style = answer.style = "display: block";
    } else {
      answer.style = "display: none";
    }
  });
});
