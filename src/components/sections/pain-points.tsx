import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, CheckCircle, Clock, Map, Package, Search, ShoppingCart, SlidersHorizontal, XCircle } from 'lucide-react';

const problems = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-destructive" />,
    problem: 'ازدحام الأسواق',
    solutionIcon: <CheckCircle className="h-8 w-8 text-green-500" />,
    solution: 'اطلب من راحة بيتك',
  },
  {
    icon: <Clock className="h-8 w-8 text-destructive" />,
    problem: 'ضياع الوقت والجهد',
    solutionIcon: <CheckCircle className="h-8 w-8 text-green-500" />,
    solution: 'نوفر عليك عناء البحث',
  },
  {
    icon: <Search className="h-8 w-8 text-destructive" />,
    problem: 'صعوبة إيجاد كل المستلزمات',
    solutionIcon: <CheckCircle className="h-8 w-8 text-green-500" />,
    solution: 'كل ما تحتاجه في باقة واحدة',
  },
  {
    icon: <SlidersHorizontal className="h-8 w-8 text-destructive" />,
    problem: 'الحيرة في اختيار المقاس',
    solutionIcon: <CheckCircle className="h-8 w-8 text-green-500" />,
    solution: 'دليل مقاسات واضح وسهل',
  },
];

const PainPoints = () => {
  return (
    <section id="solutions" className="bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            لماذا تختار باقتنا؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نحن نتفهم تحديات التحضير للمدرسة ونقدم الحل الأمثل.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Card className="w-full">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{item.problem}</CardTitle>
                </CardContent>
              </Card>
              <ArrowDown className="my-4 h-8 w-8 text-primary" />
              <Card className="w-full bg-primary/10">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    {item.solutionIcon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg text-primary">{item.solution}</CardTitle>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
