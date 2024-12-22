import { AlignRight } from 'lucide-react'
import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"
import { Header } from './Header/Header'
import { Nav } from './Nav/Nav'
 
export const Sidebar = ({}) => {
   return (
      <div>
         <Sheet>
            <SheetTrigger className='pt-3'>
               <AlignRight size='35' />
            </SheetTrigger>
            <SheetContent side="left" className='w-[300px] bg-foreground p-0 pt-3'>
               <Header />
               <Nav />
            </SheetContent>
         </Sheet>
      </div>
   )
}