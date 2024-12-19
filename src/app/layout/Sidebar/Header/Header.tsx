import Image from 'next/image'

export const Header = ({}) => {
   return (
      <div>
         <header className='border-b-2 border-black flex items-center gap-10'>
            <Image 
               src="/hello.webp" 
               alt="hello" 
               width={100} 
               height={90}
               className='-ml-[18px]' />

            <h1 className='text-4xl font-bold -mt-4 border-2 rounded-md border-black p-3'>Hey</h1>
         </header>
      </div>
   )
}