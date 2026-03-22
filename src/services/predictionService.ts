import { PredictionInputs, PredictionResult } from "../types";

/**
 * This service simulates the XGBoost model prediction.
 * In a real production environment, this would call a Python backend
 * that loads 'model.pkl' and 'features.pkl'.
 */
export const predictYield = async (inputs: PredictionInputs): Promise<PredictionResult> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Feature Engineering (as requested)
  const npk_sum = inputs.n + inputs.p + inputs.k;
  const fertility_index = npk_sum / 3;
  const input_intensity = inputs.fertilizer + inputs.pesticide;
  const stress = inputs.temperature * inputs.pestIndex;
  const water_stress = inputs.temperature / (inputs.rainfall + 1);
  const water_efficiency = inputs.rainfall / (inputs.irrigation + 1);
  const yield_factor = (inputs.rainfall / 100) * (npk_sum / 100);

  // Heuristic-based prediction logic to mimic a real model based on Odisha dataset
  // Base yield depends on crop
  let baseYield = 4.0;
  if (inputs.crop === "Rice") baseYield = 6.0;
  if (inputs.crop === "Wheat") baseYield = 5.0;
  if (inputs.crop === "Pulses") baseYield = 3.0;

  // Variety effect
  let varietyEffect = 1.0;
  if (inputs.variety === "Variety_A") varietyEffect = 1.1;
  if (inputs.variety === "Variety_C") varietyEffect = 0.9;

  // Adjustments based on dataset trends
  const tempEffect = Math.max(0.5, 1 - Math.abs(inputs.temperature - 28) / 30);
  const rainEffect = Math.min(1.5, inputs.rainfall / 150); // In dataset rainfall is around 20-300
  const nutrientEffect = Math.min(1.5, (inputs.n + inputs.p + inputs.k) / 100);
  const fertilizerEffect = Math.min(1.2, 1 + inputs.fertilizer / 500);
  const pestEffect = Math.max(0.5, 1.2 - inputs.pestIndex);

  const predictedYield = baseYield * varietyEffect * tempEffect * rainEffect * nutrientEffect * fertilizerEffect * pestEffect;

  return {
    yield: Math.max(1.0, Number(predictedYield.toFixed(2))),
    features: {
      NPK_sum: npk_sum,
      Fertility_Index: fertility_index,
      Input_Intensity: input_intensity,
      Stress: stress,
      Water_Stress: water_stress,
      Water_Efficiency: water_efficiency,
      Yield_Factor: yield_factor,
    },
  };
};
