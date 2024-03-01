const controlsHistory = [
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
const controlsData = {
  "columns": ["System ID", "Serial", "Name", "Firmware", "Dosage Check in the last 12 hours (m)", "Dosage Check in 12 hours (#)", "Dosage Check", "Since (UTC)"],
  "values": [
    {
      "System ID": 575,
      "Serial": "NeP01487P26",
      "Name": "MKH Spa",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 683,
      "Serial": "NeP01818P51",
      "Name": "De Banke",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 751,
      "Serial": "NeP01508P27",
      "Name": "LHH Pool",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 871,
      "Serial": "NeP02245Q37",
      "Name": "Watergate",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 911,
      "Serial": "NeP02340Q42",
      "Name": "Garden O/P",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 954,
      "Serial": "NeP01180P05",
      "Name": "NCC Pool",
      "Firmware": 2.21,
      "Dosage Check in the last 12 hours (m)": 0,
      "Dosage Check in 12 hours (#)": 0,
      "Dosage Check": true,
      "Since (UTC)": "2024-02-22 07:05:58"
    }
  ]
}

export { controlsHistory, controlsData };