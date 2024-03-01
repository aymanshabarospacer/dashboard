import React from 'react';
import { BarChart, Bar, Area, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart } from 'recharts';
import { measurementsHistory } from '../mockData/measurements';
import { controlsHistory } from '../mockData/controls';
import { calibrationsHistory } from '../mockData/calibrations';


const COLORS = ['red', 'yellow'];

// Main Sidebar Component

const CalibrationsSidebar = () => (
  <div className="space-y-4 text-center ml-14 py-2">
    <div className="flex flex-col justify-between text-slate-300 shadow-xl p-1 rounded-lg bg-[#6e6b6b0c] h-[calc(100vh-180px)]">
      <div className="bg-gray-800 rounded-lg">
        <h3 className="text-base p-2 font-medium">Calibrations - last 24h</h3>
        <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={calibrationsHistory}>
            <Area
                type="monotone"
                dataKey="value1"
                stroke="red"
                strokeWidth={2}
                dot={false}
                fill="red"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="value2"
                stroke="yellow"
                strokeWidth={2}
                dot={false}
                fill="yellow"
                fillOpacity={0.2}
              />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-800 rounded-lg border-white mt-10">
        <h3 className="text-base p-2 font-medium">Calibrations - last week</h3>
        <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={calibrationsHistory}>
            <Area
                type="monotone"
                dataKey="value1"
                stroke="red"
                strokeWidth={2}
                dot={false}
                fill="red"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="value2"
                stroke="yellow"
                strokeWidth={2}
                dot={false}
                fill="yellow"
                fillOpacity={0.2}
              />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-800 rounded-lg border-white mt-10">
        <h3 className="text-base p-2 font-medium">Calibrations - last month</h3>
        <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={calibrationsHistory}>
            <Area
                type="monotone"
                dataKey="value1"
                stroke="red"
                strokeWidth={2}
                dot={false}
                fill="red"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="value2"
                stroke="yellow"
                strokeWidth={2}
                dot={false}
                fill="yellow"
                fillOpacity={0.2}
              />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default CalibrationsSidebar;