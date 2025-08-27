import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'الباقة الأساسية',
    price: '75,000 د.ع',
    features: [
      'حقيبة ظهر (مقاس من اختيارك)',
      '10 دفاتر (جودة عادية)',
      'مجموعة أقلام أساسية',
      'مقلمة',
    ],
    popular: false,
  },
  {
    name: 'الباقة المتكاملة',
    price: '110,000 د.ع',
    features: [
      'حقيبة ظهر متينة (مقاس من اختيارك)',
      '15 دفتر (ورق عالي الجودة)',
      'مجموعة أقلام وألوان كاملة',
      'مقلمة عالية الجودة',
      'صندوق طعام + قارورة ماء',
    ],
    popular: true,
  },
  {
    name: 'الباقة المتميزة',
    price: '150,000 د.ع',
    features: [
      'حقيبة ظهر فاخرة (مقاس من اختيارك)',
      '20 دفتر (أفضل أنواع الورق)',
      'مجموعة أدوات فنية احترافية',
      'مقلمة فاخرة + اكسسوارات',
      'صندوق طعام + قارورة ماء حرارية',
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            اختر الباقة التي تناسبك
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ثلاث باقات مصممة بعناية لتلبية كافة الاحتياجات والميزانيات.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex flex-col ${pkg.popular ? 'border-2 border-primary shadow-lg' : ''}`}
            >
              {pkg.popular && (
                <div className="text-center py-2 bg-primary text-primary-foreground font-semibold rounded-t-lg">
                  الأكثر طلباً
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 ml-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                    <a href="#order-form">اختر هذه الباقة</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
