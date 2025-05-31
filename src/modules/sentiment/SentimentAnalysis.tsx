import React from 'react';
import { Card, BarList } from '@tremor/react';
import { useSentimentAnalysis } from './useSentimentAnalysis';

export const SentimentAnalysis: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useSentimentAnalysis(symbol);

  if (isLoading) return <div>Loading sentiment analysis...</div>;
  if (error) return <div>Error loading sentiment data</div>;

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">Market Sentiment</h2>
      <BarList 
        data={[
          { name: 'Social Media Sentiment', value: data?.socialScore },
          { name: 'News Sentiment', value: data?.newsScore },
          { name: 'Analyst Ratings', value: data?.analystScore }
        ]}
      />
    </Card>
  );
};