import { FrequencyAndProbabilityResult } from "@/app/utils/Calculations";
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'

interface Props {
  data: FrequencyAndProbabilityResult;
  title: string;
}

export const FrequencyAndProbabilityTable: React.FC<Props> = ({ data, title }) => {
  if (!data || !data.frequencies || !data.probabilities) {
    return <div>Error: Invalid data provided.</div>;
  }

  return (
    <div className='border-2 border-black'>
      <h2 className="bg-primary text-base font-semibold p-1 border-b-2 border-black ">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow className='text-blue-900 text-semibold'>
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