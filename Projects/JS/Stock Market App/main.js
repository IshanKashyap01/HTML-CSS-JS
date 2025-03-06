import { StockDataLoader } from './modules/services/StockDataLoader.js'
import { ChartView } from './modules/views/ChartView.js'
import { StockOptionsView } from './modules/views/StockOptionsView.js'
import { StockSummaryView } from './modules/views/StockSummaryView.js'
import { ChartController } from './modules/controllers/ChartController.js'
import { StockOptionsController } from './modules/controllers/StockOptionsController.js'
import { StockSummaryController } from './modules/controllers/StockSummaryController.js'

main()

async function main()
{
    const loader = new StockDataLoader()
    await Promise.all([
        loader.loadBookValueAndProfits(),
        loader.loadStockSummaries(),
        loader.loadStockCharts()
    ])
    const stocks = loader.stocks
    const stock = stocks.get('AAPL')
    const optionsController = new StockOptionsController(
        stocks, new StockOptionsView(), new StockSummaryController(new StockSummaryView()),
        new ChartController(new ChartView(), stock, '1mo')
    )
    optionsController.stock = stock
}