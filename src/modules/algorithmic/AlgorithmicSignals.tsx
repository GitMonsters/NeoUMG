import React from 'react';
import { Card, Title, Badge } from '@tremor/react';
import { useAlgorithmicSignals } from './useAlgorithmicSignals';

export const AlgorithmicSignals: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useAlgorithmicSignals(symbol);

  if (isLoading) return <div>Loading signals...</div>;
  if (error) return <div>Error loading signals</div>;

  return (
    <Card className="p-4">
      <Title>Trading Signals</Title>
      <div className="space-y-6 mt-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Overall Recommendation</h3>
          <Badge
            color={data?.recommendation === 'Buy' ? 'green' : 
                   data?.recommendation === 'Sell' ? 'red' : 'yellow'}
          >
            {data?.recommendation}
          </Badge>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Technical Indicators</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">MACD</p>
              <Badge color={data?.macd.signal === 'Buy' ? 'green' : 'red'}>
                {data?.macd.signal}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium">RSI</p>
              <Badge color={data?.rsi.signal === 'Buy' ? 'green' : 'red'}>
                {data?.rsi.signal}
              </Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Price Targets</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Support</p>
              <p className="text-xl">${data?.priceTargets.support}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Resistance</p>
              <p className="text-xl">${data?.priceTargets.resistance}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};