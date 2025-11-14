import Image from 'next/image'
import logo from '@/assets/soilaid-logo-green.svg'
import Link from 'next/link'

export default function Logo() {
	return (
		<div className="flex items-center ">
			<Link href="/" className="flex items-center">
				<Image
					src={logo}
					priority
					width={160}
					height={40}
					alt="SoilAid Logo"
				/>
			</Link>
		</div>
	)
}
