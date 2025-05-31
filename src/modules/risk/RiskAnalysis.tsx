import React from 'react';
import { Card, Title, LineChart } from '@tremor/react';
import { useRiskAnalysis } from './useRiskAnalysis';

export const RiskAnalysis: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useRiskAnalysis(symbol);

  if (isLoading) return <div>Loading risk analysis...</div>;
  if (error) return <div>Error loading risk data</div>;

  return (
    <Card className="p-4">
      <Title>Risk Metrics</Title>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <h3 className="text-sm font-medium">Beta</h3>
          <p className="text-xl">{data?.beta}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Volatility</h3>
          <p className="text-xl">{data?.volatility}%</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Sharpe Ratio</h3>
          <p className="text-xl">{data?.sharpeRatio}</p>
        </div>
      </div>
      <LineChart
        data={data?.historicalRisk || []}
        index="date"
        categories={["value"]}
        colors={["red"]}
        className="mt-6"
      />
    </Card>
  );
};