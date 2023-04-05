import React from "react";
import DonutChart from "./DonutChart";

type Report = {
  country?: string;
  source?: string;
  count: number;
  percent: number;
};

type Reports = {
  data: Report[];
};

// { userDetails, loading, switchTab, tab }: User
const Card = ({ data }: Reports) => {
  return (
    <div>
      <div className="head">
        <h4>Top Locations</h4>
        <p>View full reports</p>
      </div>
      <div className="contents">
        <div>
          {data.map((item) => (
            <p>
              {item.country || item.source} <span> {item.count}%</span>
            </p>
          ))}
          <p>
            Others <span> 24%</span>
          </p>
        </div>
        <div>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Card;
