/**
 * Represents a price vs time graph of a stock
 */
export class StockChart
{
    /**
     * Time period of the chart in number of months or years
     */
    #range
    /**
     * Array of stock prices within a period
     */
    #prices
    /**
     * Array of corresponding timestamps
     */
    #timestamps
    /**
     * Highest point in the graph
     * @type {{price: Number, time: Number}}
     */
    #peak
    /**
     * Lowest point in the graph
     * @type {{price: Number, time: Number}}
     */
    #low
    /**
     * 
     * @param {String} range number of months or years
     */
    constructor(range)
    {
        this.#range = range
        this.#prices = []
        this.#timestamps = []
        this.#peak = {
            price: null,
            time: null
        }
        this.#low = {
            price: null,
            time: null
        }
    }
    get prices()
    {
        return this.#prices
    }
    set prices(values)
    {
        if(Array.isArray(values) && values.length != 0)
        {
            this.#prices = values
            this.#peak.price = Math.max(...values)
            this.#low.price = Math.min(...values)
        }
    }
    get timestamps()
    {
        return this.#timestamps
    }
    set timestamps(timestamps)
    {
        if(Array.isArray(timestamps) && timestamps.length != 0)
        {
            this.#timestamps = timestamps
            this.#peak.time = Math.max(...timestamps)
            this.#low.time = Math.min(...timestamps)
        }
    }
    get range()
    {
        return this.#range
    }
    get peak()
    {
        return this.#peak
    }
    get low()
    {
        return this.#low
    }
}