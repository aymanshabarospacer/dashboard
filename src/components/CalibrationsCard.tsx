import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

type CardProps = {
  title: string;
  redValue: string;
  yellowValue: string;
  selected: boolean;
  measurementUnit?: string;
  data: { value1: number; value2: number }[];
  onFilter: () => void; // This function would be used to filter the table
};

const CalibrationsCard: React.FC<CardProps> = ({ title, redValue, yellowValue, selected, data, onFilter }) => {
  return (
    <div
    className={`${selected ? 'bg-gray-700' : 'bg-gray-800'} relative rounded-lg overflow-hidden shadow-lg p-4 m-2 cursor-pointer`}
      onClick={onFilter}
      style={{ width: `${selected ? 'calc(20% - 1rem)' : 'calc(19% - 1rem)'}`, height: `${selected ? '150px' : '140px'}`}}
    >
      <h4 className={`text-slate-300 ${selected ? 'text-2xl' : 'text-xs'}`}>{title}</h4>
      <div className="text-3xl text-slate-300 font-bold"><span className='text-[#f3001499]'>{redValue}</span> / <span className='text-[#f3ca4e99]'>{yellowValue}</span></div>

      {/* Background line chart */}
      <div className="absolute bottom-0 left-0 right-0 h-14 cursor-pointer">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart margin={{left: 0, right: 0}} data={data}>
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
  );
};

export default CalibrationsCard;