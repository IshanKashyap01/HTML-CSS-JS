// HTML container element that contains all the user cards
const cardContainer = document.querySelector('.card-container')
// XMLHTTPRequest to get data from the server
const request = new XMLHttpRequest()
request.open('GET', 'https://dummyjson.com/users')
request.responseType = 'json'
request.send()
request.addEventListener('load', () => loadUsers(request.response.users))

/**
 * Renders user profile cards
 * @param {Object[]} users Array of users
 */
function loadUsers(users)
{
    const userElements = users.map(user => createUser(user))
    cardContainer.append(...userElements)
}

/**
 * Creates a user profile card
 * @param {Object} user an object representing a user
 * @returns HTML element representing a user profile card
 */
function createUser(user)
{
    const userCard = createElement('div', '', 'user-card')
    // Profile picture
    const pic = document.createElement('img')
    pic.src = user.image
    pic.alt = user.firstName + ' ' + user.lastName
    // First name
    const firstName = createElement('h3', user.firstName)
    // Last name
    const lastName = createElement('h3', user.lastName)
    // Email address
    const email = createElement('p', user.email, 'email')
    // View Profile button
    const viewProfile = createElement('button', 'View Profile', 'btn')
    // Append all elements and return the card
    userCard.append(pic, firstName, lastName, email, viewProfile)
    return userCard
}

/**
 * Creates an HTML element of the given type, with the given text and class(es)
 * @param {String} tag name of the element
 * @param {String} textContent text content of the element
 * @param {String} classlist space-separated class list
 * @returns HTML element
 */
function createElement(tag, textContent, classlist = '')
{
    const element = document.createElement(tag)
    element.textContent = textContent
    element.className = classlist

    return element
}
