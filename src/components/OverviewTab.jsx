import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

import StatCard from "./StatCard";

import {
  loadCSV,
  computeStats,
  genderData,
  survivalByClass,
  ageDistribution,
  fareDistribution
} from "../utils/titanicUtils";

export default function OverviewTab() {

  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {

    loadCSV((d) => {
      setData(d);
      setStats(computeStats(d));
    });

  }, []);

  if (!stats) return <p>Loading dataset...</p>;

  return (

    <div>

      <h2>Overview Analytics</h2>

      {/* ======================= */}
      {/* KPI CARDS */}
      {/* ======================= */}

      <div className="grid">

        <StatCard
          title="Passengers"
          value={stats.total}
        />

        <StatCard
          title="Survival %"
          value={stats.survivalRate + "%"}
        />

        <StatCard
          title="Avg Age"
          value={stats.avgAge}
        />

        <StatCard
          title="Avg Fare"
          value={stats.avgFare}
        />

      </div>

      {/* ======================= */}
      {/* CHART GRID */}
      {/* ======================= */}

      <div className="chart-grid">

        {/* 1️⃣ Gender Pie */}

        <div>

          <h3>Gender Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={genderData(data)}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              />

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* 2️⃣ Gender Bar */}

        <div>

          <h3>Gender Count</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={genderData(data)}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* 3️⃣ Survival by Class */}

        <div>

          <h3>Survival by Passenger Class</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={survivalByClass(data)}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="class" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="survived" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* 4️⃣ Age Distribution */}

        <div>

          <h3>Age Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={ageDistribution(data)}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="age" />

              <YAxis />

              <Tooltip />

              <Line dataKey="count" />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* 5️⃣ Fare Distribution */}

        <div>

          <h3>Fare Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={fareDistribution(data)}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="fare" />

              <YAxis />

              <Tooltip />

              <Line dataKey="count" />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* 6️⃣ Survival Rate KPI Chart */}

        <div>

          <h3>Survival Rate</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={[{
              name: "Survival %",
              value: stats.survivalRate
            }]}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}