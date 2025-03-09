/*
Welcome to the Question Viewer App!

Your task is to implement the following functions:

1. fetchRandomQuestion(): This function is already implemented. It fetches a random question from the API and displays it.

2. startQuestionRotation(): Implement the logic to start rotating questions.
   - Call fetchRandomQuestion() initially to show the first question.
   - Set up an interval to fetch a new question every few seconds.

3. stopQuestions(): Implement the logic to stop the question rotation.
   - Clear the interval.
   - Update the UI to show that questions have stopped.

4. Add event listeners when the DOM is fully loaded:
   - Set up the stop button functionality.

Remember:
- Handle any errors and edge cases in your implementation.
- Use the questionRotationInterval variable to store the interval.
- Update the UI appropriately when starting and stopping the rotation.

Good luck! You've got this!
*/
let questionRotationInterval, questionDisplay = document.querySelector('.question-container p.question')

document.addEventListener('DOMContentLoaded', function() {
    // Add necessary event listeners here
    startQuestionRotation()
    document.querySelector('.stop-button').addEventListener('click', function(){
        stopQuestions()
        questionDisplay.textContent = 'Questions stopped.'
        this.classList.add('stopped')
        this.textContent = 'Stopped'
        this.disabled = true
    })
});

function fetchRandomQuestion() {
    fetch("https://the-trivia-api.com/api/questions?limit=1")
        .then(response => response.json())
        .then(data => {
            const question = data[0].question;
            questionDisplay.innerHTML = question;
        })
        .catch(error => console.error('Error fetching question:', error));
}

function startQuestionRotation() {
    // Implement the logic to start rotating questions
    fetchRandomQuestion()
    questionRotationInterval = setInterval(fetchRandomQuestion, 5000)
}

function stopQuestions() {
    // Implement the logic to stop the question rotation
    clearInterval(questionRotationInterval)
}
