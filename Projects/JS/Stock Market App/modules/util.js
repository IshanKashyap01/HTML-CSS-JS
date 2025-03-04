/**
 * Fetches and parses JSON data from the given URL
 * @param {String} url URL of the resource to be fetched
 * @returns `Promise` that resolves into the parsed JSON data from server
 * @throws `Error` with the response status and text as its message
 */
export async function getJSONFromServer(url)
{
    const response = await fetch(url)
    if(!response.ok)
    {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json()
}
/**
 * Creates an HTML element of the given type with the given classes and text
 * @param {String} tag name of the HTML element
 * @param {String} classList space separated list of classes
 * @param {String} textContent text inside the element
 */
export function createElement(tag, classList = '', textContent = '')
{
    const element = document.createElement(tag)
    if(classList !== '')
    {
        element.setAttribute('class', classList)
    }
    if(textContent !== '')
    {
        element.textContent = textContent
    }
    return element
}