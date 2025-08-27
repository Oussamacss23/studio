import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'أم أحمد',
    avatar: 'أ أ',
    title: 'ولية أمر',
    quote: 'خدمة ممتازة! وفرتوا علي وقت وجهد كبير. الباقة كانت متكاملة وجودتها عالية جداً. شكراً رسيل.',
    rating: 5,
  },
  {
    name: 'علي محمد',
    avatar: 'ع م',
    title: 'طالب',
    quote: 'الحقيبة والدفاتر نفس ما ردت بالضبط. كل شيء كان مرتب وجاهز. أصدقائي كلهم سألوني منين جبتها.',
    rating: 5,
  },
  {
    name: 'سارة عبدالله',
    avatar: 'س ع',
    title: 'ولية أمر',
    quote: 'أفضل قرار اتخذته للتحضير للمدرسة. التوصيل كان سريع والمقاس مناسب تماماً لابني. أنصح بها بشدة.',
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            يثق بنا أولياء الأمور والطلاب
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            آراء عملائنا هي شهادة على جودة خدماتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="italic text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-4 flex items-center">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
