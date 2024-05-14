document.addEventListener("DOMContentLoaded", function() {
  const addQuestionBtn = document.getElementById("addQuestionBtn");
  const questionsContainer = document.getElementById("questionsContainer");
  let questionCount = 0;

  addQuestionBtn.addEventListener("click", function() {
    questionCount++;

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionLabel = document.createElement("label");
    questionLabel.textContent = "Question " + questionCount + ":";

    const questionInput = document.createElement("textarea");
    questionInput.setAttribute("name", "question" + questionCount);
    questionInput.setAttribute("placeholder", "Enter your question");

    questionDiv.appendChild(questionLabel);
    questionDiv.appendChild(questionInput);

    const optionLabels = ["a", "b", "c", "d"];

    // Create option inputs (a, b, c, d)
    for (let i = 0; i < 4; i++) {
      const optionLabel = document.createElement("label");
      optionLabel.textContent = "Option " + optionLabels[i] + ":";

      const optionInput = document.createElement("input");
      optionInput.setAttribute("type", "text");
      optionInput.setAttribute("name", "option" + questionCount + optionLabels[i]);

      questionDiv.appendChild(optionLabel);
      questionDiv.appendChild(optionInput);
    }

    const correctAnswerLabel = document.createElement("label");
    correctAnswerLabel.textContent = "Correct Answer:";

    const correctAnswerSelect = document.createElement("select");
    correctAnswerSelect.setAttribute("name", "correctAnswer" + questionCount);

    for (let i = 0; i < 4; i++) {
      const option = document.createElement("option");
      option.value = optionLabels[i];
      option.textContent = optionLabels[i].toUpperCase();
      correctAnswerSelect.appendChild(option);
    }

    questionDiv.appendChild(correctAnswerLabel);
    questionDiv.appendChild(correctAnswerSelect);

    questionsContainer.appendChild(questionDiv);

    
  });

});
document.addEventListener("DOMContentLoaded", function() {
  var examForm = document.getElementById("examForm");
  
  // Add event listener for form submission
  examForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Show popup message
    alert("Exam created successfully!");
    
    // You can add further functionality here, like sending the form data to a server via AJAX
    
    // Reset the form if needed
    examForm.reset();
  });
});
