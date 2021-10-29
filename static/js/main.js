let income = document.querySelectorAll("#income_spam");
console.log(income);

let jsonData;

let data = [5, 5, 5, 5, 5, 5, 5, 5, 5];
let app;
for (var i = 0; i <= data.length - 1; i++) {
  if (i == 0) {
    console.log("equal t0", i);
    app = data[i];
  } else {
    app = app + data[i];
    console.log(app);
  }
}
console.log("total answer is", app);

income.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let zip = JSON.parse(btn.dataset.zip);
    console.log(zip);
  });
});

// graph code is here:
var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 9, 9, 9, 10, 11, 14, 14, 15];
var zValues = [7, 8, 9, 5, 9, 1, 11, 55, 67, 15];
new Chart("myChart", {
  type: "line",
  data: {
    labels: xAxes[{ ticks: { min: 6, max: 500 } }],
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        backgroundColor: "rgba(0,0,0,1.0)",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        backgroundColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        backgroundColor: "blue",
        fill: false,
      },
    ],
  },

  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 10000 } }],
    },
  },
});
