let questions = [
    {
        question: `Who is the Chosen one?`,
        options: ['Master Yoda', 'Mace Windu', 'Anakin Skywalker', 'Qui Gon Jinn'],
        correct: 'Anakin Skywalker'
    },
    {
        question: `Who was Anakin Skywalker's padawan?`,
        options: ['Ahsoka Tanno', 'Cal Kestis', 'Bariss Offee', 'Caleb Dume'],
        correct: 'Ahsoka Tanno'
    },
    {
        question: `Which lightsaber form has Obi Wan Kenobi is best known for?`,
        options: ['Form I: Shi-Cho', 'Form III: Soresu', 'Form IV: Ataru', 'Form VI: Niman'],
        correct: 'Form III: Soresu'
    },
    {
        question: `After which battle did Anakin Skywalker switched his style to Form V: Shien/Djem So`,
        options: ['Battle of Geonosis', 'Battle of Ryloth', 'Battle of Muunilist', 'Battle of Christophsis'],
        correct: 'Battle of Geonosis'
    },
    {
        question: `What is the home planet of Count Dukoo?`,
        options: ['Naboo', 'Coruscant', 'Serenno', 'Corellia'],
        correct: 'Serenno'
    }
]
function shuffle(arr) 
{
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at indices i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// shuffle questions and their options
questions = shuffle(questions)
questions.forEach(question => question.options = shuffle(question.options))

// Track current index, score and total
let index = 0, score = 0, total = questions.length
// Add event listener to next button
const nextButton = document.getElementById('next')
nextButton.addEventListener('click', nextEventHandler)
// Get elements required for rendering questions
const questionElement = document.getElementById('question')
const optionsContainer = document.getElementById('options')
// update DOM to set the first question
updateDOM()

/**
 * Renders the question present at the current index of the array containing all
 * the questions
 */
function updateDOM()
{
    // If index is valid, render a question
    if(index < questions.length)
    {
        renderQuestion(questionElement, questions[index].question, index, total)
        const options = questions[index].options.map(option => createOption(option))
        renderOptions(optionsContainer, options)
    }
    // Else render the end screen
    else
    {
        renderQuestion(questionElement, '', '', '', true)
        document.getElementById('options').remove()
        nextButton.remove()
    }
    // render the current score regardless
    renderScore(document.querySelector('#score p'), score, total)
}

/**
 * Updates the HTML element supposed to display the question
 * @param {Element} questionElement element displaying the question
 * @param {String} question question to be displayed
 * @param {Number} index index of the current question
 * @param {Number} total total number of questions 
 * @param {boolean} isLast whether the question is the last
 */
function renderQuestion(questionElement, question, index, total, isLast = false)
{
    questionElement.textContent = isLast ? 'Quiz Over' : `Question ${index + 1} of ${total}: ${question}`
}

/**
 * Changes the options displayed on screen
 * @param {Element} optionsContainer HTML container for the options
 * @param {Element[]} options array of elements to display options
 */
function renderOptions(optionsContainer, options)
{
    optionsContainer.replaceChildren(...options)
}

/**
 * @param {Element} scoreElement element that displays the score on screen
 * @param {Number} score score of the player
 * @param {Number} total maximum number of score a player can achieve
 */
function renderScore(scoreElement, score, total)
{
    scoreElement.textContent = `Score: ${score} / ${total}`
}

/**
 * Returns an HTML element representing a choice for a question
 * @param {String} option a choice for the MCQ
 * @returns element to display the choice on screen
 */
function createOption(option)
{
    const optionButton = document.createElement('button')
    optionButton.classList.add('options')
    optionButton.textContent = option
    optionButton.addEventListener('click', optionSelectedEventHandler)
    return optionButton
}

/**
 * Selects the option that triggered this event handler then updates the DOM
 */
function optionSelectedEventHandler()
{
    selectOption(this.textContent)
    updateDOM()
}

/**
 * Updates the score based on the option selected by the user and increments the
 * current question index
 * @param {String} option option selected by the user
 */
function selectOption(option)
{
    score += questions[index++].correct == option ? 1 : -0.25
}

/**
 * Increments the current question index and updates the DOM
 */
function nextEventHandler()
{
    index++
    updateDOM()
}