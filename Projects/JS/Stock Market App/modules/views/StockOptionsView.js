import { createElement } from '../util.js'

/**
 * Represents the View for the list of stock options
 */
export class StockOptionsView
{
    /**
     * HTML element that contains all the stock options
     */
    #stockListContainer
    /**
     * Array of all HTML elements representing a stock option which can be
     * clicked to view its details
     * @type HTMLElement[]
     */
    #stockOptions
    constructor()
    {
        this.#stockListContainer = document.querySelector('.stock-list')
        this.#stockOptions = []
    }
    /**
     * Adds a stock option to the GUI
     * @param {String} name name of the company
     * @param {Number} bookValue book value of the stock
     * @param {Number} profit profit percent of the stock
     */
    addStockOption(name, bookValue, profit)
    {
        const stockNameElement = createElement('button', 'stock', name)
        const bookValueElement = createElement('span', '', `$${bookValue}`)
        const profitElement = createElement('span', profit > 0 ? 'profit' : 'loss', `${profit.toFixed(2)}%`)

        this.#stockListContainer.append(stockNameElement, bookValueElement, profitElement)

        this.#stockOptions.push(stockNameElement)
    }
    get stockOptions()
    {
        return [...this.#stockOptions]
    }
}