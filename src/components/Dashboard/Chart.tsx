import React, { useState } from "react";
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
    // color: "#fff",
    // backgroundColor: "rgb(255, 255, 255)",
    // padding: "1rem",
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "100%",
    // outline:"1px solid red"
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
      view: 50,
      name: "",
    },
    {
      view: 900,
      name: "18 Dec",
    },
    {
      view: 950,
      name: "19 Dec",
    },
    {
      view: 580,
      name: "20 Dec",
    },
    {
      view: 630,
      name: "21 Dec",
    },
    {
      view: 960,
      name: "22 Dec",
    },
    {
      view: 200,
      name: "23 Dec",
    },
  ];

  const [data, setdata] = useState(data_1);
  const classes = useStyles();
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
