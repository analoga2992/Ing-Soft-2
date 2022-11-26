Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Grafico Circular
var ctx = document.getElementById("grafico2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Pendientes", "No Resuelto", "En Revisión","Resuelto"],
    datasets: [{
      data: [534, 81, 81, 372],
      backgroundColor: ['#FAD023', '#FE1F1F', '#23EDFA', '#00D420'],
      hoverBackgroundColor: ['#FAD023', '#FE1F1F', '#23EDFA','#00D420'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
