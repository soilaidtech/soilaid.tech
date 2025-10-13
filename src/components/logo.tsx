import Image from 'next/image'
import logo from '@/assets/soilaid-logo-green.svg'

export default function Logo() {
	return (
		<div className="flex items-center logo-container">
			<Image src={logo} alt="SOILAID LOGO" />
		</div>
	)
}
