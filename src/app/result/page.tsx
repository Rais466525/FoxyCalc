"use client"

import { useSearchParams } from "next/navigation"
// First
import { calculateFrequenciesAndProbabilities } from "./components/First/Calculations";
import { FrequencyAndProbabilityTable } from "./components/First/FrequencyAndProbabilityTable";
// Second
import { EntropyDisplay } from './components/Second/EntropyDisplay';
// Third
import { ConditionalFrequencyTable } from "./components/Third/ConditionalFrequencyTable";
import { calculateConditionalFrequencies } from "./components/Third/calculations";
// Fourth

export default function Result() {
  const searchParams = useSearchParams();
  const x = searchParams.get("x") || "";
  const y = searchParams.get("y") || "";

  if (!x || !y) {
    return <div className="pt-[104px]">Error: Отсутствуют параметры</div>;
  }

  const xResult = calculateFrequenciesAndProbabilities(x);
  const yResult = calculateFrequenciesAndProbabilities(y);

  const conditionalFrequenciesXY = calculateConditionalFrequencies(x, y);
  const conditionalFrequenciesYX = calculateConditionalFrequencies(y, x);

  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl font-bold mb-6">Frequency and Probability</h1>
        <FrequencyAndProbabilityTable
          data={xResult}
          title="Вероятность строки X"
        />
        <FrequencyAndProbabilityTable
          data={yResult}
          title="Вероятность строки Y"
        />
      </div>

      <div className="p-8">
        <EntropyDisplay
          str={x}
          title="Энтропия строки X"
        />
        <EntropyDisplay
          str={y}
          title="Энтропия строки Y"
        />
      </div>

      <div>
        <ConditionalFrequencyTable
          data={conditionalFrequenciesXY}
          uniqueChars={[...new Set(x + y)]}
          title="Conditional Frequencies X → Y"
        />
        <ConditionalFrequencyTable
          data={conditionalFrequenciesYX}
          uniqueChars={[...new Set(y + x)]}
          title="Conditional Frequencies Y → X"
        />
      </div>

      <div>
      </div>
    </div>
  )
}