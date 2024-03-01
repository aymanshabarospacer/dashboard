import React from 'react';
import { Area, ResponsiveContainer, AreaChart } from 'recharts';
import { measurementsHistory } from '../mockData/measurements';
import { controlsHistory } from '../mockData/controls';
import SystemsFilters from './SystemsFilters';

const COLORS = ['red', 'yellow'];

const renderOverview = () => {
  return (
    <>
    <div className="bg-gray-800 rounded-lg mt-4">
        <h3 className="text-xl p-2 font-bold">Most Alerts - Region</h3>
        {/* <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={controlsHistory}>
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
        </ResponsiveContainer> */}
        <ul className='p-4'>
          <li className="flex justify-between p-2 text-red-600">
            <span>Yorkshire</span>
            <span>10</span>
          </li>
          <li className="flex justify-between p-2 text-yellow-600">
            <span>East Midlands</span>
            <span>8</span>
          </li>
          <li className="flex justify-between p-2 text-yellow-600">
            <span>London</span>
            <span>5</span>
          </li>
          <li className="flex justify-between p-2 text-green-600">
            <span>South East</span>
            <span>3</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-800 rounded-lg border-white mt-4">
        <h3 className="text-base p-2 font-medium">Measurements - last week</h3>
        <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={controlsHistory}>
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
      <div className="bg-gray-800 rounded-lg border-white mt-4">
        <h3 className="text-base p-2 font-medium">Measurements - last month</h3>
        <ResponsiveContainer aspect={1.6}>
          <AreaChart margin={{left: 0, right: 0}} data={measurementsHistory}>
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
    </>
  )
}

const MeasurementsSidebar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('overview');

  return (
    <div className="space-y-4 text-center ml-14 py-2">
      <div className="flex flex-col justify-start text-slate-300 shadow-xl p-1 rounded-lg bg-[#6e6b6b0c] h-[calc(100vh-250px)]">
      <div className='tabs bg-slate-700 rounded-md p-1'>
          <button 
            onClick={() => setSelectedFilter('overview')} 
            className={`w-1/2 ${selectedFilter === 'overview' && 'bg-slate-900'} text-slate-300 rounded-md rounded-br-md p-2`}>
              Overview
          </button>
          <button 
            className={`w-1/2 ${selectedFilter === 'filters' && 'bg-slate-900'} text-slate-300 rounded-tl-md rounded-bl-md p-2`}
            onClick={() => setSelectedFilter('filters')}>
              Filters (0)
          </button>
        </div>

        { selectedFilter === 'overview' ?
          renderOverview() :
          <SystemsFilters />
        }   
      </div>
    </div>
  )
}

export default MeasurementsSidebar;