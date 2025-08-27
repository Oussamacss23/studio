import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, PhoneCall, Truck } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'املأ الاستمارة',
    description: 'اختر الباقة والمقاس المناسب، ثم املأ معلوماتك في استمارة الطلب.',
  },
  {
    icon: <PhoneCall className="h-10 w-10 text-primary" />,
    title: 'نتصل بك للتأكيد',
    description: 'سيقوم فريقنا بالتواصل معك لتأكيد تفاصيل الطلب والعنوان.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'الدفع عند الاستلام',
    description: 'استلم طلبيتك عند باب بيتك وادفع المبلغ للمندوب.',
  },
];

const HowToOrder = () => {
  return (
    <section id="how-to-order" className="bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            كيف تطلب باقتك؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ثلاث خطوات بسيطة وتصلك الباقة لباب بيتك.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-headline mb-2">{step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
