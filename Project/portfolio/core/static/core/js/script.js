const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['C', 'C#', 'Java', 'JavaScript', 'Python', 'Css', 'Html', 'C++'],
      axis: 'y',
      datasets: [{
        label: '# of Votes',
        data: [9, 7, 7, 8, 4, 10, 10, 4],
        backgroundColor: [
                        '#114bbf',
                        '#6211bf',
                        '#11bf62',
                        '#f0f029',
                        '#29aaf0',
                        '#1eb5ba',
                        '#f77d20',
                        '#ed1d15'
                      ],
                    //   borderColor: [
                    //             'rgb(255, 99, 132)',
                    //             'rgb(255, 159, 64)',
                    //             'rgb(255, 205, 86)',
                    //             'rgb(75, 192, 192)',
                    //             'rgb(54, 162, 235)',
                    //             'rgb(153, 102, 255)',
                    //             'rgb(201, 203, 207)'
                    //           ],
                              borderRadius: 50,
                              
        borderWidth: 1
      }]
    },
    options: {
            indexAxis: 'y',
      plugins:{
        legend:{ 
            display:false
        }
      },
      scales: {
        x: {
            grid: {
              display: false
          },

          ticks: {
            display: false //this will remove only the label
        }
          },
        y: {
          beginAtZero: true,
          grid: {
            display: false

        },
        ticks: {
            display: false //this will remove only the label
        }
        
        }
      }
    }
  });


    //   const ctx = document.getElementById("chart").getContext('2d');
    //   const myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //       labels: ["Sunday", "Monday", "Tuesday",
    //       "Wednesday", "Thursday", "Friday", "Saturday"],
    //       datasets: [{
    //         // label: 'Last week',
    //         axis: 'y',
    //
    //         data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         yAxes: [{
    //           ticks: {
    //             beginAtZero: true,
    //           }
    //         }]
    //       }
    //     },
    //   });

    //   {
    //     labels: labels,
    //     datasets: [{
    //       axis: 'y',
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //         'rgba(255, 205, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(201, 203, 207, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(255, 159, 64)',
    //         'rgb(255, 205, 86)',
    //         'rgb(75, 192, 192)',
    //         'rgb(54, 162, 235)',
    //         'rgb(153, 102, 255)',
    //         'rgb(201, 203, 207)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   };

    //   {
    //     labels: labels,
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //         'rgba(255, 205, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(201, 203, 207, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(255, 159, 64)',
    //         'rgb(255, 205, 86)',
    //         'rgb(75, 192, 192)',
    //         'rgb(54, 162, 235)',
    //         'rgb(153, 102, 255)',
    //         'rgb(201, 203, 207)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   }