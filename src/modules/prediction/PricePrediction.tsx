import React from 'react';
import { Card, Title, LineChart } from '@tremor/react';
import { usePricePrediction } from './usePricePrediction';

export const PricePrediction: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = usePricePrediction(symbol);

  if (isLoading) return <div>Loading price predictions...</div>;
  if (error) return <div>Error loading predictions</div>;

  return (
    <Card className="p-4">
      <Title>5-Day Price Prediction</Title>
      <div className="space-y-6 mt-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-sm font-medium">Current Price</h3>
            <p className="text-xl">${data?.currentPrice}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">5-Day Target</h3>
            <p className={`text-xl ${data?.fiveDayTarget > data?.currentPrice ? 'text-green-600' : 'text-red-600'}`}>
              ${data?.fiveDayTarget}
            </p>
          </div>
        </div>

        <LineChart
          data={data?.predictions || []}
          index="date"
          categories={["predicted", "confidence_high", "confidence_low"]}
          colors={["blue", "green", "red"]}
          className="mt-6"
          yAxisWidth={60}
        />

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Model Confidence</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium">Technical</p>
              <p className="text-lg">{data?.confidence.technical}%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Fundamental</p>
              <p className="text-lg">{data?.confidence.fundamental}%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Sentiment</p>
              <p className="text-lg">{data?.confidence.sentiment}%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};