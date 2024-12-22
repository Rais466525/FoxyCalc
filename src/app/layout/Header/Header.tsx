import Image from 'next/image'
import Styles from './Header.module.scss'
import { Sidebar } from '../Sidebar/Sidebar'

export const Header = ({}) => {
   return (
      <div className='fixed top-0 w-full z-50'>
         <header className='bg-foreground px-4 rounded-b-2xl border-b-2 border-black flex justify-between items-center'>
            <div className='flex items-center justify-center gap-2'>
               <Image 
                  src="/logo.webp" 
                  alt="logo" 
                  width={100} 
                  height={90} 
                  className='-mt-4'/>
               <h1 className='text-4xl font-bold'>Foxy</h1>
            </div>

            <Sidebar />
         </header>
      </div>
   )
}