import Image from 'next/image'
import garbageTruckImage from '../../public/assets/images/garbage-truck-trash-svgrepo-com 1.png'

export default function OurProductsComponent() {
	return (
		<div>
			<h2>Our Products</h2>
			<p>Our Products </p>
			<p>We Promote Sustainable Waste Recycling in Kenya</p>
			<div>
				<div>
					<Image
						src={garbageTruckImage}
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
