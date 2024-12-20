interface InformationAmountProps {
   value: number;
 }
 
 export const InformationAmount: React.FC<InformationAmountProps> = ({ value }) => (
   <div>
     <h2 className="font-semibold text-lg">Количество информации</h2>
     <p className="text-sm">I(X; Y): {value}</p>
   </div>
 );
 