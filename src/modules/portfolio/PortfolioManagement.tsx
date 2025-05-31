import React from 'react';
import { Card, Title, BarChart } from '@tremor/react';
import { usePortfolioData } from './usePortfolioData';

export const PortfolioManagement: React.FC = () => {
  const { data, isLoading, error } = usePortfolioData();

  if (isLoading) return <div>Loading portfolio data...</div>;
  if (error) return <div>Error loading portfolio</div>;

  return (
    <Card className="p-4">
      <Title>Portfolio Overview</Title>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold">Total Value</h3>
          <p className="text-2xl">${data?.totalValue.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Daily Change</h3>
          <p className={`text-2xl ${data?.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {data?.dailyChange >= 0 ? '+' : ''}{data?.dailyChange}%
          </p>
        </div>
      </div>
      <BarChart
        data={data?.holdings || []}
        index="symbol"
        categories={["value"]}
        colors={["blue"]}
        className="mt-6"
      />
    </Card>
  );
};