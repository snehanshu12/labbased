import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  Thermometer, 
  Droplets, 
  CloudRain, 
  Bug, 
  FlaskConical, 
  Calendar, 
  BarChart3, 
  Info, 
  ChevronRight,
  Loader2,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from './lib/utils';
import { CROPS, SEASONS, SOIL_TYPES, VARIETIES, SAMPLE_DATA, DISTRICTS } from './constants';
import { predictYield } from './services/predictionService';
import { PredictionInputs, PredictionResult } from './types';

export default function App() {
  const [inputs, setInputs] = useState<PredictionInputs>({
    district: DISTRICTS[0],
    crop: 'Rice',
    season: 'Kharif',
    soilType: 'Loamy',
    variety: 'Variety_A',
    year: 2024,
    temperature: 28,
    humidity: 65,
    rainfall: 150,
    pestIndex: 0.2,
    n: 80,
    p: 40,
    k: 40,
    fertilizer: 120,
    pesticide: 50,
    irrigation: 250,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'about'>('dashboard');

  const handleInputChange = (key: keyof PredictionInputs, value: any) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await predictYield(inputs);
      setResult(res);
    } catch (err) {
      setError("Failed to generate prediction. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-brand-light font-sans selection:bg-brand-teal/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#111111] border-r border-white/5 hidden lg:flex flex-col p-6 z-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center shadow-lg shadow-brand-teal/20">
            <Sprout className="text-black w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">AgriYield AI</h1>
        </div>

        <nav className="space-y-1 flex-1">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
              currentView === 'dashboard' ? "bg-brand-teal/10 text-brand-teal" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
            )}
          >
            <BarChart3 size={18} />
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('about')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
              currentView === 'about' ? "bg-brand-teal/10 text-brand-teal" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
            )}
          >
            <Info size={18} />
            About Project
          </button>
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-transparent border border-brand-teal/20">
          <p className="text-xs text-brand-teal font-semibold uppercase tracking-wider mb-2">Odisha Dataset</p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Optimized for Odisha's unique climatic conditions and soil profiles.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <header className="mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                  <div>
                    <h2 className="text-4xl font-bold text-brand-light mb-2">Crop Yield Prediction</h2>
                    <p className="text-zinc-400 text-lg">Precision agriculture powered by XGBoost machine learning.</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <Calendar size={14} />
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </motion.div>
              </header>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Left Column: Inputs */}
                <div className="xl:col-span-7 space-y-8">
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Categorical Inputs */}
                    <Card title="Agricultural Context" icon={<Sprout className="text-brand-teal" size={18} />}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <InputGroup label="District">
                            <select 
                              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all text-sm"
                              value={inputs.district}
                              onChange={(e) => handleInputChange('district', e.target.value)}
                            >
                              {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </InputGroup>
                          <InputGroup label="Crop Type">
                            <select 
                              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all text-sm"
                              value={inputs.crop}
                              onChange={(e) => handleInputChange('crop', e.target.value)}
                            >
                              {CROPS.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </InputGroup>
                        </div>
                        <InputGroup label="Season">
                          <select 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all"
                            value={inputs.season}
                            onChange={(e) => handleInputChange('season', e.target.value)}
                          >
                            {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </InputGroup>
                        <div className="grid grid-cols-2 gap-4">
                          <InputGroup label="Soil Type">
                            <select 
                              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all text-sm"
                              value={inputs.soilType}
                              onChange={(e) => handleInputChange('soilType', e.target.value)}
                            >
                              {SOIL_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </InputGroup>
                          <InputGroup label="Variety">
                            <select 
                              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all text-sm"
                              value={inputs.variety}
                              onChange={(e) => handleInputChange('variety', e.target.value)}
                            >
                              {VARIETIES.map(v => <option key={v} value={v}>{v.replace('_', ' ')}</option>)}
                            </select>
                          </InputGroup>
                        </div>
                      </div>
                    </Card>

                    {/* Environmental Sliders */}
                    <Card title="Environmental Factors" icon={<CloudRain className="text-blue-400" size={18} />}>
                      <div className="space-y-6">
                        <SliderGroup 
                          label="Temperature" 
                          unit="°C" 
                          min={10} max={50} 
                          value={inputs.temperature} 
                          onChange={(v) => handleInputChange('temperature', v)}
                          icon={<Thermometer size={14} className="text-brand-accent" />}
                        />
                        <SliderGroup 
                          label="Humidity" 
                          unit="%" 
                          min={10} max={100} 
                          value={inputs.humidity} 
                          onChange={(v) => handleInputChange('humidity', v)}
                          icon={<Droplets size={14} className="text-blue-400" />}
                        />
                        <SliderGroup 
                          label="Rainfall" 
                          unit="mm" 
                          min={0} max={500} 
                          value={inputs.rainfall} 
                          onChange={(v) => handleInputChange('rainfall', v)}
                          icon={<CloudRain size={14} className="text-indigo-400" />}
                        />
                      </div>
                    </Card>
                  </section>

                  {/* Nutrients & Inputs */}
                  <Card title="Soil Nutrients & Farm Inputs" icon={<FlaskConical className="text-purple-400" size={18} />}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <NumberInput label="Nitrogen (N)" value={inputs.n} onChange={(v) => handleInputChange('n', v)} />
                        <NumberInput label="Phosphorus (P)" value={inputs.p} onChange={(v) => handleInputChange('p', v)} />
                        <NumberInput label="Potassium (K)" value={inputs.k} onChange={(v) => handleInputChange('k', v)} />
                      </div>
                      <div className="space-y-4">
                        <NumberInput label="Fertilizer (kg/ha)" value={inputs.fertilizer} onChange={(v) => handleInputChange('fertilizer', v)} />
                        <NumberInput label="Pesticide (kg/ha)" value={inputs.pesticide} onChange={(v) => handleInputChange('pesticide', v)} />
                        <NumberInput label="Irrigation (mm)" value={inputs.irrigation} onChange={(v) => handleInputChange('irrigation', v)} />
                      </div>
                      <div className="space-y-6">
                        <InputGroup label="Prediction Year">
                          <input 
                            type="number" 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all"
                            value={inputs.year}
                            onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                          />
                        </InputGroup>
                        <SliderGroup 
                          label="Pest Index" 
                          unit="" 
                          min={0} max={1} step={0.01}
                          value={inputs.pestIndex} 
                          onChange={(v) => handleInputChange('pestIndex', v)}
                          icon={<Bug size={14} className="text-brand-accent" />}
                        />
                      </div>
                    </div>
                  </Card>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePredict}
                    disabled={loading}
                    className={cn(
                      "w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-teal/10",
                      loading ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-brand-teal text-black hover:bg-brand-teal/90"
                    )}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        Analyzing Data...
                      </>
                    ) : (
                      <>
                        Predict Yield
                        <ChevronRight size={24} />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Right Column: Results & Insights */}
                <div className="xl:col-span-5 space-y-8">
                  <AnimatePresence mode="wait">
                    {result ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-8"
                      >
                        {/* Prediction Result Card */}
                        <div className="bg-gradient-to-br from-brand-teal to-brand-blue rounded-[2rem] p-8 text-black shadow-2xl shadow-brand-teal/20 relative overflow-hidden group">
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                          
                          <div className="relative z-10">
                            <p className="text-brand-navy font-bold uppercase tracking-widest text-sm mb-4 opacity-80">Predicted Yield Output</p>
                            <div className="flex items-baseline gap-2 mb-6">
                              <span className="text-7xl font-black tracking-tighter">{result.yield}</span>
                              <span className="text-2xl font-bold opacity-80">tons/hectare</span>
                            </div>
                            
                            <div className="w-full bg-black/10 rounded-full h-3 mb-6">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(100, (result.yield / 10) * 100)}%` }}
                                className="bg-brand-light h-full rounded-full"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                <p className="text-xs text-brand-navy font-bold mb-1 opacity-70">Fertility Index</p>
                                <p className="text-lg font-bold">{result.features.Fertility_Index.toFixed(2)}</p>
                              </div>
                              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                <p className="text-xs text-brand-navy font-bold mb-1 opacity-70">Water Efficiency</p>
                                <p className="text-lg font-bold">{result.features.Water_Efficiency.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Feature Insights */}
                        <Card title="Model Insights" icon={<TrendingUp className="text-brand-teal" size={18} />}>
                          <div className="space-y-4">
                            <FeatureBar label="Nutrient Sum (NPK)" value={result.features.NPK_sum} max={250} color="bg-brand-teal" />
                            <FeatureBar label="Input Intensity" value={result.features.Input_Intensity} max={350} color="bg-brand-blue" />
                            <FeatureBar label="Climate Stress" value={result.features.Stress} max={40} color="bg-brand-accent" />
                          </div>
                        </Card>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-white/5 rounded-[2rem] text-zinc-600"
                      >
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                          <BarChart3 size={40} />
                        </div>
                        <p className="text-center text-lg font-medium max-w-xs">
                          Adjust the parameters and click predict to see the AI analysis.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Historical Trends Chart */}
                  <Card title="Yield Trends (Odisha)" icon={<TrendingUp className="text-brand-teal" size={18} />}>
                    <div className="h-[300px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={SAMPLE_DATA}>
                          <defs>
                            <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                          <XAxis 
                            dataKey="Year" 
                            stroke="#52525b" 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false} 
                          />
                          <YAxis 
                            stroke="#52525b" 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false} 
                            tickFormatter={(v) => `${v}t`}
                          />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                            itemStyle={{ color: '#10B981' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="Yield" 
                            stroke="#10B981" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorYield)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                      <AlertCircle size={14} />
                      Historical data based on Odisha state agricultural records.
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl"
            >
              <header className="mb-12">
                <h2 className="text-4xl font-bold text-brand-light mb-2">About AgriYield AI</h2>
                <p className="text-zinc-400 text-lg">Empowering farmers with data-driven precision agriculture.</p>
              </header>

              <div className="space-y-8">
                <Card title="Project Mission" icon={<Sprout className="text-brand-teal" size={18} />}>
                  <p className="text-zinc-400 leading-relaxed">
                    AgriYield AI is designed to help farmers in Odisha optimize their crop production by providing accurate yield predictions based on historical data, environmental factors, and soil conditions. Our goal is to reduce uncertainty in farming and promote sustainable agricultural practices.
                  </p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Technology" icon={<TrendingUp className="text-brand-blue" size={18} />}>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      We utilize the XGBoost (Extreme Gradient Boosting) algorithm, a powerful machine learning technique known for its speed and performance. The model is trained on a comprehensive dataset specific to Odisha's districts, covering various crops, seasons, and soil types.
                    </p>
                  </Card>
                  <Card title="Key Features" icon={<BarChart3 className="text-purple-400" size={18} />}>
                    <ul className="text-zinc-400 text-sm space-y-2 list-disc ml-4">
                      <li>Real-time yield prediction per hectare</li>
                      <li>Environmental stress analysis</li>
                      <li>Nutrient efficiency monitoring</li>
                      <li>Historical trend visualization</li>
                    </ul>
                  </Card>
                </div>

                <Card title="Data Sources" icon={<Info className="text-brand-accent" size={18} />}>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    The underlying data is derived from official Odisha state agricultural records, including historical yield data, rainfall patterns, and soil health cards. This ensures that the predictions are grounded in local agricultural realities.
                  </p>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="lg:ml-64 p-8 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 AgriYield AI. Built with advanced Machine Learning for sustainable farming.</p>
        <p className="mt-1 font-medium text-brand-teal/50 italic">Built with AI</p>
      </footer>
    </div>
  );
}


// Helper Components
function Card({ title, icon, children, className }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("bg-[#111111] border border-white/5 rounded-[2rem] p-6 shadow-sm", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-bold text-brand-light opacity-90">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function InputGroup({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1">{label}</label>
      {children}
    </div>
  );
}

function SliderGroup({ label, unit, min, max, step = 1, value, onChange, icon }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{label}</label>
        </div>
        <span className="text-sm font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-md">
          {value}{unit}
        </span>
      </div>
      <input 
        type="range" 
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-teal"
      />
    </div>
  );
}

function NumberInput({ label, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1">{label}</label>
      <input 
        type="number" 
        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2 focus:ring-2 focus:ring-brand-teal/50 outline-none transition-all text-sm"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

function FeatureBar({ label, value, max, color }: any) {
  const percentage = Math.min(100, (value / max) * 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-zinc-400">{label}</span>
        <span className="text-brand-light">{value.toFixed(1)}</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-1.5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  );
}
