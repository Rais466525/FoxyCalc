"use client";

interface ResultsDisplayProps {
  results: any;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div>
      <h2>Результаты:</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  )}