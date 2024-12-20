// app/utils/Calculations.ts
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
  const charCounts = new Map<string, number>();

  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const frequencies = Array.from(charCounts.entries())
    .sort(([charA], [charB]) => charA.localeCompare(charB))
    .map(([char, count]) => ({ char, count }));

  const total = str.length;

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
  const charCounts = new Map<string, number>();

  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const total = str.length;
  const entropy = Array.from(charCounts.values()).reduce((sum, count) => {
    const p = count / total;
    return p > 0 ? sum - p * Math.log2(p) : sum;
  }, 0);

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
  const uniqueChars1 = Array.from(new Set(str1)).sort();
  const uniqueChars2 = Array.from(new Set(str2)).sort();

  return uniqueChars1.map((char1) => ({
    char: char1,
    counts: uniqueChars2.map((char2) => {
      let count = 0;
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] === char1 && str2[i] === char2) {
          count++;
        }
      }
      return count;
    }),
  }));
};

/**
 * Возвращает длины двух строк.
 */
export const getStringLengths = (str1: string, str2: string): { lengthX: number; lengthY: number } => {
  return { lengthX: str1.length, lengthY: str2.length };
};