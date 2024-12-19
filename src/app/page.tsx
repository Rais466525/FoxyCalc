"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const schema = z.object({
   x: z.string().nonempty("Поле X не может быть пустым"),
   y: z.string().nonempty("Поле Y не может быть пустым"),
})

type FormData = z.infer<typeof schema>

export default function HomePage() {
   const router = useRouter();
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: zodResolver(schema),
   })

   const onSubmit = (data: FormData) => {
      const { x, y } = data;
      const XCleaned = x.replace(/\s+/g, "")
      const YCleaned = y.replace(/\s+/g, "")

      router.push(`/result?x=${XCleaned}&y=${YCleaned}`)
   }

   return (
      <div className="h-screen p-3 pt-[104px]">
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-foreground p-6 border-2 border-black rounded-md">
            <div>
               <Input
                  placeholder="Введите значение X"
                  {...register("x")}
                  className='border-2 border-black outline-none rounded-md'
               />
               {errors.x && <p className="text-red-500 text-sm">{errors.x.message}</p>}
            </div>
            <div>
               <Input
                  placeholder="Введите значение Y"
                  {...register("y")}
                  className='border-2 border-black outline-none rounded-md'
               />
               {errors.y && <p className="text-red-500 text-sm">{errors.y.message}</p>}
            </div>
            <Button type="submit">Отправить</Button>
         </form>
      </div>
   )
}