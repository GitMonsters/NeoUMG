import React from 'react';
import { Card, Metric, Text } from '@tremor/react';
import { useFundamentalAnalysis } from './useFundamentalAnalysis';

export const FundamentalAnalysis: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useFundamentalAnalysis(symbol);

  if (isLoading) return <div>Loading fundamental analysis...</div>;
  if (error) return <div>Error loading fundamental data</div>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Card>
        <Text>P/E Ratio</Text>
        <Metric>{data?.peRatio}</Metric>
      </Card>
      <Card>
        <Text>Market Cap</Text>
        <Metric>{data?.marketCap}</Metric>
      </Card>
      <Card>
        <Text>Dividend Yield</Text>
        <Metric>{data?.dividendYield}%</Metric>
      </Card>
      <Card>
        <Text>52 Week High</Text>
        <Metric>${data?.fiftyTwoWeekHigh}</Metric>
      </Card>
    </div>
  );
};