export interface FrequencyAndProbabilityResult {
   frequencies: { char: string; count: number }[];
   probabilities: { char: string; probability: number }[];
   total: number;
 }
 
 export interface ConditionalFrequencyResult {
   char: string;
   counts: number[];
 }
 
 /**
  * Calculates the frequency and probability of characters in a string.
  */
 export const calculateFrequenciesAndProbabilities = (
   str: string
 ): FrequencyAndProbabilityResult => {
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
 
 /**
  * Calculates the entropy of a string.
  */
 export const calculateEntropy = (str: string): number => {
   const { probabilities } = calculateFrequenciesAndProbabilities(str);
 
   return -probabilities.reduce(
     (sum, { probability }) =>
       probability > 0 ? sum + probability * Math.log2(probability) : sum,
     0
   );
 };
 
 /**
  * Calculates the conditional frequencies between two strings.
  */
 export const calculateConditionalFrequencies = (
   str1: string,
   str2: string
 ): ConditionalFrequencyResult[] => {
   const uniqueChars = [...new Set(str1 + str2)];
   const results: ConditionalFrequencyResult[] = [];
 
   uniqueChars.forEach((char1) => {
     const counts = uniqueChars.map((char2) =>
       str1.split("").reduce(
         (acc, _, idx) =>
           str1[idx] === char1 && str2[idx] === char2 ? acc + 1 : acc,
         0
       )
     );
     results.push({ char: char1, counts });
   });
 
   return results;
 }