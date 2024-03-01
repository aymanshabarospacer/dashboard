import React from 'react';

type TableProps = {
  title: string;
  data: { columns: string[], values: any[]};
};

const Table: React.FC<TableProps> = ({ title, data }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 relative shadow-md sm:rounded-lg h-[calc(100vh-385px)] max-h-[calc(100vh-385px)]">
      {/* <p className='text-slate-300 text-2xl py-4'>{title}</p> */}
      <table className="w-full text-sm text-left text-slate-300 rounded-lg">
        <thead className="text-xs uppercase">
          <tr className='bg-sky-950 border-b border-slate-800'>
            {
              data.columns.map((column) => (
                <th key={column} scope="col" className="font-bold py-4 px-6">
                  {column}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.values.map((row, index: number) => (
            <tr className={`border-b bg-gray-800 border-slate-800 ${title === 'Calibrations' ? (index%2 === 0 ? 'bg-[#f3ca4e99]': 'bg-[#f3001499]') : ''}`}>
              {Object.keys(row).map((key: string) => (
                // if boolean value, render a checkmark or a cross
                typeof row[key] === 'boolean' ? (
                  <td key={key} className="py-4 px-6 text-xl">
                    {row[key] ? '✔' : '✖'}
                  </td>
                ) :
                  <td key={key} className={`py-4 px-6`}>{row[key]}</td>
              ))}
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;