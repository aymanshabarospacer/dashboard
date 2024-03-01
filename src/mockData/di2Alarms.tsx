const di2AlarmsHistory = [
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

const di2AlarmsData = {
  "columns": ["System ID", "Serial", "Name", "Firmware", "DI2 in the last 12 hours (h)", "DI2 in 12 hours (#)", "DI2 State", "Since (UTC)"],
  "values": [
    {
      "System ID": 1062,
      "Serial": "NeP02328Q42",
      "Name": "BLC M Pool",
      "Firmware": 2.21,
      "DI2 in the last 12 hours (h)": "00:13",
      "DI2 in 12 hours (#)": 2,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 1091,
      "Serial": "NeP02231Q37",
      "Name": "RAC Splash",
      "Firmware": 2.20,
      "DI2 in the last 12 hours (h)": "12:00",
      "DI2 in 12 hours (#)": 1,
      "DI2 State": false,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 1364,
      "Serial": "NeP02847R34",
      "Name": "EA WLC M/P",
      "Firmware": 2.20,
      "DI2 in the last 12 hours (h)": "07:18",
      "DI2 in 12 hours (#)": 2,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 1614,
      "Serial": "NeP02852R34",
      "Name": "TEACH POOL",
      "Firmware": 2.20,
      "DI2 in the last 12 hours (h)": "02:38",
      "DI2 in 12 hours (#)": 1,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 2066,
      "Serial": "NeP04250T26",
      "Name": "Drimsynie",
      "Firmware": 2.21,
      "DI2 in the last 12 hours (h)": "12:00",
      "DI2 in 12 hours (#)": 1,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3333,
      "Serial": "NeP05276U20",
      "Name": "Leisure",
      "Firmware": 2.21,
      "DI2 in the last 12 hours (h)": "12:00",
      "DI2 in 12 hours (#)": 1,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3446,
      "Serial": "NeP05166U13",
      "Name": "Main Pool",
      "Firmware": 2.21,
      "DI2 in the last 12 hours (h)": "12:00",
      "DI2 in 12 hours (#)": 1,
      "DI2 State": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    }
  ]
}

export { di2AlarmsHistory, di2AlarmsData };