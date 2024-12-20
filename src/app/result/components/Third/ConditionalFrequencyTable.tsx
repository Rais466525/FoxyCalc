import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ConditionalFrequencyTableProps {
  data: { char: string; counts: number[] }[];
  uniqueChars: string[];
  title: string;
}

export const ConditionalFrequencyTable: React.FC<ConditionalFrequencyTableProps> = ({
  data,
  uniqueChars,
  title,
}) => {
  return (
    <div className="border-2 border-black">
      <h2 className="bg-primary text-base font-semibold p-1 border-b-2 border-black">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sky-900 font-semibold">Символ</TableHead>
            {uniqueChars.map((char, index) => (
              <TableHead className="text-sky-900 font-semibold" key={index}>
                {char}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ char, counts }, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{char}</TableCell>
              {counts.map((count, colIndex) => (
                <TableCell key={colIndex}>{count}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
