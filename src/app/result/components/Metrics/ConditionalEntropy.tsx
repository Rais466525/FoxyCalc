interface ConditionalEntropyProps {
   value: number;
 }
 
 export const ConditionalEntropy: React.FC<ConditionalEntropyProps> = ({ value }) => (
   <div>
     <h2 className="font-semibold text-lg">Условная энтропия</h2>
     <p className="text-sm">H(X|Y): {value}</p>
   </div>
 );
 