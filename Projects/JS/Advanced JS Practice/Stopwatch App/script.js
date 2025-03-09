// In this file, you'll implement the functionality for your stopwatch.
// Here's a general outline of what you need to do:

// 1. Create variables to keep track of the stopwatch state
//    (e.g., time, isRunning, interval)

// 2. Implement functions to:
//    - Start the stopwatch
//    - Stop the stopwatch
//    - Reset the stopwatch
//    - Update the display

// 3. Add event listeners to the buttons to trigger the appropriate functions

// 4. Create a function to format the time (convert milliseconds to MM:SS:MsMs i.e 00:00:00 format)

// Remember to use clear and descriptive variable names, and add comments to explain your code.
// Good luck, and happy coding!
main()

function main()
{
    let time = 0, intervalID, start
    const timeDisplay = document.querySelector('#display')
    document.querySelector('#startBtn').addEventListener('click', function(){
        const start = Date.now() - time
        clearInterval(intervalID)
        intervalID = setInterval(function(){
            time = Date.now() - start
            updateTime(timeDisplay, time)
        }, 10)
    })
    document.querySelector('#stopBtn').addEventListener('click', () => clearInterval(intervalID))
    document.querySelector('#resetBtn').addEventListener('click', () => {
        time = 0
        clearInterval(intervalID)
        updateTime(timeDisplay, time)
    })
}

function updateTime(timeDisplay, time)
{
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    const milliseconds = Math.floor((time % 1000) / 10) // Get two-digit milliseconds

    const mm = String(minutes).padStart(2, '0')
    const ss = String(seconds).padStart(2, '0')
    const ms = String(milliseconds).padStart(2, '0')
    timeDisplay.textContent = `${mm}:${ss}:${ms}`
}