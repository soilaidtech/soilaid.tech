import Image from 'next/image';

export default function OurProductsComponent() {
	return (
		<div>
			<h2>Our Products</h2>
			<p>Our Products </p>
			<p>We Promote Sustainable Waste Recycling in Kenya</p>
			<div>
				<div>
					<Image
						src="/garbage-truck-trash-svgrepo-com 1.png"
						height={100}
						width={100}
						alt="garbage-truck-trash-svg"
					/>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
