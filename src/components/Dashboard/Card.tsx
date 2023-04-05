import React, { useEffect, useState } from "react";
import { checkImage } from "../../util";
import DonutChart from "./DonutChart";

export type Report = {
  country?: string;
  source?: string;
  count: number;
  percent: number;
};

export type Reports = {
  datas: Report[];
};

const Card = ({ datas, title }: any) => {
  const [reportsData, setReportsData] = useState({
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
    },
  });
  const [others, setothers] = useState(0);

  const extractChartData = () => {
    let percent: number[] = [];
    let names: any = [];

    datas.forEach((data: Report) => {
      percent.push(data.percent);
      names.push(data?.country || data?.source);
    });
    const data = {
      ...reportsData,
      series: [
        ...percent,
        100 - percent.reduce((a: number, b: number) => a + b),
      ],
      options: { ...reportsData.options, labels: names },
    };

    setothers(100 - percent.reduce((a, b) => a + b));
    setReportsData(data);
  };

  useEffect(() => {
    extractChartData();
  }, [datas]);

  return (
    <div>
      <div className="head">
        <h4>{title}</h4>
        <p style={{ cursor: "pointer" }}>View full reports</p>
      </div>
      <div className="contents">
        <div>
          {datas.map((item: Report) => (
            <p>
              {item.country && (
                <p>
                  {checkImage(item.country) ? (
                    <img src={checkImage(item.country)} />
                  ) : (
                    <div></div>
                  )}
                  {item.country}
                  <strong>{item.percent}%</strong>
                  <span></span>
                </p>
              )}
              {item.source && (
                <p>
                  {checkImage(item.source) ? (
                    <img src={checkImage(item.source)} />
                  ) : (
                    <div></div>
                  )}
                  {item.source}
                  <strong>{item.percent}%</strong>
                  <span></span>
                </p>
              )}
            </p>
          ))}
          <p>
            <p>
              <div></div> Others <strong> {others}%</strong> <span></span>
            </p>
          </p>
        </div>
        <div>
          <DonutChart datas={datas} reportsData={reportsData} />
        </div>
      </div>
    </div>
  );
};

export default Card;
