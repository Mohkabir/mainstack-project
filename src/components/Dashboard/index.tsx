import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import ChartWrapper from "./ChartWrapper";
import "./Dashboard.scss";
import loader from "../../assets/images/load-loading.gif";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState<number>(5);
  const [datas, setDatas] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = async () => {
    setLoading(true);

    try {
      let res = await axios.get(`https://fe-task-api.mainstack.io/`);
      setDatas(res.data);
    } catch (error) {
      setError(true);
    }

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
        <span style={{ cursor: "pointer" }}>View analytics</span>
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
        <div style={{ textAlign: "center" }}>
          <img src={loader} />
        </div>
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
          {error ? (
            <p style={{ color: "red" }}>Something Wront wrong kindly reload</p>
          ) : (
            <p>No Contents for this Date</p>
          )}
        </div>
      )}

      {datas && (
        <div className="report">
          <Card datas={[...datas?.top_locations]} title="Top Locations" />
          <Card datas={[...datas?.top_sources]} title="Top Referral source" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
