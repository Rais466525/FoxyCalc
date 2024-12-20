interface SumConditionalProbabilitiesProps {
   value: number;
 }
 
 export const SumConditionalProbabilities: React.FC<SumConditionalProbabilitiesProps> = ({
   value,
 }) => (
   <div>
     <h2 className="font-semibold text-lg">Сумма условных вероятностей</h2>
     <p className="text-sm">{value}</p>
   </div>
 );
 