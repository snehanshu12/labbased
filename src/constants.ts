import { CropData } from "./types";

export const CROPS = ["Rice", "Wheat", "Pulses"];
export const SEASONS = ["Kharif", "Rabi", "Zaid"];
export const SOIL_TYPES = ["Sandy", "Loamy", "Clay"];
export const VARIETIES = ["Variety_A", "Variety_B", "Variety_C"];
export const DISTRICTS = [
  "Angul", "Balangir", "Cuttack", "Puri", "Khordha", 
  "Ganjam", "Mayurbhanj", "Sambalpur", "Koraput", "Kalahandi"
];

export const SAMPLE_DATA: CropData[] = [
  { Year: 2004, Crop: "Pulses", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Sandy", Temperature: 35.59, Humidity: 65.81, Rainfall: 144.83, N: 30.0, P: 32.96, K: 30.02, Fertilizer_Usage: 45.72, Pesticide_Usage: 68.58, Irrigation: 75.39, Pest_Index: 0.72, Yield: 3.08 },
  { Year: 2005, Crop: "Rice", Variety: "Variety_A", Season: "Kharif", Soil_Type: "Loamy", Temperature: 24.99, Humidity: 54.62, Rainfall: 231.55, N: 42.88, P: 13.85, K: 27.39, Fertilizer_Usage: 49.02, Pesticide_Usage: 93.67, Irrigation: 413.65, Pest_Index: 0.63, Yield: 7.74 },
  { Year: 2006, Crop: "Wheat", Variety: "Variety_B", Season: "Kharif", Soil_Type: "Sandy", Temperature: 35.50, Humidity: 86.37, Rainfall: 270.55, N: 79.79, P: 56.09, K: 15.31, Fertilizer_Usage: 55.28, Pesticide_Usage: 14.07, Irrigation: 196.40, Pest_Index: 0.39, Yield: 8.35 },
  { Year: 2007, Crop: "Rice", Variety: "Variety_C", Season: "Zaid", Soil_Type: "Loamy", Temperature: 23.37, Humidity: 43.13, Rainfall: 176.27, N: 60.38, P: 13.24, K: 25.23, Fertilizer_Usage: 64.44, Pesticide_Usage: 72.67, Irrigation: 370.52, Pest_Index: 0.15, Yield: 9.64 },
  { Year: 2008, Crop: "Pulses", Variety: "Variety_B", Season: "Rabi", Soil_Type: "Clay", Temperature: 32.67, Humidity: 62.15, Rainfall: 45.28, N: 103.53, P: 26.04, K: 21.19, Fertilizer_Usage: 27.34, Pesticide_Usage: 63.18, Irrigation: 354.90, Pest_Index: 0.02, Yield: 6.56 },
  { Year: 2009, Crop: "Rice", Variety: "Variety_A", Season: "Kharif", Soil_Type: "Loamy", Temperature: 21.86, Humidity: 83.83, Rainfall: 272.12, N: 83.31, P: 26.95, K: 30.95, Fertilizer_Usage: 150.67, Pesticide_Usage: 90.74, Irrigation: 449.19, Pest_Index: 0.78, Yield: 10.58 },
  { Year: 2010, Crop: "Wheat", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Clay", Temperature: 33.96, Humidity: 62.17, Rainfall: 106.67, N: 101.38, P: 44.24, K: 19.76, Fertilizer_Usage: 183.97, Pesticide_Usage: 84.03, Irrigation: 477.41, Pest_Index: 0.73, Yield: 7.75 },
  { Year: 2011, Crop: "Pulses", Variety: "Variety_A", Season: "Zaid", Soil_Type: "Clay", Temperature: 21.13, Humidity: 81.88, Rainfall: 247.61, N: 119.97, P: 59.83, K: 43.33, Fertilizer_Usage: 158.42, Pesticide_Usage: 95.03, Irrigation: 432.34, Pest_Index: 0.25, Yield: 13.22 },
  { Year: 2012, Crop: "Rice", Variety: "Variety_B", Season: "Kharif", Soil_Type: "Sandy", Temperature: 30.30, Humidity: 59.47, Rainfall: 298.97, N: 109.74, P: 33.17, K: 47.38, Fertilizer_Usage: 154.62, Pesticide_Usage: 13.14, Irrigation: 452.71, Pest_Index: 0.86, Yield: 11.65 },
  { Year: 2013, Crop: "Rice", Variety: "Variety_C", Season: "Zaid", Soil_Type: "Clay", Temperature: 33.31, Humidity: 67.00, Rainfall: 195.25, N: 49.63, P: 30.76, K: 57.96, Fertilizer_Usage: 75.15, Pesticide_Usage: 52.30, Irrigation: 58.83, Pest_Index: 0.73, Yield: 5.33 },
  { Year: 2014, Crop: "Wheat", Variety: "Variety_B", Season: "Kharif", Soil_Type: "Loamy", Temperature: 20.46, Humidity: 87.54, Rainfall: 116.44, N: 38.98, P: 52.54, K: 52.17, Fertilizer_Usage: 35.61, Pesticide_Usage: 20.53, Irrigation: 371.84, Pest_Index: 0.07, Yield: 7.69 },
  { Year: 2015, Crop: "Wheat", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Sandy", Temperature: 24.54, Humidity: 63.20, Rainfall: 200.40, N: 36.86, P: 58.81, K: 39.29, Fertilizer_Usage: 30.38, Pesticide_Usage: 94.35, Irrigation: 313.82, Pest_Index: 0.70, Yield: 7.38 },
  { Year: 2016, Crop: "Rice", Variety: "Variety_B", Season: "Kharif", Soil_Type: "Loamy", Temperature: 29.53, Humidity: 77.97, Rainfall: 161.55, N: 57.73, P: 44.84, K: 64.04, Fertilizer_Usage: 77.65, Pesticide_Usage: 51.47, Irrigation: 153.23, Pest_Index: 0.18, Yield: 6.85 },
  { Year: 2017, Crop: "Pulses", Variety: "Variety_B", Season: "Rabi", Soil_Type: "Sandy", Temperature: 37.17, Humidity: 79.48, Rainfall: 41.99, N: 78.26, P: 42.00, K: 10.05, Fertilizer_Usage: 196.39, Pesticide_Usage: 46.59, Irrigation: 282.80, Pest_Index: 0.19, Yield: 6.90 },
  { Year: 2018, Crop: "Rice", Variety: "Variety_A", Season: "Zaid", Soil_Type: "Clay", Temperature: 38.87, Humidity: 54.57, Rainfall: 27.13, N: 41.98, P: 44.60, K: 22.10, Fertilizer_Usage: 29.70, Pesticide_Usage: 65.59, Irrigation: 283.26, Pest_Index: 0.76, Yield: 2.01 },
  { Year: 2019, Crop: "Wheat", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Sandy", Temperature: 26.65, Humidity: 53.61, Rainfall: 149.84, N: 50.17, P: 43.35, K: 66.68, Fertilizer_Usage: 184.52, Pesticide_Usage: 69.80, Irrigation: 278.10, Pest_Index: 0.83, Yield: 7.16 },
  { Year: 2020, Crop: "Wheat", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Sandy", Temperature: 26.62, Humidity: 34.23, Rainfall: 99.39, N: 91.70, P: 41.74, K: 14.88, Fertilizer_Usage: 40.64, Pesticide_Usage: 43.92, Irrigation: 384.69, Pest_Index: 0.83, Yield: 5.61 },
  { Year: 2021, Crop: "Rice", Variety: "Variety_C", Season: "Kharif", Soil_Type: "Sandy", Temperature: 21.61, Humidity: 81.94, Rainfall: 182.55, N: 65.86, P: 37.49, K: 32.57, Fertilizer_Usage: 42.97, Pesticide_Usage: 78.93, Irrigation: 467.56, Pest_Index: 0.95, Yield: 6.56 },
  { Year: 2022, Crop: "Pulses", Variety: "Variety_A", Season: "Zaid", Soil_Type: "Loamy", Temperature: 29.50, Humidity: 50.82, Rainfall: 195.71, N: 25.27, P: 47.65, K: 10.27, Fertilizer_Usage: 75.25, Pesticide_Usage: 55.36, Irrigation: 219.66, Pest_Index: 0.31, Yield: 6.78 },
  { Year: 2023, Crop: "Wheat", Variety: "Variety_C", Season: "Rabi", Soil_Type: "Loamy", Temperature: 37.35, Humidity: 71.15, Rainfall: 126.82, N: 32.77, P: 50.82, K: 66.50, Fertilizer_Usage: 89.89, Pesticide_Usage: 75.58, Irrigation: 234.84, Pest_Index: 0.50, Yield: 5.17 },
];
