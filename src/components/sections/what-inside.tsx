import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const contents = {
  'الباقة الأساسية': [
    'حقيبة ظهر عالية الجودة',
    '10 دفاتر مدرسية',
    'مجموعة أقلام حبر (أزرق، أسود، أحمر)',
    'مجموعة أقلام رصاص مع ممحاة',
    'مسطرة 30 سم',
    'مقلمة قماشية',
  ],
  'الباقة المتكاملة': [
    'كل محتويات الباقة الأساسية',
    '+ 5 دفاتر إضافية (المجموع 15)',
    '+ علبة ألوان خشبية (12 لون)',
    '+ علبة ألوان مائية',
    '+ دفتر رسم',
    '+ قارورة ماء',
    '+ صندوق طعام (Lunch Box)',
  ],
  'الباقة المتميزة': [
    'كل محتويات الباقة المتكاملة',
    '+ حقيبة ظهر بتصميم فاخر',
    '+ 5 دفاتر إضافية (المجموع 20)',
    '+ أدوات هندسية متكاملة',
    '+ قلم حبر جاف فاخر',
    '+ قارورة ماء حافظة للحرارة',
  ],
};

const WhatInside = () => {
  return (
    <section id="contents" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            ماذا يوجد داخل الحقيبة؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            قائمة محتويات كل باقة بالتفصيل.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          {Object.entries(contents).map(([packageName, items], index) => (
            <AccordionItem key={packageName} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-xl font-headline">{packageName}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pr-6 space-y-2">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WhatInside;
