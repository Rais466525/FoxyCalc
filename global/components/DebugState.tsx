'use client'
import { useSystemStore } from '/src/app/store/useSystemStore'

export default function DebugState() {
   const { x, y } = useSystemStore();

   const handleDebug = () => {
      console.log('Текущее состояние X:', x);
      console.log('Текущее состояние Y:', y);
   };

   return (
      <button
         onClick={handleDebug}
         className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700"
      >
         Вывести состояние
      </button>
   );
}