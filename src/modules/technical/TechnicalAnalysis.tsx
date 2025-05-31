import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { format } from 'date-fns';
import { useTechnicalAnalysis } from './useTechnicalAnalysis';

export const TechnicalAnalysis: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useTechnicalAnalysis(symbol);

  if (isLoading) return <div>Loading technical analysis...</div>;
  if (error) return <div>Error loading technical data</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Technical Analysis</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(date) => format(new Date(date), 'MM/dd')}
        />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="sma" stroke="#82ca9d" />
        <Line type="monotone" dataKey="ema" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};