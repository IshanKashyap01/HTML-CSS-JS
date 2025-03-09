import { ChartBuilder } from '../services/ChartBuilder.js'

/**
 * Represents the view for the chart and range buttons
 */
export class ChartView
{
    /**
     * Canvas where the graph will be drawn
     */
    #canvas
    /**
     * Button representing the range for one month
     * @type HTMLElement
     */
    oneMonth
    /**
     * Button representing the range for three months
     * @type HTMLElement
     */
    threeMonths
    /**
     * Button representing the range for one year
     * @type HTMLElement
     */
    oneYear
    /**
     * Button representing the range for five years
     * @type HTMLElement
     */
    fiveYears
    /**
     * Chart object used to display a graph
     * @type Chart
     */
    #chart
    /**
     * Creates the view for the chart and range buttons
     */
    constructor()
    {
        this.#canvas = document.querySelector('#graph')
        this.oneMonth = document.querySelector('#one-month')
        this.threeMonths = document.querySelector('#three-months')
        this.oneYear = document.querySelector('#one-year')
        this.fiveYears = document.querySelector('#five-years')
        this.peakElement = document.querySelector('#peak')
        this.lowElement = document.querySelector('#low')
    }
    /**
     * Draws a graph on the view using the given values
     * @param {String} name name of the company
     * @param {Number[]} prices array of stock prices
     * @param {Number[]} timestamps array of timestamps
     */
    draw(name, prices, timestamps) 
    {
        if(this.#chart)
        {
            this.#chart.data.labels = timestamps
            this.#chart.data.datasets[0].data = prices
            this.#chart.options.plugins.crosshairName = name
            this.#chart.update()
        }
        else
        {
            const config = ChartBuilder.createChartConfig(name, prices, timestamps)
            this.#chart = new Chart(this.#canvas, config)
        }
    }
    /**
     * Sets the peak value of the stock and the time it happened
     * @param {Number} price price
     * @param {Number} timestamp time in ms passed since 1 Jan 1971
     */
    setPeak(price, timestamp)
    {
        this.peakElement.textContent = this.#formatPoint(price, timestamp)
    }
    /**
     * Sets the lowest value of the stock and the time it happened
     * @param {Number} price price
     * @param {Number} timestamp time in ms passed since 1 Jan 1971
     */
    setLow(price, timestamp)
    {
        this.lowElement.textContent = this.#formatPoint(price, timestamp)
    }
    /**
     * Formats the x and y value of a point in the graph to an easily readable
     * string value
     * @param {Number} price price of the stock
     * @param {Number} timestamp time in ms
     * @returns {String} formatted value of a point in the stock graph
     */
    #formatPoint(price, timestamp)
    {
        return `$${price.toFixed(2)} @ ${new Date(timestamp * 1000).toLocaleDateString()}`
    }
}