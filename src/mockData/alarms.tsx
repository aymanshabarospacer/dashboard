const alarmsHistory = [
  { name: 'Day 1', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 2', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 3', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 4', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 5', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 6', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 7', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 8', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 9', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 10', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 11', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 12', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 13', uv: Math.floor(Math.random() * 1000) },
  { name: 'Day 14', uv: Math.floor(Math.random() * 1000) },
  // ... add data for a week
];

const alarmsData = {
  "columns": ["System ID", "Serial", "Name", "Firmware", "No Flow in the last 12 hours (h)", "No Flow in 12 hours (#)", "Dosage Check", "DI2 State", "DI3 State", "DI4 State", "DI5 State", "DI6 State", "Since (UTC)"],
  "values": [
    {
      "System ID": 871,
      "Serial": "NeP02245Q37",
      "Name": "Watergate",
      "Firmware": 2.21,
      "No Flow in the last 12 hours (h)": "00:00",
      "No Flow in 12 hours (#)": 0,
      "Dosage Check": true,
      "DI2 State": true,
      "DI3 State": true,
      "DI4 State": true,
      "DI5 State": true,
      "DI6 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 2295,
      "Serial": "NeP04517T39",
      "Name": "PWS Pool",
      "Firmware": 2.21,
      "No Flow in the last 12 hours (h)": "00:00",
      "No Flow in 12 hours (#)": 0,
      "Dosage Check": true,
      "DI2 State": true,
      "DI3 State": true,
      "DI4 State": false,
      "DI5 State": false,
      "DI6 State": false,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3103,
      "Serial": "NeP01652P34",
      "Name": "MHH Spa",
      "Firmware": 2.21,
      "No Flow in the last 12 hours (h)": "00:00",
      "No Flow in 12 hours (#)": 0,
      "Dosage Check": true,
      "DI2 State": true,
      "DI3 State": true,
      "DI4 State": true,
      "DI5 State": true,
      "DI6 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3105,
      "Serial": "NeP04839U04",
      "Name": "WFP Spa 1",
      "Firmware": 2.21,
      "No Flow in the last 12 hours (h)": "00:00",
      "No Flow in 12 hours (#)": 0,
      "Dosage Check": true,
      "DI2 State": true,
      "DI3 State": true,
      "DI4 State": true,
      "DI5 State": true,
      "DI6 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3107,
      "Serial": "NeP04839U04",
      "Name": "WFP Spa 2",
      "Firmware": 2.21,
      "No Flow in the last 12 hours (h)": "00:00",
      "No Flow in 12 hours (#)": 0,
      "Dosage Check": true,
      "DI2 State": true,
      "DI3 State": true,
      "DI4 State": true,
      "DI5 State": true,
      "DI6 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    }
  ]  
}

export { alarmsHistory, alarmsData };