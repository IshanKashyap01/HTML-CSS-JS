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
     * 
     * @param {String} range number of months or years
     */
    constructor(range)
    {
        this.#range = range
        this.#prices = []
        this.#timestamps = []
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
        }
    }
    get range()
    {
        return this.#range
    }
}