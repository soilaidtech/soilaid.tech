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
		<div className="landing-page flex items-center justify-center m-0 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<div className="flex flex-col items-center text-center gap-6 max-w-2xl">
				<Image
					src="/apple-icon.png"
					height={200}
					width={200}
					alt="logo"
					className="logo"
				/>
				<h1 className="landing-page-heading">SoilAid Technologies</h1>
				<p>
					Designing the Future of Clean Cities and Regenerative
					Agriculture
				</p>
				<div className="flex gap-6 mt-4 justify-center items-center">
					<a
						href="https://www.facebook.com/soilaidtech/"
						target="_blank"
						rel="noreferrer"
					>
						<Lineicons
							name={FacebookOutlined}
							size={40}
							icon={FacebookOutlined}
						/>
					</a>
					<a href="https://x.com/soilaidtech">
						<Lineicons
							name={XOutlined}
							size={40}
							icon={XOutlined}
						/>
					</a>
					<a href="https://ke.linkedin.com/company/soilaidtech">
						<Lineicons
							name={LinkedinOutlined}
							size={40}
							icon={LinkedinOutlined}
						/>
					</a>

					<a href="https://www.instagram.com/soilaid.tech/">
						<Lineicons
							name={InstagramOutlined}
							size={40}
							icon={InstagramOutlined}
						/>
					</a>
					<a href="https://www.tiktok.com/@soilaid.tech">
						<Lineicons
							name={TiktokOutlined}
							size={40}
							icon={TiktokOutlined}
						/>
					</a>
					<a href="mailto:soilaidtech@gmail.com">
						<Lineicons
							name={Envelope1Outlined}
							size={40}
							icon={Envelope1Outlined}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
