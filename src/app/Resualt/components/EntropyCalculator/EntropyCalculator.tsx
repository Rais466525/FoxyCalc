"use client";

import { useState } from "react";

type Metrics = {
   jointEntropy: number;
   mutualInformation: number;
   independentEntropy: number;
   conditionalEntropy: number;
   combinedEntropy: number;
   informationVolume: number;
};

export default function EntropyCalculator() {
   const [inputX, setInputX] = useState("");
   const [inputY, setInputY] = useState("");
   const [results, setResults] = useState<Metrics | null>(null);

   const calculateMetrics = () => {
      const systemX = inputX.split(" ");
      const systemY = inputY.split(" ");

      const getProbability = (system: string[]) => {
         const freq: Record<string, number> = {};
         system.forEach((item) => (freq[item] = (freq[item] || 0) + 1));
         return Object.values(freq).map((count) => count / system.length);
      };

      const calculateEntropy = (probabilities: number[]) => {
         return -probabilities.reduce((sum, p) => sum + p * Math.log2(p), 0);
      };

      const probabilitiesX = getProbability(systemX);
      const probabilitiesY = getProbability(systemY);

      const jointSystem = systemX.map((x, i) => `${x}${systemY[i]}`);
      const probabilitiesJoint = getProbability(jointSystem);

      const entropyX = calculateEntropy(probabilitiesX);
      const entropyY = calculateEntropy(probabilitiesY);
      const jointEntropy = calculateEntropy(probabilitiesJoint);

      const mutualInformation = entropyX + entropyY - jointEntropy;
      const conditionalEntropy = jointEntropy - entropyX;

      const combinedEntropyIndependent = entropyX + entropyY;
      const combinedEntropyDependent = jointEntropy;

      const informationVolume = Math.log2(2 ** 2) * Math.max(systemX.length, systemY.length);

      setResults({
         jointEntropy,
         mutualInformation,
         independentEntropy: combinedEntropyIndependent,
         conditionalEntropy,
         combinedEntropy: combinedEntropyDependent,
         informationVolume,
      });
   };

   return (
      <div className="max-w-4xl mx-auto p-6">
         <h1 className="text-2xl font-bold mb-4">Entropy Calculator</h1>
         <div className="mb-4">
            <label className="block font-medium mb-2">Input for System X</label>
            <input
               type="text"
               value={inputX}
               onChange={(e) => setInputX(e.target.value)}
               className="border p-2 w-full rounded"
               placeholder="e.g., AC CA BCA CC AB CA WA D"
            />
         </div>
         <div className="mb-4">
            <label className="block font-medium mb-2">Input for System Y</label>
            <input
               type="text"
               value={inputY}
               onChange={(e) => setInputY(e.target.value)}
               className="border p-2 w-full rounded"
               placeholder="e.g., AB CA BC CA BCA WA"
            />
         </div>
         <button
            onClick={calculateMetrics}
            className="bg-blue-500 text-white px-4 py-2 rounded"
         >
            Calculate
         </button>
         {results && (
            <div className="mt-6">
               <h2 className="text-xl font-bold mb-4">Results</h2>
               <table className="w-full border-collapse border border-gray-300">
                  <thead>
                     <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Joint Entropy</td>
                        <td className="border border-gray-300 px-4 py-2">{results.jointEntropy.toFixed(4)}</td>
                     </tr>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Mutual Information</td>
                        <td className="border border-gray-300 px-4 py-2">{results.mutualInformation.toFixed(4)}</td>
                     </tr>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Independent Entropy</td>
                        <td className="border border-gray-300 px-4 py-2">{results.independentEntropy.toFixed(4)}</td>
                     </tr>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Conditional Entropy</td>
                        <td className="border border-gray-300 px-4 py-2">{results.conditionalEntropy.toFixed(4)}</td>
                     </tr>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Combined Entropy</td>
                        <td className="border border-gray-300 px-4 py-2">{results.combinedEntropy.toFixed(4)}</td>
                     </tr>
                     <tr>
                        <td className="border border-gray-300 px-4 py-2">Information Volume</td>
                        <td className="border border-gray-300 px-4 py-2">{results.informationVolume.toFixed(4)}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
}
