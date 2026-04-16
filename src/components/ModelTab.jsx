import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar
} from "recharts";

import StatCard from "./StatCard";

export default function ModelTab() {

  /* ========================= */
  /* MODEL METRICS */
  /* ========================= */

  const metrics = [
    { metric: "Accuracy", value: 0.82 },
    { metric: "Precision", value: 0.78 },
    { metric: "Recall", value: 0.76 },
    { metric: "F1 Score", value: 0.77 }
  ];

  /* ========================= */
  /* CONFUSION MATRIX */
  /* ========================= */

  const confusionMatrix = [
    { name: "True Positive", value: 95 },
    { name: "True Negative", value: 120 },
    { name: "False Positive", value: 25 },
    { name: "False Negative", value: 30 }
  ];

  return (

    <div>

      <h2>Model Performance</h2>

      {/* ========================= */}
      {/* KPI CARDS */}
      {/* ========================= */}

      <div className="grid">

        <StatCard title="Accuracy" value="82%" />
        <StatCard title="Precision" value="78%" />
        <StatCard title="Recall" value="76%" />
        <StatCard title="F1 Score" value="77%" />

      </div>

      {/* ========================= */}
      {/* CHART GRID */}
      {/* ========================= */}

      <div className="chart-grid">

        {/* Radar Chart */}

        <div>

          <h3>Model Metrics Radar</h3>

          <ResponsiveContainer width="100%" height={300}>

            <RadarChart data={metrics}>

              <PolarGrid />

              <PolarAngleAxis dataKey="metric" />

              <Radar
                dataKey="value"
                fillOpacity={0.6}
              />

            </RadarChart>

          </ResponsiveContainer>

        </div>

        {/* Confusion Matrix */}

        <div>

          <h3>Confusion Matrix</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={confusionMatrix}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ========================= */}
      {/* MODEL INFO */}
      {/* ========================= */}

      <div style={{ marginTop: "2rem" }}>

        <h3>Model Details</h3>

        <ul>

          <li>Algorithm: Logistic Regression</li>
          <li>Dataset: Titanic Survival Dataset</li>
          <li>Features Used: Age, Sex, Pclass, Fare</li>
          <li>Validation: Train/Test Split (80/20)</li>

        </ul>

      </div>

    </div>

  );

}