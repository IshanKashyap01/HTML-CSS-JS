import { StockDataLoader } from './modules/services/StockDataLoader.js'
import { ChartView } from './modules/views/ChartView.js'
import { StockOptionsView } from './modules/views/StockOptionsView.js'
import { StockSummaryView } from './modules/views/StockSummaryView.js'
import { ChartController } from './modules/controllers/ChartController.js'
import { StockOptionsController } from './modules/controllers/StockOptionsController.js'
import { StockSummaryController } from './modules/controllers/StockSummaryController.js'

main()
/**
 * Entry point to the Stock Market App
 */
const DEFAULT_RANGE = '1mo'

async function main()
{
    // Fetch all the data
    const loader = new StockDataLoader()
    await Promise.all([
        loader.loadBookValueAndProfits(),
        loader.loadStockSummaries(),
        loader.loadStockCharts()
    ])
    const stocks = loader.stocks
    // Initialize the views and controllers
    new StockOptionsController(
        stocks, new StockOptionsView(), new StockSummaryController(new StockSummaryView()),
        new ChartController(new ChartView(), DEFAULT_RANGE)
    )
    // Load the first stock option available on screen
    document.querySelector('.stock').click()
}