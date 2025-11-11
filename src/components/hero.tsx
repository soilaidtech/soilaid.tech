import Image from 'next/image'
import { CircleArrowDown } from 'lucide-react'
import bannerImage1 from '../../public/assets/images/banner-image-1.png'
import bannerImage2 from '../../public/assets/images/banner-image-2.jpg'
import dotOrnamentImage from '../../public/assets/images/dot-ornament.svg'
import spiralArrowImage from '../../public/assets/images/group-8.svg'
import bigCircularLinesImage from '../../public/assets/images/big_circular_lines.svg'
import group9Image from '../../public/assets/images/group-9.svg'

export default function HeroComponent() {
	return (
		<section className="relative overflow-hidden bg-[var(--surface-bg)]">
			<div className="mx-auto max-w-[var(--max-width)] px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-12">
					<div className="relative mx-auto lg:mx-0 lg:col-span-4">
						<div className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] overflow-hidden rounded-full shadow">
							<Image
								src={bannerImage1}
								alt="banner image 1"
								fill
								priority
								className="object-cover"
							/>
							<Image
								src={dotOrnamentImage}
								alt="banner image 1"
								width={120}
								height={120}
								className="pointer-events-none absolute -bottom-10 -left-8 -z-10 opacity-70"
							/>
							<Image
								src={bigCircularLinesImage}
								alt="banner image 1"
								width={700}
								height={700}
								className="pointer-events-none absolute -left-24 -top-20 -z-10 opacity-80"
							/>
						</div>

						<div className="lg:col-span-5">
							<h1 className="text-center font-black leading-tight text-[var(--text-primary)] [font-family: 'DM_Sans', Helvetica, sans-serif] text-[clamp(2.2rem,4vw+1rem, 4.2rem)]">
								Sustainable Waste
								<br className="hidden sm:block" />
								Solutions for a
								<br className="hidden sm:block" />
								<span className="mt-2 inline-block rounded-lg bg-[var(--brand-dark-green)] px-4 py-2 text-[clamp(1.6rem, 2.2vw+1rem, 3rem)] font-extrabold text-[var(--brand-light-green)] shadow-md">
									Greener Future
								</span>
							</h1>
							<Image
								src={spiralArrowImage}
								alt="banner image 1"
								width={230}
								height={150}
								className="mx-auto mt-4 opacity-80"
							/>
							<p className="mx-auto mt-6 max-w-[60ch] text-center text-base sm:text-lg text-[var(--ink)]">
								SoilAid Technologies, founded in 2023 in
								Kirinyaga County, integrates waste and farm
								management technologies to improve soil health,
								reduce waste, and foster environmental
								sustainability in Kenya.
							</p>
						</div>
						<div className="relative mx-auto lg:mx-0 lg:col-span-3">
							<div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[380px] overflow-hidden rounded-full shadow">
								<Image
									src={bannerImage2}
									alt="hands planting a tree"
									fill
									priority
									className="object-cover"
								/>
							</div>
							<Image
								src={group9Image}
								alt="banner image 1"
								width={220}
								height={220}
								aria-hidden
								className="pointer-events-none absolute -right-10 -top-6 -z-10 opacity-70"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 -bottom-6 flex justify-center">
				<CircleArrowDown className="h-12 w-12 opacity-80 text-[var(--brand-dark-green)]" />
			</div>
		</section>
	)
}
