import AboutUsComponent from '@/components/about-us'
import ContactUsComponent from '@/components/contact-us'
import Header from '@/components/header'
import HeroComponent from '@/components/hero'
import OurProductsComponent from '@/components/our-products'
import OurTeamComponent from '@/components/our-team'
import ThemeToggleButton from '@/components/ThemeToggleButton'

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<HeroComponent />
			<AboutUsComponent />
			<OurProductsComponent />
			<OurTeamComponent />
			<ContactUsComponent />
			<ThemeToggleButton />
		</div>
	)
}
