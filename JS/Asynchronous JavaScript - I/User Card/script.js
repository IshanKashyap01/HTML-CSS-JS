const cardContainer = document.querySelector('.card-container')
const request = new XMLHttpRequest()

request.open('GET', 'https://dummyjson.com/users')
request.responseType = 'json'
request.send()
request.addEventListener('load', loadUser)

function loadUser()
{
    const users = this.response.users.map(user => createUser(user))
    cardContainer.append(...users)
}

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

function createElement(tag, textContent, classlist = '')
{
    const element = document.createElement(tag)
    element.textContent = textContent
    element.className = classlist

    return element
}
