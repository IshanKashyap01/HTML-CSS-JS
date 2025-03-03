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