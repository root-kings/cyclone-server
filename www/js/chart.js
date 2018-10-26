var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 700)
    gradient.addColorStop(0, '#ffcc33')
    gradient.addColorStop(1, '#ffb347');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Rider 1","Rider 2","Rider 3","Rider 4","Rider 5"],
        datasets: [{
            label: "Rider {num}",
            backgroundColor: gradient,
            data: [45,45,45,45,45,45, 45],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
            	barPercentage: 0.3
            }]
        }
    },

});
