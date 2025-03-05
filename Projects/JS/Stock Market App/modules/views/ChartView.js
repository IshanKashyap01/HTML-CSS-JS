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
    constructor()
    {
        this.#canvas = document.querySelector('#graph')
        this.oneMonth = document.querySelector('#one-month')
        this.threeMonths = document.querySelector('#three-months')
        this.oneYear = document.querySelector('#one-year')
        this.fiveYears = document.querySelector('#five-years')
    }
    draw(name, prices, timestamps) 
    {
        new Chart(this.#canvas, ChartBuilder.createChartConfig(name, prices, timestamps))
    }
}