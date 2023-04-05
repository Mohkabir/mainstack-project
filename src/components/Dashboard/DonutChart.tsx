import Chart from "react-apexcharts";

const DonutChart = ({ datas, reportsData }: any) => {
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
