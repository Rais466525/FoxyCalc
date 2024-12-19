export const calculateConditionalFrequencies = (
   str1: string,
   str2: string
 ): { char: string; counts: number[] }[] => {
   const uniqueChars = [...new Set(str1 + str2)];
   const results: { char: string; counts: number[] }[] = [];
 
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
 
   return results
}