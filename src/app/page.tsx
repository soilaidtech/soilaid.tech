import Image from 'next/image'
import { Lineicons } from '@lineiconshq/react-lineicons'
import {
	FacebookOutlined,
	XOutlined,
	LinkedinOutlined,
	InstagramOutlined,
	TiktokOutlined,
	Envelope1Outlined,
} from '@lineiconshq/free-icons'

export default function Home() {
	return (
		<main className="relative flex items-center justify-center text-center min-h-screen w-full overflow-hidden bg-[#0D1321] text-[#DFE5C9]">
			<div
				className="absolute inset-0 -z-20 bg-cover bg-center"
				style={{
					backgroundImage: 'url(/images/landing-bg-image.png)',
				}}
			>
				<div
					className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D1321]/80 via-[#0D1321]/70 to-[#0D1321]/90"
					aria-hidden="true"
				></div>
			</div>
			<section className="mx-auto max-w-xl px-6 py-16">
				<div className="mx-auto mb-6 flex items-center justify-center">
					<div className="rounded-2xl bg-[#CFC5B6]/90 p-4 shadow-lg ring-1 ring-black/5">
						<Image
							src="/images/soilaid-logo.svg"
							height={160}
							width={160}
							alt="SoilAid Tech logo"
							priority
							className="h-24 w-24 sm:h-40 sm:w-40"
						/>
					</div>
				</div>
				<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
					Clean Cities, Healthy Farms
				</h1>
				<p className="mt-3 text-sm sm:text-base text-[#E8ECD9]/90">
					Our full site is growing, follow us as we build tech for
					cleaner cities and regenerative agriculture.
				</p>
				<div className="mt-6 flex items-center justify-center flex-wrap gap-4 sm:gap-5">
					<a
						href="https://www.facebook.com/soilaidtech/"
						target="_blank"
						rel="noreferrer"
					>
						<Lineicons
							name={FacebookOutlined}
							size={40}
							icon={FacebookOutlined}
							className="icon"
						/>
					</a>
					<a href="https://x.com/soilaidtech">
						<Lineicons
							name={XOutlined}
							size={40}
							icon={XOutlined}
							className="icon"
						/>
					</a>
					<a href="https://ke.linkedin.com/company/soilaidtech">
						<Lineicons
							name={LinkedinOutlined}
							size={40}
							icon={LinkedinOutlined}
							className="icon"
						/>
					</a>

					<a href="https://www.instagram.com/soilaid.tech/">
						<Lineicons
							name={InstagramOutlined}
							size={40}
							icon={InstagramOutlined}
							className="icon"
						/>
					</a>
					<a href="https://www.tiktok.com/@soilaid.tech">
						<Lineicons
							name={TiktokOutlined}
							size={40}
							icon={TiktokOutlined}
							className="icon"
						/>
					</a>
					<a href="mailto:soilaidtech@gmail.com">
						<Lineicons
							name={Envelope1Outlined}
							size={40}
							icon={Envelope1Outlined}
							className="icon"
						/>
					</a>
				</div>

				<p className="mt-6 text-xs text-[#DFE5C9]/60">
					© {new Date().getFullYear()} SoilAid Technologies
				</p>
			</section>
		</main>
	)
}
