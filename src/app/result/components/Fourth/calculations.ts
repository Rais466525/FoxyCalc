export const calculateFor4 = (
  oneResult: number[],
  thResult: number[][]
): number[] => {
  return thResult.map((row, index) =>
    row.reduce((sum, value, idx) => sum + value * oneResult[idx], 0)
  );
};

export const calculateSumN = (...results: number[][]): number[] => {
  return results[0].map((_, colIndex) =>
    results.reduce((sum, array) => sum + array[colIndex], 0)
  );
};

export const one = (str: string, m: number): number[] => {
  const uniqueChars = [...new Set(str)];
  const counts = uniqueChars.map((char) =>
    str.split("").reduce((sum, c) => (c === char ? sum + 1 : sum), 0)
  );
  return counts.map((count) => count / m);
};

export const th = (
  str1: string,
  str2: string,
  m: number,
  mode: number
): number[][] => {
  // Mock logic for `th`, adjust as needed
  const uniqueChars = [...new Set(str1 + str2)];
  return uniqueChars.map((_) =>
    uniqueChars.map((__) => Math.random() * mode * m) // Replace this with real logic
  )
}