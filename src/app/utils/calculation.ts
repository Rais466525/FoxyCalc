export const calculate = (x: string, y: string, action: string): any => {
   const m_1 = [...new Set((y + x).split(""))].sort();
 
   const one = (a: string, m: string[]) => {
     const r_1 = m.map(l => a.split('').filter(ch => ch === l).length);
     const r = r_1.reduce((acc, val) => acc + val, 0);
     r_1.push(r);
     return r_1;
   };
 
   const one_1 = (a: string, m: string[]) => {
     const v_1 = one(a, m);
     const r_1_2 = v_1.slice(0, -1).map(num => Math.floor((num / v_1[4]) * 1000) / 1000);
     const r = r_1_2.reduce((acc, val) => acc + val, 0);
     r_1_2.push(Math.ceil(r));
     return r_1_2;
   };
 
   const two = (a: string, m: string[]) => {
     const mf = one_1(a, m);
     let P = 0;
     for (let i = 0; i < mf.length - 1; i++) {
       if (mf[i] > 0) {
         P += mf[i] * Math.log2(mf[i]);
       }
     }
     return Math.ceil(Math.abs(P) * 1000) / 1000;
   };
 
   const calculations: Record<string, () => any> = {
     one: () => ({ X: one(x, m_1), Y: one(y, m_1) }),
     one_1: () => ({ "Вер. X": one_1(x, m_1), "Вер. Y": one_1(y, m_1) }),
     two: () => ({ "H(x)": two(x, m_1), "H(y)": two(y, m_1) }),
     // Additional calculations (like `th`, `for_4`, etc.) will be implemented here
   };
 
   return calculations[action]?.() || { error: "Invalid action selected." };
 };
 