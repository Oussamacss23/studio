import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const sizes = [
  {
    size: '14"',
    age: '13-14 سنة',
    grade: 'الأول والثاني متوسط',
    weight: 'حتى 6 كجم',
    image: 'https://picsum.photos/400/300?random=1',
    hint: 'teenager backpack',
  },
  {
    size: '16"',
    age: '15-16 سنة',
    grade: 'الثالث والرابع متوسط',
    weight: 'حتى 8 كجم',
    image: 'https://picsum.photos/400/300?random=2',
    hint: 'student bag',
  },
  {
    size: '17"',
    age: '17+ سنة',
    grade: 'الإعدادية وما فوق',
    weight: 'حتى 10 كجم',
    image: 'https://picsum.photos/400/300?random=3',
    hint: 'large backpack',
  },
];

const SizeGuide = () => {
  return (
    <section id="size-guide" className="bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            دليل اختيار المقاس المناسب
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            لضمان راحة الطالب، اختر المقاس بناءً على العمر والمرحلة الدراسية.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sizes.map((item) => (
            <Card key={item.size} className="overflow-hidden text-center">
              <div className="bg-muted">
                <Image
                  src={item.image}
                  alt={`حقيبة ظهر مقاس ${item.size}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  data-ai-hint={item.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{item.size}</CardTitle>
                <CardDescription className="font-semibold text-lg">{item.age}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.grade}</p>
                <p className="mt-2 text-sm text-muted-foreground">الحمولة الموصى بها: {item.weight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
