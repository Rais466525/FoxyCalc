import { Input } from '@/components/ui/input'
import Styles from './InputsForSystem.module.scss'

export const InputsForSystem = ({}) => {
   return (
      <form action="" className='bg-foreground p-4 flex flex-col gap-4 border-2 border-black rounded-sm'>
         <Input placeholder='X' className='border border-black' />
         <Input placeholder='Y' className='border border-black' />
         <input type="submit" value="Calculate" className='border border-black bg-primary text-foreground rounded-sm' />
      </form>
   )
}