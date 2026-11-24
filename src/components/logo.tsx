import Image from 'next/image'

export default function Logo() {
	return (
		<div className="flex items-center ">
			<Image
				src="/images/soilaid-logo.svg"
				priority
				width={160}
				height={40}
				alt="SoilAid Logo"
			/>
		</div>
	)
}
