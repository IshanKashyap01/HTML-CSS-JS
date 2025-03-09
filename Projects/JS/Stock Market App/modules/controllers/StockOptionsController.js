import { Stock } from '../models/Stock.js'
import { StockOptionsView } from '../views/StockOptionsView.js'
import { StockSummaryController } from './StockSummaryController.js'
import { ChartController } from './ChartController.js'
/**
 * Controller for the stock options view
 */
export class StockOptionsController
{
    /**
     * Map of stock objects
     * @type Map<String, Stock>
     */
    #stocks
    /**
     * Currently selected and displayed stock
     * @type Stock
     */
    #stock
    /**
     * View for stock options
     * @type StockOptionsView
     */
    #stockOptionsView
    /**
     * Controller for stock summary
     * @type StockSummaryController
     */
    #stockSummaryController
    /**
     * Controller for the chart view
     * @type ChartController
     */
    #chartController
    /**
     * Creates the controller for stock options view
     * @param {Map<String, Stock>} stocks list of stock options
     * @param {StockOptionsView} StockOptionsView view for stock options
     * @param {StockSummaryController} StockSummaryController controller for stock summary view
     * @param {ChartController} ChartController controller for chart view
     */
    constructor(stocks, stockOptionsView, stockSummaryController, chartController)
    {
        this.#stocks = stocks
        this.#stockOptionsView = stockOptionsView
        this.#stockSummaryController = stockSummaryController
        this.#chartController = chartController
        this.#setUpButtons()
        this.#addEventListeners()
    }
    /**
     * @param {Stock} stock stock object
     */
    set stock(stock)
    {
        this.#stock = stock
        this.#updateControllers()
    }
    /**
     * Add a stock option to the stock option view for each stock available
     */
    #setUpButtons()
    {
        this.#stocks.forEach((stock) => {
            this.#stockOptionsView.addStockOption(stock.name, stock.bookValue, stock.profit)
        })
    }
    /**
     * Notifies the summary and chart controllers of a change in the
     * current stock
     */
    #updateControllers()
    {
        this.#stockSummaryController.updateStockSummary(this.#stock)
        this.#chartController.stock = this.#stock
    }
    #addEventListeners()
    {
        this.#stockOptionsView.stockOptions.forEach((option) => {
            const name = option.textContent
            option.addEventListener('click', () => this.stock = this.#stocks.get(name))
        })
    }
}