import { Stock } from '../models/Stock.js'
import { ChartView } from '../views/ChartView.js'
/**
 * Updates the view for stock chart
 * @description
 * Keeps track of the current range and stock option selected. If the current
 * range or stock is changed, it automatically updates the view 
 */
export class ChartController
{
    /**
     * View for the stock chart
     * @type ChartView
     */
    #chartView
    /**
     * Currently selected range
     * @type String
     */
    #currentRange
    /**
     * Stock whose charts are to be displayed
     * @type Stock
     */
    #stock
    /**
     * Creates the controller for the chart view
     * @param {ChartView} ChartView view for chart
     * @param {String} range time period or range of chart to be displayed by
     * default
     */
    constructor(ChartView, range)
    {
        this.#chartView = ChartView
        this.#currentRange = range
        this.#addEventListeners()
    }
    /**
     * @param {String} range
     */
    set currentRange(range)
    {
        this.#currentRange = range
        this.updateChart()
    }
    /**
     * @param {Stock} stock
     */
    set stock(stock)
    {
        this.#stock = stock
        this.updateChart()
    }
    /**
     * Adds event listeners to range buttons of the chart view
     */
    #addEventListeners()
    {
        this.#chartView.oneMonth.addEventListener('click', () => this.currentRange = '1mo')
        this.#chartView.threeMonths.addEventListener('click', () => this.currentRange = '3mo')
        this.#chartView.oneYear.addEventListener('click', () => this.currentRange = '1y')
        this.#chartView.fiveYears.addEventListener('click', () => this.currentRange = '5y')
    }
    /**
     * Updates the chart view to display the graph corresponding the current
     * range of the stock
     */
    updateChart()
    {
        const chart = this.#stock.stockCharts.get(this.#currentRange)
        this.#chartView.draw(this.#stock.name, chart.prices, chart.timestamps)
        this.#chartView.setPeak(chart.peak.price, chart.peak.time)
        this.#chartView.setLow(chart.low.price, chart.low.time)
    }
}