import AboutUsComponent from '@/components/about-us';
import Header from '@/components/header';
import HeroComponent from '@/components/hero';
import OurProcessComponent from '@/components/our-process';
import ThemeToggleButton from '@/components/ThemeToggleButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroComponent />
      <AboutUsComponent />
      <OurProcessComponent />
      <ThemeToggleButton />
    </div>
  );
}
