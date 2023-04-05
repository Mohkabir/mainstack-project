import React, { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [devicesSoldData, setDevicesSoldData] = useState({
    series: [44, 55, 20, 18],
    options: {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 4580,
          options: {
            legend: {
              colors: ["red", "yellow", "purple"],
              show: false,
              //   position: "right",
              //   offsetY: 0,
              height: "100%",
            },
            dataLabels: {
              enabled: false,
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      //   labels: ["In Progress", "Sold"],
    },
  });
  return (
    <div id="chart">
      <Chart
        options={devicesSoldData.options}
        series={devicesSoldData.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
