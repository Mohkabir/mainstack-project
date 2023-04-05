import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Reports } from "./Card";

const DonutChart = ({ datas, reportsData }: any) => {
//   const extractChartData = () => {
//     // let res = [];

//     const res = datas.map((data) => data.percent);
//     const data = {
//       ...reportsData,
//       series: [...res, 100 - res.reduce((a, b) => a + b)],
//     };
//     setReportsData(data);
//     console.log(
//       datas,
//       res.reduce((a, b) => a + b),
//       "res"
//     );
//   };

//   useEffect(() => {
//     extractChartData();
//   }, [datas]);

  return (
    <div id="chart">
      <Chart
        options={reportsData.options}
        series={reportsData.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
