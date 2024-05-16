const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                label: 'Brunswick Sq Mall',
                data: [10, 20, 30, 40, 50, 60, 30, 20, 10, 50, 40, 30],
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'EB Public Library',
                data: [5, 10, 5, 10, 5, 10, 5, 10, 5, 10, 5, 10],
                borderColor: 'red',
                fill: false
            },
            {
                label: 'Earle Asphalt',
                data: [0, 5, 10, 15, 20, 25, 20, 15, 10, 5, 0, 5],
                borderColor: 'green',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data'
            }
        }
    }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Brunswick Sq Mall', 'EB Public Library', 'Earle Asphalt'],
        datasets: [{
            data: [53.3, 44, 2.7],
            backgroundColor: ['blue', 'red', 'green']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Distribution by Location'
            }
        }
    }
});
