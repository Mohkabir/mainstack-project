import React from "react";
import { InfoIcon } from "../icons";
import MyGraph from "./Chart";

const ChartWrapper = ({ datas }: any) => {

  const getSum = () => {
    let sum = 0;
    for (const key in datas?.graph_data?.views) {
      console.log(key, "key");
      sum += datas?.graph_data?.views[key];
    }
    console.log(sum, "sum");
    return sum;
  };

  return (
    <div className="chartWrapper">
      <div className="info">
        <h4>Page Views</h4>
        <InfoIcon />
      </div>
      <p className="desc">All time</p>
      <h1>{getSum() || 0}</h1>
      <div className="chart">
        <MyGraph datas={datas} />
      </div>
    </div>
  );
};

export default ChartWrapper;
