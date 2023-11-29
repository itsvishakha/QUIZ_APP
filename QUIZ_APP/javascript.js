
        const questions = [
            {
                question: "Which is the largest animal in the world?",
                answer: [
                    { text: "Shark", correct: false },
                    { text: "Blue whale", correct: true },
                    { text: "Elephant", correct: false },
                    { text: "Giraffe", correct: false },
                ]
            },
            {
                question: "Which is the smallest continent in the world?",
                answer: [
                    { text: "Asia", correct: false },
                    { text: "Australia", correct: true },
                    { text: "Arctic", correct: false },
                    { text: "Africa", correct: false },
                ]
            },
            {
                question: "Which is the smallest continent in the world?",
                answer: [
                    { text: "Asia", correct: false },
                    { text: "Australia", correct: true },
                    { text: "Arctic", correct: false },
                    { text: "Africa", correct: false },
                ]
            },
            {
                question: "Which is the largest desert in the world?",
                answer: [
                    { text: "Kalahari", correct: false },
                    { text: "Gobi", correct: false },
                    { text: "Sahara", correct: false },
                    { text: "Antarctica", correct: true },
                ]
            },
            {
                question: "Which is the smallest country in the world?",
                answer: [
                    { text: "Vatican", correct: true },
                    { text: "Bhutan", correct: false },
                    { text: "Nepal", correct: false },
                    { text: "Sri Lanka", correct: false },
                ]
            }
        ];

        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");
        const resetButton = document.getElementById("reset-btn"); // Added line
        
        let currentQuestionIndex = 0;
        let score = 0;
        
        nextButton.addEventListener("click", showNextQuestion);
        resetButton.addEventListener("click", resetQuiz); // Added line
        
        function showNextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                alert("Quiz completed! Your score: " + score);
                // You might want to reset the quiz or redirect the user to another page at this point
            }
        }
        
        function startQuiz() {
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }
        
        function showQuestion() {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
        
            currentQuestion.answer.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
        }
        
        function resetState() {
            nextButton.style.display = "none";
            resetButton.style.display = "none"; // Added line
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
        
        function selectAnswer(e) {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
            resetButton.style.display = "block"; // Added line
        }
        
        function resetQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            startQuiz();
        }
        
        startQuiz();
        