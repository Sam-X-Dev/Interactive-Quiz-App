const quizData = [
  {
    question: "1. What is the full form of HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2. What is CSS used for?",
    options: [
      "Page structure",
      "Styling web pages",
      "Database management",
      "Server management"
    ],
    answer: "Styling web pages"
  },
  {
    question: "3. What type of language is JavaScript?",
    options: [
      "Programming Language",
      "Markup Language",
      "Database Language",
      "Operating System"
    ],
    answer: "Programming Language"
  },
  {
    question: "4. What is React?",
    options: [
      "A Database",
      "A JavaScript Library",
      "A CSS Framework",
      "A Server"
    ],
    answer: "A JavaScript Library"
  },
  {
    question: "5. What is the full form of DBMS?",
    options: [
      "Database Management System",
      "Data Basic Management System",
      "Database Main Server",
      "Data Backup System"
    ],
    answer: "Database Management System"
  },
  {
    question: "6. What is SQL used for?",
    options: [
      "Styling web pages",
      "Querying databases",
      "Creating animations",
      "Editing images"
    ],
    answer: "Querying databases"
  },
  {
    question: "7. What is the full form of API?",
    options: [
      "Application Programming Interface",
      "App Program Input",
      "Advanced Program Internet",
      "Application Page Interface"
    ],
    answer: "Application Programming Interface"
  },
  {
    question: "8. Where does Node.js mainly run?",
    options: [
      "Only in browser",
      "On the server side",
      "Only in database",
      "Inside CSS file"
    ],
    answer: "On the server side"
  },
  {
    question: "9. What is the use of a Primary Key?",
    options: [
      "To store duplicate data",
      "To uniquely identify a record",
      "To change page color",
      "To reload a page"
    ],
    answer: "To uniquely identify a record"
  },
  {
    question: "10. What does a Foreign Key do?",
    options: [
      "Connects two tables",
      "Applies CSS",
      "Runs a loop",
      "Loads an image"
    ],
    answer: "Connects two tables"
  },
  {
    question: "11. What is Git used for?",
    options: [
      "Version Control",
      "Database Management",
      "Styling",
      "Hosting only"
    ],
    answer: "Version Control"
  },
  {
    question: "12. What is the full form of HTTP?",
    options: [
      "Hyper Text Transfer Protocol",
      "High Text Transfer Program",
      "Hyper Tool Transfer Page",
      "Home Text Transfer Protocol"
    ],
    answer: "Hyper Text Transfer Protocol"
  },
  {
    question: "13. What is the main work of frontend development?",
    options: [
      "Creating User Interface",
      "Handling server logic",
      "Managing database backup",
      "Creating operating system"
    ],
    answer: "Creating User Interface"
  },
  {
    question: "14. What is the main work of backend development?",
    options: [
      "Handling server logic",
      "Changing colors only",
      "Writing HTML only",
      "Editing images only"
    ],
    answer: "Handling server logic"
  },
  {
    question: "15. What type of database is MongoDB?",
    options: [
      "NoSQL",
      "SQL",
      "CSS",
      "HTML"
    ],
    answer: "NoSQL"
  },
  {
    question: "16. What does scalability mean in system design?",
    options: [
      "A system can handle increased load",
      "Changing button color",
      "Creating a button",
      "Compressing images"
    ],
    answer: "A system can handle increased load"
  },
  {
    question: "17. What is the work of a Load Balancer?",
    options: [
      "Distributing traffic",
      "Writing HTML",
      "Removing CSS",
      "Deleting data"
    ],
    answer: "Distributing traffic"
  },
  {
    question: "18. Why is cache used?",
    options: [
      "For fast data access",
      "To make website slow",
      "To delete code",
      "To destroy database"
    ],
    answer: "For fast data access"
  },
  {
    question: "19. What does authentication mean?",
    options: [
      "Verifying user identity",
      "Setting color",
      "Changing font",
      "Cropping image"
    ],
    answer: "Verifying user identity"
  },
  {
    question: "20. What is the use of GET method in REST API?",
    options: [
      "To fetch data",
      "To delete data only",
      "To apply CSS",
      "To design a page"
    ],
    answer: "To fetch data"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function startQuiz() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");
  document.getElementById("resultPage").classList.add("hidden");

  currentQuestion = 0;
  score = 0;
  selectedAnswer = "";

  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = "";

  const questionCount = document.getElementById("questionCount");
  const question = document.getElementById("question");
  const optionsBox = document.getElementById("options");
  const progressFill = document.getElementById("progressFill");

  questionCount.innerText = `${currentQuestion + 1} / ${quizData.length}`;
  question.innerText = quizData[currentQuestion].question;

  const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
  progressFill.style.width = progressPercent + "%";

  optionsBox.innerHTML = "";

  quizData[currentQuestion].options.forEach(function(option) {
    const button = document.createElement("button");

    button.innerText = option;
    button.className = "option-btn";

    button.onclick = function() {
      selectOption(button, option);
    };

    optionsBox.appendChild(button);
  });
}

function selectOption(button, option) {
  selectedAnswer = option;

  const allOptions = document.querySelectorAll(".option-btn");

  allOptions.forEach(function(btn) {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function nextQuestion() {
  if (selectedAnswer === "") {
    alert("Please select an answer first");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const totalQuestions = quizData.length;
  const totalMarks = 20;
  const correct = score;
  const wrong = totalQuestions - correct;
  const percentage = (correct / totalQuestions) * 100;

  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("resultPage").classList.remove("hidden");

  document.getElementById("totalMarks").innerText = totalMarks;
  document.getElementById("correctAnswers").innerText = correct;
  document.getElementById("wrongAnswers").innerText = wrong;
  document.getElementById("percentage").innerText = percentage.toFixed(0) + "%";

  document.getElementById("scoreText").innerText =
    `Marks: ${correct} / ${totalMarks}`;

  let message = "";

  if (percentage >= 80) {
    message = "Excellent! Great performance 🚀";
  } else if (percentage >= 60) {
    message = "Good! Keep practicing 👍";
  } else if (percentage >= 40) {
    message = "Average. You need to revise the concepts.";
  } else {
    message = "Needs improvement. Practice daily.";
  }

  document.getElementById("resultMessage").innerText = message;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = "";

  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}
