/**
 * Builds Chart.js configuration
 */
export class ChartBuilder
{
    static createChartConfig(name, prices, timestamps) 
    {
        return{
            type: 'line',
            data: this.#getChartData(prices, timestamps),
            options: this.#getChartOptions(),
            plugins: this.#getChartPlugins(name) 
        }
    }
    /**
     * Creates options for chart
     * @returns chart options
     */
    static #getChartOptions()
    {
        return {
            plugins: {
                legend: {display: false},
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'transparent',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    displayColors: false,
                    callbacks: {
                        label: () => '',
                        title: () => ''
                    }
                }
            },
            interaction: {
                mode: 'index',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {ticks: {display: false}},
                y: {ticks: {display: false}, grid: {display: false}}
            },
            elements: {line: {borderWidth: 2}},
            hover: {mode: 'index', intersect: false}
        }
    }
    /**
     * Creates data for chart
     * @param {Number[]} prices array of prices
     * @param {Number[]} timestamps array of timestamps
     * @returns chart data
     */
    static #getChartData(prices, timestamps)
    {
        return {
            labels: timestamps,
            datasets: [
                {
                    data: prices,
                    borderColor: '#90ee90',
                    tension: 0.1,
                    pointRadius: 0
                }
            ]
        }
    }
    /**
     * Creates plugins for the chart
     * @param {String} name name of the company
     * @returns plugins for chart
     */
    static #getChartPlugins(name)
    {
        return [{
            id: 'crosshair',
            afterInit: (chart) => this.#setupEventListeners(chart),
            afterDraw: (chart) => this.#drawCrosshair(chart, name)
        }]
    }
    /**
     * Sets up event listeners for mouse interactions on the chart.
     */
    static #setupEventListeners(chart)
    {
        chart.customCursor = { x: null, y: null, active: false };
        chart.canvas.addEventListener('mousemove', (event) =>
        {
            const rect = chart.canvas.getBoundingClientRect();
            chart.customCursor.x = event.clientX - rect.left;
            chart.customCursor.y = event.clientY - rect.top;
            chart.customCursor.active = true;
            chart.draw();
        });

        chart.canvas.addEventListener('mouseleave', () =>
        {
            chart.customCursor.active = false;
            chart.draw();
        });
    }
    /**
     * Draws the vertical crosshair and displays stock info beside the cursor.
     */
    static #drawCrosshair(chart, name)
    {
        const cursor = chart.customCursor;
        if (!cursor.active) return;

        const ctx = chart.ctx;
        const { x, y: yCursor } = cursor;
        const { bottom: bottomY } = chart.scales.y;

        ctx.save();
        this.#drawVerticalLine(ctx, x, chart.scales.y.top, bottomY);
        
        // Find closest data point
        const { priceAtCursor, dateLabel } = this.#getClosestDataPoint(chart, x);

        this.#drawPriceLabel(ctx, name, x, yCursor, priceAtCursor, chart.width);
        this.#drawDateLabel(ctx, x, bottomY, dateLabel);
        
        ctx.restore();
    }
    /**
     * Finds the closest data point to the cursor.
     */
    static #getClosestDataPoint(chart, x)
    {
        const { data } = chart.data.datasets[0];
        const { labels } = chart.data;
        const xScale = chart.scales.x;
        let closestIndex = 0;
        let minDistance = Infinity;
        for (let i = 0; i < labels.length; i++)
        {
            const pixelX = xScale.getPixelForValue(i);
            const distance = Math.abs(pixelX - x);

            if (distance < minDistance)
            {
                minDistance = distance;
                closestIndex = i;
            }
        }
        return {
            priceAtCursor: data[closestIndex].toFixed(2),
            dateLabel: new Date(labels[closestIndex] * 1000).toLocaleDateString()
        };
    }
    /**
     * Draws a vertical crosshair line at the given X position.
     */
    static #drawVerticalLine(ctx, x, topY, bottomY)
    {
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    }
    /**
     * Draws the stock price label beside the cursor.
     */
    static #drawPriceLabel(ctx, name, x, yCursor, price, chartWidth)
    {
        const offsetX = 10;
        let textX = x + offsetX;
        let textY = yCursor;
        const text = `${name}: $${price}`;
        const textWidth = ctx.measureText(text).width;
        // Prevent clipping at right edge
        if (textX + textWidth > chartWidth)
        {
            textX = x - textWidth - offsetX;
        }
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = textX < x ? 'right' : 'left';
        ctx.fillText(text, textX, textY);
    }
    /**
     * Draws the date label at the bottom of the chart.
     */
    static #drawDateLabel(ctx, x, bottomY, dateLabel)
    {
        ctx.fillStyle = '#808080';
        ctx.fillText(dateLabel, x, bottomY - 5);
    }
}