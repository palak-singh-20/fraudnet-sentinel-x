import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function AttackChart() {

  const [data, setData] = useState([
    { time: "10:20", attacks: 120 },
    { time: "10:21", attacks: 160 },
    { time: "10:22", attacks: 180 },
    { time: "10:23", attacks: 140 },
    { time: "10:24", attacks: 200 }
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();

      const newPoint = {

        time: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),

        attacks: Math.floor(Math.random() * 200) + 80

      };

      setData(prev => [...prev.slice(-9), newPoint]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="attack-chart">

      <h2>📈 Live Attack Statistics</h2>

      <div className="chart-card">

        <ResponsiveContainer width="100%" height={350}>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="attacks"
              stroke="#ff2e97"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>

  );

}

export default AttackChart;