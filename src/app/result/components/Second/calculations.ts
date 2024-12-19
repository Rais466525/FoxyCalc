export const calculateEntropy = (str: string): number => {
   const uniqueChars = [...new Set(str)];
   const frequencies = uniqueChars.map((char) => str.split(char).length - 1);
   const total = frequencies.reduce((sum, count) => sum + count, 0);
 
   const probabilities = frequencies.map((count) => count / total);
   const entropy = probabilities.reduce(
     (sum, p) => (p > 0 ? sum - p * Math.log2(p) : sum),
     0
   )
   
   // Округляем до 3 знаков
   return Math.round(entropy * 1000) / 1000;
}