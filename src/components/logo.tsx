import Image from 'next/image'
import logo from '@/assests/soilaid-logo.svg'

export default function Logo() {
	return (
		<div className="flex items-center logo-container">
			<Image src={logo} width={300} height={300} alt="SOILAID LOGO" />
		</div>
	)
}
