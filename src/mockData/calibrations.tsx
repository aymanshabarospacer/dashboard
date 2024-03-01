const calibrationsHistory = [
  { value1: 820, value2: 238},
  { value1: 820, value2: 240},
  { value1: 231, value2: 324},
  { value1: 502, value2: 231},
  { value1: 734, value2: 234},
  { value1: 123, value2: 623},
  { value1: 324, value2: 123},
  { value1: 820, value2: 238},
  { value1: 820, value2: 42},
  { value1: 231, value2: 324},
  { value1: 502, value2: 230},
  { value1: 734, value2: 102},
  { value1: 123, value2: 652},
  { value1: 324, value2: 493},
  { value1: 820, value2: 28}
];

const calibrationsData = {
  "columns": ["System ID", "Serial", "Name", "Firmware", "Triggering Input", "Raw Value", "Slope", "Zeropoint", "Offset", "Measuring Range", "# in 24H", "Since (UTC)"],
  "values": [
    {
      "System ID": 239,
      "Serial": "NeP00304N21",
      "Name": "Barrs Cour",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": 7.5,
      "Slope": 59.0,
      "Zeropoint": 26.5,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 305,
      "Serial": "NeP00664O07",
      "Name": "Mike Phil",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": -17.6,
      "Slope": 59.0,
      "Zeropoint": -5.3,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 525,
      "Serial": "NeP01370P19",
      "Name": "Spa",
      "Firmware": 2.20,
      "Triggering Input": "pH",
      "Raw Value": 48.8,
      "Slope": 59.0,
      "Zeropoint": 61.3,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 595,
      "Serial": "NeP01575P30",
      "Name": "LPH Salt",
      "Firmware": 2.19,
      "Triggering Input": "pH",
      "Raw Value": 11.1,
      "Slope": 59.0,
      "Zeropoint": 0.0,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 2295,
      "Serial": "NeP04517T39",
      "Name": "PWS Pool",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": 24.2,
      "Slope": 59.0,
      "Zeropoint": 27.1,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3103,
      "Serial": "NeP01652P34",
      "Name": "MHH Spa",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": -48.4,
      "Slope": 59.0,
      "Zeropoint": -50.1,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3105,
      "Serial": "NeP04839U04",
      "Name": "WFP Spa 1",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": 40.9,
      "Slope": 59.0,
      "Zeropoint": 31.8,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    },
    {
      "System ID": 3107,
      "Serial": "NeP04839U04",
      "Name": "WFP Spa 2",
      "Firmware": 2.21,
      "Triggering Input": "pH",
      "Raw Value": 40.9,
      "Slope": 59.0,
      "Zeropoint": 31.8,
      "Offset": 0.0,
      "Measuring Range": "N/A",
      "# in 24H": "N/A",
      "Since (UTC)": "2024-02-22 07:05:58"
    }
  ]  
}

export {calibrationsHistory, calibrationsData};