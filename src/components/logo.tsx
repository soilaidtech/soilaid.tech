import Image from 'next/image'

export default function Logo() {
	return (
		<div className="flex items-center">
			<Image
				src="/apple-icon.png"
				width={40}
				height={40}
				alt="SOILAID LOGO"
			/>
			<h1>
				<span className="font-extrabold">SOILAID</span> <br />
				<span> Technologies</span>
			</h1>
		</div>
	)
}
