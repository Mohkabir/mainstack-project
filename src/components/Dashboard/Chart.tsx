import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const useStyles = createUseStyles(() => ({
  container: {
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "100%",
  },
}));

const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="rgb(255, 84, 3)" stopOpacity={0.2} />
      <stop offset="95%" stopColor="rgb(255, 84, 3)" stopOpacity={0} />
    </linearGradient>
  );
};

const MyGraph = ({ datas }: any) => {
  const data_1 = [
    {
      view: 0,
      name: "",
    },
  ];

  const [data, setdata] = useState(data_1);
  const classes = useStyles();

  const extractDate = () => {
    let res = [];
    for (const key in datas?.graph_data?.views) {
      console.log(key, "key");
      res.push({
        view: datas?.graph_data?.views[key],
        name: dayjs(key).format("D MMM"),
      });
    }
    setdata(res);
  };

  useEffect(() => {
    extractDate();
  }, [datas]);

  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <GradientColors />
          </defs>
          <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          />
          <CartesianGrid strokeDasharray="4 4" stroke="#8884d8" opacity={0.4} />
          <XAxis dataKey="name" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <YAxis tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <Area
            dataKey="view"
            type="monotone"
            stroke="#FF5403"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyGraph;
