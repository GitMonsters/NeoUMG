import React from 'react';
import { Card, Title } from '@tremor/react';
import { useNewsData } from './useNewsData';

export const NewsAggregation: React.FC<{ symbol: string }> = ({ symbol }) => {
  const { data, isLoading, error } = useNewsData(symbol);

  if (isLoading) return <div>Loading news...</div>;
  if (error) return <div>Error loading news</div>;

  return (
    <Card className="p-4">
      <Title>Latest News</Title>
      <div className="space-y-4 mt-4">
        {data?.articles.map((article, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.source} - {article.date}</p>
            <p className="mt-2">{article.summary}</p>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};