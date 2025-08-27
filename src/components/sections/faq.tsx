import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'ما هي سياسة الضمان والاستبدال؟',
    answer: 'نقدم ضمان استبدال مجاني للمقاس خلال 7 أيام من تاريخ الاستلام. يجب أن تكون المنتجات بحالتها الأصلية. بالنسبة للجودة، جميع منتجاتنا مكفولة ضد عيوب التصنيع.',
  },
  {
    question: 'هل تقومون بالتوصيل لجميع المحافظات؟',
    answer: 'نعم، نوفر خدمة التوصيل لجميع محافظات العراق. قد تختلف مدة التوصيل قليلاً حسب المنطقة.',
  },
  {
    question: 'كم من الوقت يستغرق وصول الطلب؟',
    answer: 'عادةً ما يستغرق الطلب من 24 إلى 72 ساعة للوصول داخل بغداد، ومن 2 إلى 5 أيام لباقي المحافظات.',
  },
  {
    question: 'هل يمكنني تعديل محتويات الباقة؟',
    answer: 'الباقات مصممة مسبقاً لتوفير أفضل قيمة. حالياً لا يمكن تعديل المحتويات، ولكن يمكنك إضافة ملاحظات عند الطلب وسنحاول المساعدة قدر الإمكان.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            هل لديك أسئلة أخرى؟ لا تتردد في التواصل معنا.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg text-right font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
