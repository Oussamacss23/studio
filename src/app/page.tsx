import Hero from '@/components/sections/hero';
import SocialProof from '@/components/sections/social-proof';
import PainPoints from '@/components/sections/pain-points';
import Packages from '@/components/sections/packages';
import SizeGuide from '@/components/sections/size-guide';
import WhatInside from '@/components/sections/what-inside';
import HowToOrder from '@/components/sections/how-to-order';
import Faq from '@/components/sections/faq';
import OrderForm from '@/components/sections/order-form';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PainPoints />
      <Packages />
      <SizeGuide />
      <WhatInside />
      <HowToOrder />
      <Faq />
      <OrderForm />
      <Footer />
    </>
  );
}
