"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FourthResultTableProps {
  resultsX: number[][];
  resultsY: number[][];
  sumX: number[];
  sumY: number[];
}

export const FourthResultTable: React.FC<FourthResultTableProps> = ({
  resultsX,
  resultsY,
  sumX,
  sumY,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Results for X</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mode</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resultsX.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Mode {index}</TableCell>
              <TableCell>{row.toFixed(4)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{sumX.reduce((sum, v) => sum + v, 0).toFixed(4)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h2 className="text-xl font-semibold mt-6 mb-4">Results for Y</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mode</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resultsY.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Mode {index}</TableCell>
              <TableCell>{row.toFixed(4)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{sumY.reduce((sum, v) => sum + v, 0).toFixed(4)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}