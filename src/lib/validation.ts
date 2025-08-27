import { z } from 'zod';

export const orderSchema = z.object({
  fullName: z.string().min(3, { message: 'الرجاء إدخال اسم ثلاثي على الأقل.' }),
  phone: z.string().min(9, { message: 'الرجاء إدخال رقم هاتف صحيح.' }),
  province: z.string().min(1, { message: 'الرجاء اختيار المحافظة.' }),
  city: z.string().min(2, { message: 'الرجاء إدخال اسم المدينة.' }),
  address: z.string().min(10, { message: 'الرجاء إدخال عنوان مفصل.' }),
  studentAge: z.string().min(1, { message: 'الرجاء اختيار عمر الطالب.' }),
  backpackSize: z.enum(['14', '16', '17'], { required_error: 'الرجاء اختيار مقاس الحقيبة.' }),
  bundle: z.enum(['basic', 'standard', 'premium'], { required_error: 'الرجاء اختيار الباقة.' }),
  notes: z.string().optional(),
  contactMethod: z.enum(['whatsapp', 'phone'], { required_error: 'الرجاء اختيار طريقة التواصل.' }),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
