import React from 'react';
import { LineChart, Line, ResponsiveContainer, Area, XAxis, YAxis, Tooltip, AreaChart } from 'recharts';

type CardProps = {
  title: string;
  value: string;
  measurementUnit?: string;
  selected: boolean;
  data: { name: string; uv: number }[];
  onFilter: () => void; // This function would be used to filter the table
};

const Card: React.FC<CardProps> = ({ title, value, selected, measurementUnit, data, onFilter }) => {
  return (
    <div
      className={`${selected ? 'bg-gray-700' : 'bg-gray-800'} relative rounded-lg overflow-hidden shadow-lg p-4 m-2 cursor-pointer`}
      onClick={onFilter}
      style={{ width: `${selected ? 'calc(21% - 1rem)' : 'calc(20% - 1rem)'}`, height: `${selected ? '150px' : '140px'}`}}
    >
      <h4 className={`text-slate-300 ${selected ? 'text-2xl' : 'text-xs'}`}>{title}</h4>
      <div className="text-3xl text-green-600 font-bold">{value} <span className='text-base'>{measurementUnit}</span></div>

      {/* Background line chart */}
      <div className="absolute bottom-0 left-0 right-0 h-14 z-10 cursor-pointer">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart margin={{left: 0, right: 0}} data={data}>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="green"
              strokeWidth={2}
              dot={false}
              fill="green"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Card;