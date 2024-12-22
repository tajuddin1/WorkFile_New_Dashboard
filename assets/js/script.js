const today = new Date();
var date = document.querySelector('.date');
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const day = today.getDate();
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

const formattedDate = `${month} ${day}, ${year}`;

date.innerHTML= formattedDate;




const ctx = document.getElementById('activityChart').getContext('2d');
// const canvas = document.getElementById('activityChart');
// canvas.height = 100;
    
// Data for the chart
const chartData = {
    labels: ['Aug 12', 'Sep 21', 'Oct 9', 'Nov 10', 'Dec 5', 'Jan 18', 'Feb 2', 'Mar 7', 'Apr 18', 'May 16', 'Jun 20', 'Jul 12'],
    datasets: [{
    label: 'Student Activity',
    data: [30, 80, 50, 20, 10, 90, 15, 40, 100, 70, 90, 60], // Example data points
    backgroundColor: '#3E46E4', // Bar color
    borderRadius: 5, // Rounded edges for bars
    }]
};

// Chart configuration
const config = {
    type: 'bar', // Bar chart
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    offset: true,
                    color: '#dddddd',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    color: '#dddddd',
                },
                ticks: {
                    display: false,
                    stepSize: 25,
                },
            },
        },
    },
};

// Render the chart
new Chart(ctx, config);
