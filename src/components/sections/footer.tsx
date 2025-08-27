import { Smartphone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="font-headline text-xl font-bold text-foreground mb-4">رسيل</h3>
            <p>مهمتنا هي تسهيل التحضير للعام الدراسي من خلال توفير باقات متكاملة تصل إلى باب منزلك.</p>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold text-foreground mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Smartphone className="h-5 w-5" />
                <span>+964 770 123 4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@raseel.iq</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-5 w-5" />
                <span>بغداد, العراق</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold text-foreground mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary">شروط الاستخدام</a></li>
              <li><a href="#faq" className="hover:text-primary">الأسئلة الشائعة</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>&copy; {currentYear} رسيل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
