import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const GrowthCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(50000);
  const [annualContribution, setAnnualContribution] = useState(12000);
  const [yieldRate, setYieldRate] = useState(12);
  const [tenureYears, setTenureYears] = useState(10);
  const [chartData, setChartData] = useState([]);
  const [results, setResults] = useState({
    totalInvested: 0,
    futureValue: 0,
    totalReturns: 0
  });

  useEffect(() => {
    const P = initialAmount;
    const C = annualContribution;
    const r = yieldRate / 100;
    const t = tenureYears;

    let runningTotalInvested = P;
    let runningFV = P;
    const dataPoints = [];

    // Base year
    dataPoints.push({ year: 0, invested: P, fv: P });

    for (let year = 1; year <= t; year++) {
      runningTotalInvested += C;
      // FV = FV * (1 + r) + C * (1 + r) (annuity due)
      runningFV = runningFV * (1 + r) + C * (1 + r);
      
      dataPoints.push({
        year,
        invested: Math.round(runningTotalInvested),
        fv: Math.round(runningFV)
      });
    }

    setChartData(dataPoints);
    setResults({
      totalInvested: Math.round(runningTotalInvested),
      futureValue: Math.round(runningFV),
      totalReturns: Math.round(Math.max(0, runningFV - runningTotalInvested))
    });
  }, [initialAmount, annualContribution, yieldRate, tenureYears]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // SVG Chart Dimensions & Calculation
  const width = 280;
  const height = 120;
  const maxVal = Math.max(...chartData.map(d => d.fv), 1000);

  // Generate SVG path for investment growth curve
  const points = chartData.map((d, index) => {
    const x = (index / tenureYears) * width;
    const y = height - (d.fv / maxVal) * height;
    return `${x},${y}`;
  });
  const svgPath = points.length > 0 ? `M ${points.join(' L ')}` : '';

  // Generate SVG path for principal invested line
  const investedPoints = chartData.map((d, index) => {
    const x = (index / tenureYears) * width;
    const y = height - (d.invested / maxVal) * height;
    return `${x},${y}`;
  });
  const svgInvestedPath = investedPoints.length > 0 ? `M ${investedPoints.join(' L ')}` : '';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Sliders Control */}
      <div className="space-y-6">
        {/* Initial Amount */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Initial Investment</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {initialAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="5000" 
            max="1000000" 
            step="5000" 
            value={initialAmount}
            onChange={(e) => setInitialAmount(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹5,000</span>
            <span>₹10L</span>
          </div>
        </div>

        {/* Annual Top-Up */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Regular Annual Top-up</span>
            <span className="text-base font-extrabold text-brand-blue dark:text-brand-gold flex items-center">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              {annualContribution.toLocaleString('en-IN')}
            </span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="250000" 
            step="2000" 
            value={annualContribution}
            onChange={(e) => setAnnualContribution(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
            <span>₹0</span>
            <span>₹2.5L</span>
          </div>
        </div>

        {/* Expected Return Rate */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Annual Yield (%)</label>
            <input 
              type="number" 
              min="1" 
              max="30" 
              step="0.5" 
              value={yieldRate}
              onChange={(e) => setYieldRate(parseFloat(e.target.value) || 12)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5 text-sm font-bold text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Tenure (Years)</label>
            <select
              value={tenureYears}
              onChange={(e) => setTenureYears(parseInt(e.target.value))}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5 text-sm font-bold text-brand-blue dark:text-white focus:outline-none focus:border-brand-gold"
            >
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="25">25 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Visual Chart & Results */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-center gap-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Future Value</span>
            <span className="text-xl font-black text-brand-blue dark:text-brand-gold">
              {formatCurrency(results.futureValue)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Total Invested</span>
            <span className="text-sm font-extrabold text-slate-600 dark:text-slate-300">
              {formatCurrency(results.totalInvested)}
            </span>
          </div>
        </div>

        {/* Custom SVG Line Chart */}
        <div className="relative border border-slate-200/40 dark:border-slate-800/40 p-2 rounded-xl bg-white dark:bg-slate-950/60 overflow-hidden flex items-end">
          <svg className="w-full h-[120px] overflow-visible" viewBox={`0 0 ${width} ${height}`}>
            {/* Horizontal Grid lines */}
            <line x1="0" y1="0" x2={width} y2="0" className="stroke-slate-100 dark:stroke-slate-900" strokeWidth="0.5" />
            <line x1="0" y1="40" x2={width} y2="40" className="stroke-slate-100 dark:stroke-slate-900" strokeWidth="0.5" />
            <line x1="0" y1="80" x2={width} y2="80" className="stroke-slate-100 dark:stroke-slate-900" strokeWidth="0.5" />
            <line x1="0" y1={height} x2={width} y2={height} className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />

            {/* Principal Invested Path */}
            <path
              d={svgInvestedPath}
              className="stroke-slate-300 dark:stroke-slate-800 fill-none"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
            {/* Future Value Growth Path */}
            <path
              d={svgPath}
              className="stroke-brand-gold fill-none transition-all duration-300"
              strokeWidth="3.5"
            />
          </svg>
          {/* Legend indicator */}
          <div className="absolute top-2 left-2 flex gap-4 text-[9px] font-bold">
            <span className="flex items-center text-slate-400">
              <span className="inline-block w-2.5 h-[2px] bg-slate-300 dark:bg-slate-700 border-dashed mr-1"></span>
              Invested
            </span>
            <span className="flex items-center text-brand-gold">
              <span className="inline-block w-2.5 h-[3px] bg-brand-gold mr-1"></span>
              Future Value
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthCalculator;
