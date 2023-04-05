import axios from "axios";
import { useEffect, useState } from "react";
// import { fetchChartDataApi } from "../../api";
import Card from "./Card";
import ChartWrapper from "./ChartWrapper";
import "./Dashboard.scss";

const Dashboard = () => {
  const topLocations = [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ];
  const topSources = [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
    {
      source: "facebook",
      count: 40,
      percent: 20,
    },
    {
      source: "linkedin",
      count: 41,
      percent: 21,
    },
  ];

  const [currentTab, setCurrentTab] = useState<number>(5);
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    let res = await axios.get(`https://fe-task-api.mainstack.io/`);
    // let res = await fetchChartDataApi();
    console.log(res.data, "res");
    setDatas(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="dashboard">
      <h3 className="title">Dashboard</h3>
      <div className="welcome">
        <h2>Good morning, Blessing ⛅️</h2>
        <span>View analytics</span>
      </div>
      <p className="desc">Check out your dashboard summary.</p>

      <div className="nav">
        <button
          onClick={() => setCurrentTab(1)}
          type="button"
          className={`${currentTab === 1 && "active"}`}
        >
          1 Day
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          type="button"
          className={`${currentTab === 2 && "active"}`}
        >
          3 Days
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          type="button"
          className={`${currentTab === 3 && "active"}`}
        >
          7 Days
        </button>
        <button
          onClick={() => setCurrentTab(4)}
          type="button"
          className={`${currentTab === 4 && "active"}`}
        >
          30 Days
        </button>
        <button
          onClick={() => setCurrentTab(5)}
          type="button"
          className={`${currentTab === 5 && "active"}`}
        >
          All Time
        </button>
        <button
          onClick={() => setCurrentTab(6)}
          type="button"
          className={`${currentTab === 6 && "active"}`}
        >
          Custom Date
        </button>
      </div>
      {loading ? (
        "Loading.."
      ) : currentTab === 5 && datas ? (
        <ChartWrapper datas={datas} />
      ) : (
        <div
          className="chartWrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Contents for this Date
        </div>
      )}

      <div className="report">
        <Card data={topLocations} />
        <Card data={topSources} />
      </div>
    </div>
  );
};

export default Dashboard;
