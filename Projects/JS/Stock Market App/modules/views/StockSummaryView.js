/**
 * Represents the view for the stock summary
 */
export class StockSummaryView
{
    /**
     * HTML element displaying the name
     */
    #nameElement
    /**
     * HTML element displaying the profit percent
     */
    #profitElement
    /**
     * HTML element displaying the book value
     */
    #bookValueElement
    /**
     * HTML element displaying the stock summary
     */
    #summaryElement
    constructor()
    {
        this.#nameElement = document.querySelector('#name')
        this.#profitElement = document.querySelector('#profit')
        this.#bookValueElement = document.querySelector('#book-value')
        this.#summaryElement = document.querySelector('#summary')
    }
    /**
     * Displays the given name, profit, book value and summary of a stock on
     * the GUI
     * @param {String} name Name of the company
     * @param {Number} profit profit percent of the stock
     * @param {Number} bookValue price of the stock
     * @param {String} summary a summary of the company
     */
    setValues(name, profit, bookValue, summary)
    {
        this.#nameElement.textContent = name
        this.#profitElement.textContent = `${profit.toFixed(2)}%`
        this.#profitElement.className = profit > 0 ? 'profit' : 'loss'
        this.#bookValueElement.textContent = `$${bookValue}`
        this.#summaryElement.textContent = summary
    }
}