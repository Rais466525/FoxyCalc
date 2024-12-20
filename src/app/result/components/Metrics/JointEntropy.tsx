interface JointEntropyProps {
   value: number;
 }
 
 export const JointEntropy: React.FC<JointEntropyProps> = ({ value }) => (
   <div>
     <h2 className="font-semibold text-lg">Совместная энтропия</h2>
     <p className="text-sm">H(X, Y): {value}</p>
   </div>
 );
 