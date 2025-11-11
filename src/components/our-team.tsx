import Image from 'next/image'
import garbageTruckImage from '../../public/assets/images/garbage-truck-trash-svgrepo-com 1.png'

export default function OurTeamComponent() {
	return (
		<div>
			<h2>Meet the experts behind your success</h2>
			<div>
				<Image
					src={garbageTruckImage}
					height={100}
					width={100}
					alt="garbage-truck-trash-svg"
				/>

				<Image
					src={garbageTruckImage}
					height={100}
					width={100}
					alt="garbage-truck-trash-svg"
				/>
				<Image
					src={garbageTruckImage}
					height={100}
					width={100}
					alt="garbage-truck-trash-svg"
				/>
				<Image
					src={garbageTruckImage}
					height={100}
					width={100}
					alt="garbage-truck-trash-svg"
				/>
			</div>
		</div>
	)
}
