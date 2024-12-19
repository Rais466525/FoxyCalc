'use client'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import { FrequencyAndProbabilityResult } from "./Calculations"

interface Props {
  data: FrequencyAndProbabilityResult;
  title: string;
}

export const FrequencyAndProbabilityTable: React.FC<Props> = ({ data, title }) => {
  if (!data || !data.frequencies || !data.probabilities) {
    return <div>Error: Invalid data provided.</div>;
  }

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Символ</TableCell>
            <TableCell>Кол-во</TableCell>
            <TableCell>Шанс</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.frequencies.map(({ char, count }, index) => (
            <TableRow key={index}>
              <TableCell>{char}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>
                {data.probabilities.find((p) => p.char === char)?.probability ?? 0}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}