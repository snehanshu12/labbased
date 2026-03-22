export interface CropData {
  Year: number;
  Crop: string;
  Variety: string;
  Season: string;
  Soil_Type: string;
  Temperature: number;
  Humidity: number;
  Rainfall: number;
  N: number;
  P: number;
  K: number;
  Fertilizer_Usage: number;
  Pesticide_Usage: number;
  Irrigation: number;
  Pest_Index: number;
  Yield: number;
}

export interface PredictionInputs {
  district: string;
  crop: string;
  season: string;
  soilType: string;
  variety: string;
  year: number;
  temperature: number;
  humidity: number;
  rainfall: number;
  pestIndex: number;
  n: number;
  p: number;
  k: number;
  fertilizer: number;
  pesticide: number;
  irrigation: number;
}

export interface PredictionResult {
  yield: number;
  features: Record<string, number>;
}
