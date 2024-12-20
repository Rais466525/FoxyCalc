interface MutualInformationProps {
   value: number;
 }
 
 export const MutualInformation: React.FC<MutualInformationProps> = ({ value }) => (
   <div>
     <h2 className="font-semibold text-lg">Взаимная информация</h2>
     <p className="text-sm">I(X; Y): {value}</p>
   </div>
 );
 