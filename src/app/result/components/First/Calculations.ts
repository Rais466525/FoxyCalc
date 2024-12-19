export interface FrequencyAndProbabilityResult {
   frequencies: { char: string; count: number }[];
   probabilities: { char: string; probability: number }[];
   total: number;
 }
 
 export const calculateFrequenciesAndProbabilities = (str: string): FrequencyAndProbabilityResult => {
   const uniqueChars = [...new Set(str)];
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