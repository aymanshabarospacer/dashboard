const measurementsHistory = [
  { name: 'Day 1', uv: 820 },
  { name: 'Day 2', uv: 238 },
  { name: 'Day 3', uv: 820 },
  { name: 'Day 4', uv: 240 },
  { name: 'Day 5', uv: 591 },
  { name: 'Day 5', uv: 234 },
  { name: 'Day 5', uv: 522 },
  // ... add data for a week
];

const measurementsData = {
  "columns": ["System ID", "Serial", "Name", "Firmware", "Trigger", "Measurement", "Unit", "Raw", "Setpoint", "Slope", "Zeropoint", "Since (UTC)"],
  "values": [
    {
      "System ID": 595,
      "Serial": "NeP01575P30",
      "Name": "LPH Salt",
      "Firmware": 2.19,
      "Trigger": "pH",
      "Measurement": 6.8,
      "Unit": "pH",
      "Raw": 11.1,
      "Setpoint": 7.3,
      "Slope": 59.0,
      "Zeropoint": 0.0,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 2295,
      "Serial": "NeP04517T39",
      "Name": "PWS Pool",
      "Firmware": 2.21,
      "Trigger": "pH",
      "Measurement": 7.1,
      "Unit": "pH",
      "Raw": 24.2,
      "Setpoint": 7.4,
      "Slope": 59.0,
      "Zeropoint": 27.1,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3103,
      "Serial": "NeP01652P34",
      "Name": "MHH Spa",
      "Firmware": 2.21,
      "Trigger": "pH",
      "Measurement": 6.9,
      "Unit": "pH",
      "Raw": -48.4,
      "Setpoint": 7.3,
      "Slope": 59.0,
      "Zeropoint": -50.1,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3105,
      "Serial": "NeP04839U04",
      "Name": "WFP Spa 1",
      "Firmware": 2.21,
      "Trigger": "pH",
      "Measurement": 6.9,
      "Unit": "pH",
      "Raw": 40.9,
      "Setpoint": 7.3,
      "Slope": 59.0,
      "Zeropoint": 31.8,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 1266,
      "Serial": "NeP03060R49",
      "Name": "PDR I/Pool",
      "Firmware": 2.20,
      "Trigger": "DIS1",
      "Measurement": 3.3,
      "Unit": "mg/l",
      "Raw": 272.4,
      "Setpoint": 2.0,
      "Slope": 6.8,
      "Zeropoint": 0.0,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 2758,
      "Serial": "NeP05063U12",
      "Name": "PDR Main P",
      "Firmware": 2.21,
      "Trigger": "DIS1",
      "Measurement": 2.7,
      "Unit": "mg/l",
      "Raw": 174.3,
      "Setpoint": 0.5,
      "Slope": 9.4,
      "Zeropoint": 0.0,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3103,
      "Serial": "NeP01652P34",
      "Name": "MHH Spa",
      "Firmware": 2.21,
      "Trigger": "DIS1",
      "Measurement": 2.9,
      "Unit": "ppm",
      "Raw": 1924.8,
      "Setpoint": 3.0,
      "Slope": 69.9,
      "Zeropoint": 0.0,
      "Since (UTC)": "2024-02-22 07:05:58"
    }
  ]  
}

export { measurementsData, measurementsHistory };