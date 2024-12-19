"use client"

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
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Char</TableHead>
            {uniqueChars.map((char, index) => (
              <TableHead key={index}>{char}</TableHead>
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
  )
}