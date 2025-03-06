import { ChartBuilder } from '../models/ChartBuilder.js'

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
}