'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { OrderFormValues } from '@/lib/validation';
import { orderSchema } from '@/lib/validation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const provinces = [
  'بغداد', 'البصرة', 'نينوى', 'أربيل', 'النجف', 'ذي قار', 'كركوك', 'الأنبار', 'ديالى', 'المثنى', 'القادسية', 'ميسان', 'واسط', 'صلاح الدين', 'دهوك', 'السليمانية', 'بابل', 'كربلاء'
];

export function OrderForm() {
  const { toast } = useToast();
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      province: '',
      city: '',
      address: '',
      studentAge: '',
      notes: '',
    },
  });

  function onSubmit(data: OrderFormValues) {
    console.log(data);
    toast({
      title: 'تم استلام طلبك بنجاح!',
      description: 'سنتواصل معك قريباً لتأكيد الطلب. شكراً لاختيارك رسيل.',
      className: 'bg-green-100 dark:bg-green-900 border-green-500',
    });
    form.reset();
  }

  return (
    <section id="order-form" className="bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              احجز باقتك الآن
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground">
              املأ الاستمارة أدناه وسنتكفل بالباقي.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الاسم الكامل</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: علي محمد حسن" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: 07701234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>المحافظة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="اختر محافظتك" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {provinces.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>المدينة / القضاء</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: المنصور" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>العنوان الكامل</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: شارع الأميرات، محلة 609، زقاق 12، دار 3" {...field} />
                      </FormControl>
                      <FormDescription>
                        الرجاء كتابة أقرب نقطة دالة لتسهيل عملية التوصيل.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FormField
                    control={form.control}
                    name="studentAge"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>عمر الطالب/ة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="اختر العمر" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Array.from({length: 6}, (_, i) => i + 13).map(age => <SelectItem key={age} value={String(age)}>{age} سنة</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="backpackSize"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>مقاس الحقيبة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="اختر المقاس" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="14">14 بوصة</SelectItem>
                                <SelectItem value="16">16 بوصة</SelectItem>
                                <SelectItem value="17">17 بوصة</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                        control={form.control}
                        name="bundle"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>اختر الباقة</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="اختر الباقة" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="basic">الأساسية</SelectItem>
                                <SelectItem value="standard">المتكاملة</SelectItem>
                                <SelectItem value="premium">المتميزة</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ملاحظات إضافية</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="هل لديك أي طلبات خاصة؟"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>طريقة التواصل المفضلة للتأكيد</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 md:space-x-reverse"
                        >
                          <FormItem className="flex items-center space-x-3 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="whatsapp" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              واتساب
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-x-reverse">
                            <FormControl>
                              <RadioGroupItem value="phone" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              مكالمة هاتفية
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full">إرسال الطلب</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default OrderForm;
