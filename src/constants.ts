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
];
