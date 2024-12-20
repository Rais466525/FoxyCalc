'use client'

import { calculateAllMetrics } from "@/app/utils/Calculations";
import { useSearchParams } from "next/navigation";
import { FrequencyAndProbabilityTable } from "./components/First/FrequencyAndProbabilityTable";
import { EntropyDisplay } from "./components/Second/EntropyDisplay";
import { ConditionalFrequencyTable } from "./components/Third/ConditionalFrequencyTable";
import { ConditionalEntropy } from "./components/Metrics/ConditionalEntropy";
import { JointEntropy } from "./components/Metrics/JointEntropy";
import { InformationAmount } from "./components/Metrics/InformationAmount";
import { SumConditionalProbabilities } from "./components/Metrics/SumConditionalProbabilities";
import { MutualInformation } from "./components/Metrics/MutualInformation";

export default function Result() {
  const searchParams = useSearchParams();
  const x = searchParams.get("x") || "";
  const y = searchParams.get("y") || "";

  if (!x || !y) {
    return <div className="pt-[104px]">Error: Отсутствуют параметры</div>;
  }

  const {
    xResult,
    yResult,
    entropyX,
    entropyY,
    jointEntropy,
    conditionalEntropy,
    totalEntropy,
    informationAmount,
    mutualInformation,
    conditionalFrequenciesXY,
    conditionalFrequenciesYX,
  } = calculateAllMetrics(x, y);

  const uniqueChars = [...new Set(x + y)].sort();

  return (
    <main className="pt-[104px] px-4 flex flex-col gap-3">
      <h1 className="text-2xl font-bold mb-3">Решение задач</h1>

      <div className="bg-foreground p-4 rounded-md space-y-5">
        <FrequencyAndProbabilityTable data={xResult} title="Вероятность строки X" />
        <FrequencyAndProbabilityTable data={yResult} title="Вероятность строки Y" />
      </div>

      <div className="bg-foreground p-4 rounded-md">
        <EntropyDisplay str={x} title="Энтропия строки X" value={entropyX} />
        <EntropyDisplay str={y} title="Энтропия строки Y" value={entropyY} />
      </div>

      <div className="bg-foreground p-4 rounded-md space-y-5">
        <ConditionalFrequencyTable
          data={conditionalFrequenciesXY}
          uniqueChars={uniqueChars}
          title="Частоты совместного появления символов X → Y"
        />
        <ConditionalFrequencyTable
          data={conditionalFrequenciesYX}
          uniqueChars={uniqueChars}
          title="Частоты совместного появления символов Y → X"
        />
      </div>

      <div className="bg-foreground p-4 rounded-md space-y-5">
        <ConditionalEntropy value={conditionalEntropy} />
        <JointEntropy value={jointEntropy} />
        <InformationAmount value={informationAmount} />
        <SumConditionalProbabilities value={mutualInformation} />
      </div>
    </main>
  )
}