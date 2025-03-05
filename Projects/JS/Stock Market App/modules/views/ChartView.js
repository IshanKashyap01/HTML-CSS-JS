
/**
 * Represents the view for the chart and range buttons
 */
export class ChartView
{
    /**
     * Canvas where the graph will be drawn
     */
    #canvas
    constructor()
    {
        this.#canvas = document.querySelector('#graph')
        this.oneMonth = document.querySelector('#one-month')
        this.threeMonths = document.querySelector('#three-months')
        this.oneYear = document.querySelector('#one-year')
        this.fiveYears = document.querySelector('#five-years')
    }
    draw(name, prices, timestamps) 
    {
        new Chart(this.#canvas, 
        {
            type: 'line',
            data: 
            {
                labels: timestamps,
                datasets: 
                [
                    {
                        data: prices,
                        borderColor: '#90ee90',
                        tension: 0.1,
                        pointRadius: 0
                    }
                ]
            },
            options: 
            {
                animation: false,
                plugins: 
                {
                    legend: {display: false},
                    tooltip: 
                    {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'transparent',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        displayColors: false,
                        callbacks: 
                        {
                            label: () => '',
                            title: () => ''
                        }
                    }
                },
                interaction: 
                {
                    mode: 'index',
                    axis: 'x',
                    intersect: false
                },
                scales: 
                {
                    x: {ticks: {display: false}},
                    y: {ticks: {display: false}, grid: {display: false}}
                },
                elements: {line: {borderWidth: 2}},
                hover: {mode: 'index', intersect: false}
            },
            plugins: 
            [
                {
                    id: 'crosshair',
                    afterInit(chart) 
                    {
                        chart.customCursor = {x: null, y: null, active: false};
                        
                        chart.canvas.addEventListener('mousemove', (event) => 
                        {
                            const rect = chart.canvas.getBoundingClientRect();
                            chart.customCursor.x = event.clientX - rect.left;
                            chart.customCursor.y = event.clientY - rect.top;
                            chart.customCursor.active = true;
                            chart.draw(); // Trigger re-draw
                        });

                        chart.canvas.addEventListener('mouseleave', () => 
                        {
                            chart.customCursor.active = false;
                            chart.draw(); // Remove the crosshair when not hovering
                        });
                    },
                    afterDraw(chart) 
                    {
                        const cursor = chart.customCursor;
                        if (!cursor.active) return;

                        const ctx = chart.ctx;
                        const x = cursor.x;
                        const yCursor = cursor.y;
                        const bottomY = chart.scales.y.bottom;

                        ctx.save();

                        // Draw vertical crosshair
                        ctx.beginPath();
                        ctx.moveTo(x, chart.scales.y.top);
                        ctx.lineTo(x, bottomY);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = '#ffffff';
                        ctx.stroke();

                        // Find the closest data point to the cursor
                        const { data } = chart.data.datasets[0];
                        const { labels } = chart.data;
                        const xScale = chart.scales.x;

                        let closestIndex = 0;
                        let minDistance = Infinity;

                        for (let i = 0; i < labels.length; i++) 
                        {
                            const pixelX = xScale.getPixelForValue(i); // Use index instead of labels[i]
                            const distance = Math.abs(pixelX - x);
                            
                            if (distance < minDistance) 
                            {
                                minDistance = distance;
                                closestIndex = i;
                            }
                        }

                        const timestamp = labels[closestIndex]; // Get actual timestamp
                        const priceAtCursor = data[closestIndex].toFixed(2);
                        const dateLabel = new Date(timestamp * 1000).toLocaleDateString();

                        // Set text color
                        ctx.fillStyle = '#ffffff';
                        ctx.font = '12px Arial';

                        // Positioning for price label (beside cursor)
                        const offsetX = 10;
                        let textX = x + offsetX;
                        let textY = yCursor;

                        // Prevent clipping at right edge
                        const textWidth = ctx.measureText(`${name}: $${priceAtCursor}`).width;
                        if (textX + textWidth > chart.width) 
                        {
                            textX = x - textWidth - offsetX;
                        }

                        // Draw price beside cursor
                        ctx.textAlign = textX < x ? 'right' : 'left';
                        ctx.fillText(`${name}: $${priceAtCursor}`, textX, textY);

                        // Draw date at the bottom
                        ctx.fillStyle = '#808080';
                        ctx.fillText(dateLabel, textX, bottomY - 5);

                        ctx.restore();
                    }

                }
            ]
        });
    }
}