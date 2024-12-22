'use client'
// components/SystemTables.tsx
import { useSystemStore } from '../../../store/useSystemStore'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui/table'

export default function SystemTables() {
   const { x, y, usedLettersX, usedLettersY } = useSystemStore();

   // Проверка, чтобы массивы всегда были массивами
   const lettersX = Array.isArray(usedLettersX) ? usedLettersX : [];
   const lettersY = Array.isArray(usedLettersY) ? usedLettersY : [];

   // Функция для расчета совпадений
   const calculateMatches = (letter1: string, letter2: string) => {
      const indicesX = [...x].reduce((acc, char, idx) => (char === letter1 ? [...acc, idx] : acc), []); // Индексы для X
      const indicesY = [...y].reduce((acc, char, idx) => (char === letter2 ? [...acc, idx] : acc), []); // Индексы для Y

      // Считаем совпадения по индексам
      const matches = indicesX.filter((index) => indicesY.includes(index));
      return matches.length;
   };

   // Создание таблицы для расчета
   const createTable = (rows: string[], cols: string[]) => {
      // Проверка на наличие строк и столбцов
      if (rows.length === 0 || cols.length === 0) {
         return <p className="text-center text-gray-500">Нет данных для отображения таблицы.</p>;
      }

      return (
         <Table>
            <TableHeader>
               <TableRow>
                  <TableCell />
                  {cols.map((col, colIndex) => (
                     <TableCell key={colIndex} className="text-center font-bold bg-red-200">
                        {col}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHeader>
            <TableBody>
               {rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                     <TableCell className="font-bold text-center bg-purple-200">{row}</TableCell>
                     {cols.map((col, colIndex) => (
                        <TableCell key={colIndex} className="text-center">
                           {calculateMatches(row, col)}
                        </TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      );
   };

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Таблица для X (фиолетовые строки, красные колонки) */}
         <div>
            <h2 className="text-lg font-semibold mb-4">Система X</h2>
            {createTable(lettersX, lettersY)}
         </div>

         {/* Таблица для Y (красные строки, фиолетовые колонки) */}
         <div>
            <h2 className="text-lg font-semibold mb-4">Система Y</h2>
            {createTable(lettersY, lettersX)}
         </div>
      </div>
   )
}