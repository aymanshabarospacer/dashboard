import React from 'react';
import Card from './Card';
import Table from './Table';
import {measurementsData, measurementsHistory} from '../mockData/measurements';
import {calibrationsData, calibrationsHistory} from '../mockData/calibrations';
import { alarmsData, alarmsHistory } from '../mockData/alarms';
import { controlsData, controlsHistory } from '../mockData/controls';
import { di2AlarmsData, di2AlarmsHistory } from '../mockData/di2Alarms';
import CalibrationsCard from './CalibrationsCard';
import Sidebar from './MeasurementsSidebar';
import MeasurementsSidebar from './MeasurementsSidebar';
import CalibrationsSidebar from './CalibrationsSidebar';

const MainContent: React.FC = () => {
  const [selectedTable, setSelectedTable] = React.useState('measurements');

  // Function to handle filter, here you would implement the actual filter logic
  const handleFilter = (type: string) => {
    // set state with the filtered data type
    setSelectedTable(type);
  };

  const renderTable = () => {
    switch (selectedTable) {
      case 'measurements':
        return <Table title={"Measurements"} data={measurementsData} />;
      case 'calibrations':
        return <Table title={"Calibrations"} data={calibrationsData} />;
      case 'alarms':
        return <Table title={"Alarms"} data={alarmsData} />;
      case 'control':
        return <Table title={"Control"} data={controlsData} />;
      case 'di2_alarms':
        return <Table title={"DI2 Alarms"} data={di2AlarmsData} />;
      default:
        return <Table title={"Measurements"} data={measurementsData} />;
    }
  }

  const renderSidebar = () => {
    switch (selectedTable) {
      case 'measurements':
        return <MeasurementsSidebar />;
      case 'calibrations':
        return <CalibrationsSidebar />;
      default:
        return <Sidebar />;
    }
  }

  return (
    <main className="flex-1 overflow-hidden overflow-y-auto py-8">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-9/12">
            <div className="flex flex-wrap justify-between">
              <Card selected={selectedTable === 'measurements'} title="Measurements" value={'123'} data={measurementsHistory} onFilter={() => handleFilter('measurements')} />
              <CalibrationsCard selected={selectedTable === 'calibrations'}  title="Calibrations" redValue={'735'} yellowValue={'281'} data={calibrationsHistory} onFilter={() => handleFilter('calibrations')} />
              <Card selected={selectedTable === 'alarms'}  title="Alarms" value={'76'} data={alarmsHistory} onFilter={() => handleFilter('alarms')} />
              <Card selected={selectedTable === 'control'}  title="Controls" value={'41'} data={controlsHistory} onFilter={() => handleFilter('control')} />
              <Card selected={selectedTable === 'di2_alarms'}  title="DI2 Alarms" value={'7'} data={di2AlarmsHistory} onFilter={() => handleFilter('di2_alarms')} />
            </div>

            {/* Table of items */}
            <section className="my-8 p-2">
              {renderTable()}
            </section>
          </div>
          
          <div className="w-3/12">
            {renderSidebar()}
          </div>
        </div>
      </div>
    </main>

    
  );
};

export default MainContent;