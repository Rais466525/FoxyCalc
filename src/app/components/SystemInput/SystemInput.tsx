'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSystemStore } from '../../store/useSystemStore'
import styles from './SystemInput.module.scss'

// Определение схемы Zod
const systemSchema = z.object({
   systemX: z
      .string()
      .nonempty('Поле обязательно для заполнения')
      .regex(/^[A-Za-z0-9\s]+$/, 'Разрешены только буквы и цифры'),
   systemY: z
      .string()
      .nonempty('Поле обязательно для заполнения')
      .regex(/^[A-Za-z0-9\s]+$/, 'Разрешены только буквы и цифры'),
});

// Тип данных формы
type FormValues = z.infer<typeof systemSchema>;

export default function SystemInput() {
   const { setX, setY } = useSystemStore();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      resolver: zodResolver(systemSchema),
   });

   const onSubmit = (data: FormValues) => {
      const formattedX = data.systemX.replace(/\s+/g, '');
      const formattedY = data.systemY.replace(/\s+/g, '');

      setX(formattedX);
      setY(formattedY);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <div className={styles.inputGroup}>
            <label htmlFor="systemX">Система X</label>
            <input
               id="systemX"
               {...register('systemX')}
               className={`${styles.input} ${errors.systemX ? styles.errorInput : ''}`}
            />
            {errors.systemX && <p className={styles.error}>{errors.systemX.message}</p>}
         </div>

         <div className={styles.inputGroup}>
            <label htmlFor="systemY">Система Y</label>
            <input
               id="systemY"
               {...register('systemY')}
               className={`${styles.input} ${errors.systemY ? styles.errorInput : ''}`}
            />
            {errors.systemY && <p className={styles.error}>{errors.systemY.message}</p>}
         </div>

         <button type="submit" className={styles.submitButton}>
            Сохранить
         </button>
      </form>
   );
}