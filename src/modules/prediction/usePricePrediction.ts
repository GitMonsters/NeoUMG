import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PredictionData {
  currentPrice: number;
  fiveDayTarget: number;
  predictions: Array<{
    date: string;
    predicted: number;
    confidence_high: number;
    confidence_low: number;
  }>;
  confidence: {
    technical: number;
    fundamental: number;
    sentiment: number;
  };
}

export const usePricePrediction = (symbol: string) => {
  return useQuery<PredictionData>({
    queryKey: ['pricePrediction', symbol],
    queryFn: async () => {
      // Simulated data - replace with actual API call
      const currentPrice = 150;
      const dates = Array.from({ length: 6 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toISOString().split('T')[0];
      });

      return {
        currentPrice,
        fiveDayTarget: 158.50,
        predictions: dates.map((date, i) => ({
          date,
          predicted: currentPrice + (i * 1.7),
          confidence_high: currentPrice + (i * 2.1),
          confidence_low: currentPrice + (i * 1.3),
        })),
        confidence: {
          technical: 85,
          fundamental: 78,
          sentiment: 92,
        }
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};