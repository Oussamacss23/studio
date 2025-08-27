import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShieldCheck, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-card py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl text-center md:text-right">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              كل مستلزمات الدخول المدرسي... في طلب واحد!
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:max-w-md sm:mx-auto md:mr-0">
              نجهّز الحقيبة بالمقاس الصحيح وبجودة مضمونة، ونوصلها لباب بيتك. لا مزيد من جولات السوق المتعبة.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
              <Button size="lg" asChild>
                <a href="#order-form">
                  اطلب الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                شاهد الباقات
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
              <Badge variant="secondary" className="gap-2 py-2 px-4 rounded-full">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <span>استبدال مجاني للمقاس خلال 7 أيام</span>
              </Badge>
              <Badge variant="secondary" className="gap-2 py-2 px-4 rounded-full">
                <Truck className="h-4 w-4 text-primary" />
                <span>توصيل سريع خلال 48 ساعة</span>
              </Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/500"
              alt="طالب سعيد مع حقيبة ظهر جديدة"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
              data-ai-hint="happy student backpack"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
