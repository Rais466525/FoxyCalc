export interface FrequencyAndProbabilityResult {
  frequencies: { char: string; count: number }[];
  probabilities: { char: string; probability: number }[];
  total: number;
}

/**
 * Рассчитывает частоты и вероятности символов строки.
 * Символы сортируются в алфавитном порядке.
 */
export const calculateFrequenciesAndProbabilities = (str: string): FrequencyAndProbabilityResult => {
  const uniqueChars = [...new Set(str)].sort()
  const frequencies = uniqueChars.map((char) => ({
    char,
    count: str.split(char).length - 1,
  }));

  const total = frequencies.reduce((sum, { count }) => sum + count, 0);

  const probabilities = frequencies.map(({ char, count }) => ({
    char,
    probability: Math.floor((count / total) * 1000) / 1000,
  }));

  return { frequencies, probabilities, total };
};

/**
 * Рассчитывает энтропию строки.
 */
export const calculateEntropy = (str: string): number => {
  const uniqueChars = [...new Set(str)];
  const frequencies = uniqueChars.map((char) => str.split(char).length - 1);
  const total = frequencies.reduce((sum, count) => sum + count, 0);

  const probabilities = frequencies.map((count) => count / total);
  const entropy = probabilities.reduce(
    (sum, p) => (p > 0 ? sum - p * Math.log2(p) : sum),
    0
  );

  return Math.round(entropy * 1000) / 1000;
};

/**
 * Рассчитывает условные частоты символов.
 * Символы сортируются в алфавитном порядке.
 */
export const calculateConditionalFrequencies = (
  str1: string,
  str2: string
): { char: string; counts: number[] }[] => {
  const uniqueChars = [...new Set(str1 + str2)].sort()
  const results: { char: string; counts: number[] }[] = []

  uniqueChars.forEach((char1) => {
    const counts = uniqueChars.map((char2) =>
      str1.split("").reduce(
        (acc, _, idx) =>
          str1[idx] === char1 && str2[idx] === char2 ? acc + 1 : acc,
        0
      )
    )
    results.push({ char: char1, counts });
  })

  return results
}