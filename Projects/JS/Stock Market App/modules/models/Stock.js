import { StockChart } from './StockChart.js'
/**
 * Represents a stock
 */
export class Stock
{
    /**
     * Name of the company
     */
    #name
    /**
     * Book value of the stock
     * @type Number
     */
    #bookValue
    /**
     * Profit of the stock in percentages
     * @type Number
     */
    #profit
    /**
     * Summary of the company
     * @type String
     */
    #summary
    /**
     * array of stock value vs timestamp data of the stock's history
     * @type Map<String, StockChart>
     */
    #stockCharts
    /**
     * 
     * @param {String} name name of the company
     */
    constructor(name)
    {
        this.#name = name
        this.#stockCharts = new Map()
    }
    get name()
    {
        return this.#name
    }
    get bookValue()
    {
        return this.#bookValue
    }
    set bookValue(value)
    {
        if(value > 0)
        {
            this.#bookValue = value
        }
    }
    get profit()
    {
        return this.#profit
    }
    set profit(profit)
    {
        this.#profit = Math.round(profit * 100) / 100
    }
    get summary()
    {
        return this.#summary
    }
    set summary(summary)
    {
        this.#summary = summary ? summary : ''
    }
    get stockCharts()
    {
        return this.#stockCharts
    }
    set stockCharts(charts)
    {
        this.#stockCharts = charts
    }
}