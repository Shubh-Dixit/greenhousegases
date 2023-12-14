function calculateCarbon() {
    var distance = parseFloat(document.getElementById("distance").value);
    var fuelEfficiency = parseFloat(document.getElementById("fuel").value);

    if (!isNaN(distance) && !isNaN(fuelEfficiency)) {
        var carbonEmissions = ((distance / fuelEfficiency) * 19.6)/2.2046; // Assuming emissions per gallon
        document.getElementById("result").innerHTML = "Carbon Emissions: " + carbonEmissions.toFixed(2) + " Kg";
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('gasChart').getContext('2d');

    // Sample data (replace this with your actual data)
    const gasData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'CO2 Increase',
            data: [300, 400, 350, 500, 450],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    const gasChart = new Chart(ctx, {
        type: 'line',
        data: gasData,
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: gasData.labels
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});

