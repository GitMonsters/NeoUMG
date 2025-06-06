import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TechnicalAnalysis } from './modules/technical/TechnicalAnalysis';
import { FundamentalAnalysis } from './modules/fundamental/FundamentalAnalysis';
import { SentimentAnalysis } from './modules/sentiment/SentimentAnalysis';
import { PortfolioManagement } from './modules/portfolio/PortfolioManagement';
import { RiskAnalysis } from './modules/risk/RiskAnalysis';
import { NewsAggregation } from './modules/news/NewsAggregation';
import { AlgorithmicSignals } from './modules/algorithmic/AlgorithmicSignals';
import { PricePrediction } from './modules/prediction/PricePrediction';

const queryClient = new QueryClient();

function App() {
  const [symbol, setSymbol] = useState('AAPL');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              className="px-4 py-2 border rounded"
              placeholder="Enter stock symbol"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PricePrediction symbol={symbol} />
            <PortfolioManagement />
            <TechnicalAnalysis symbol={symbol} />
            <FundamentalAnalysis symbol={symbol} />
            <RiskAnalysis symbol={symbol} />
            <SentimentAnalysis symbol={symbol} />
            <NewsAggregation symbol={symbol} />
            <AlgorithmicSignals symbol={symbol} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;