import { Stock } from '../models/Stock.js'
import { StockSummaryView } from '../views/StockSummaryView.js'

/**
 * Updates the stock summary view
 */
export class StockSummaryController
{
    /**
     * View for stock summary
     * @type StockSummaryView
     */
    #stockSummaryView
    constructor(stockSummaryView)
    {
        this.#stockSummaryView = stockSummaryView
    }
    /**
     * Updates the view for stock summary
     * @param {Stock} stock stock to be displayed
     */
    updateStockSummary(stock)
    {
        this.#stockSummaryView.setValues(
            stock.name, stock.profit, stock.bookValue, stock.summary
        )
    }
}