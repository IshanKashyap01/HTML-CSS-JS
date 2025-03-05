import { Stock } from './Stock.js'
import { StockChart } from './StockChart.js'
import { getJSONFromServer } from '../util.js'
/**
 * Array of all stocks to be displayed in the web page
 */
const STOCKS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'PYPL', 'TSLA', 'JPM', 'NVDA', 'NFLX', 'DIS']
/**
 * API link to get the data for all the charts
 * @description
 * In the current version, stock values and timestamps can be accessed as:
 * 
 * stock values: `data['stocksData'][0][stock.name][range]['value']`
 * 
 * timestamps: `data['stocksData'][0][stock.name][range]['timeStamp']`
 * 
 */
const CHARTS_DATA_API = 'https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata'
/**
 * API link to get the book value and profit for all the stocks
 * @description
 * In the current version, book value and profit can be accessed as:
 * 
 * book value: `data['stocksStatsData'][0][stock.name]['bookValue']`
 * 
 * profit: `data['stocksStatsData'][0][stock.name]['profit']`
 */
const BOOK_VALUE_AND_PROFIT_API = 'https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata'
/**
 * API link to get the summary for all stocks
 * @description
 * In the current version, stock summary can be accessed as:
 * 
 * `data['stocksProfileData'][0][stock.name]['summary']`
 */
const STOCK_SUMMARY_API = 'https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata'
/**
 * Array containing all the time periods for stock data
 */
const RANGES = ['1mo', '3mo', '1y', '5y']
/**
 * Loads stock data from the API
 */
export class StockDataLoader
{
    /**
     * Array of {@link Stock} objects
     */
    #stocks
    /**
     * Prepares a `Stock` object for each stock option in `STOCKS`
     */
    constructor()
    {
        this.#stocks = STOCKS.map((stockName) => new Stock(stockName))
    }
    get stocks()
    {
        return this.#stocks
    }
    /**
     * Loads chart data for all stocks
     */
    async loadStockCharts()
    {
        try
        {
            const data = await getJSONFromServer(CHARTS_DATA_API)
            let charts
            for(const stock of this.#stocks)
            {
                charts = new Map()
                RANGES.forEach((range) => charts.set(range, this.#createStockChart(range, data, stock.name)))
                stock.stockCharts = charts
            }
        }
        catch(error)
        {
            throw new Error(`${error.message}\nError loading graph data`)
        }
    }
    /**
     * Creates a stock chart with range, prices and timestamps
     * @param {String} range time period
     * @param {Object} data data from API
     * @param {String} name name of the company
     * @returns a stock chart
     */
    #createStockChart(range, data, name)
    {
        const chart = new StockChart(range)
        chart.prices = data['stocksData'][0][name][range]['value']
        chart.timestamps = chart.timestamps = data['stocksData'][0][name][range]['timeStamp']
        return chart
    }
    /**
     * Loads the book values and profits for all stocks
     */
    async loadBookValueAndProfits()
    {
        try
        {
            const data = await getJSONFromServer(BOOK_VALUE_AND_PROFIT_API)
            for(const stock of this.#stocks)
            {
                stock.bookValue = data['stocksStatsData'][0][stock.name]['bookValue']
                stock.profit = data['stocksStatsData'][0][stock.name]['profit']
            }
        }
        catch(error)
        {
            throw new Error(`${error.message}\nError loading book values and profits`)
        }
    }
    /**
     * Loads summary for all stocks
     */
    async loadStockSummaries()
    {
        try
        {
            const data = await getJSONFromServer(STOCK_SUMMARY_API)
            this.#stocks.forEach((stock) => stock.summary = data['stocksProfileData'][0][stock.name]['summary'])
        }
        catch(error)
        {
            throw new Error(`${error.message}\nError loading stock summaries`)
        }
    }
}