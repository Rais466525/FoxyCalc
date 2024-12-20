import {
  calculateFrequenciesAndProbabilities,
  calculateEntropy,
  calculateJointEntropy,
  calculateConditionalEntropyOfStrings,
  calculateTotalEntropy,
  calculateInformationAmount,
  calculateMutualInformation,
  calculateConditionalFrequencies,
} from '../

export const calculateAllMetrics = (x: string, y: string) => {
  const xResult = calculateFrequenciesAndProbabilities(x);
  const yResult = calculateFrequenciesAndProbabilities(y);
  const entropyX = calculateEntropy(x);
  const entropyY = calculateEntropy(y);
  const jointEntropy = calculateJointEntropy(x, y);
  const conditionalEntropy = calculateConditionalEntropyOfStrings(x, y);
  const totalEntropy = calculateTotalEntropy(x, y);
  const informationAmount = calculateInformationAmount(x, y);
  const mutualInformation = calculateMutualInformation(x, y);
  const conditionalFrequenciesXY = calculateConditionalFrequencies(x, y);
  const conditionalFrequenciesYX = calculateConditionalFrequencies(y, x);

  return {
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
  };
};
