import { Handshake, Smile } from 'lucide-react'

export default function ContactUsComponent() {
	return (
		<main>
			<div>
				<p>Contact Us</p>
				<h2>Let us work together for a greener tomorrow</h2>
				<button>Email Us</button>
			</div>
			<div>
				<div>
					<p>Let’s Build an Awesome Project Together</p>
					<p>
						Each demo built with Teba will look different. You can
						customize almost anything in the appearance of your
						website with only a few clicks. .
					</p>
					<div>
						<Handshake />
						<p>Call Us</p>
						<p>+254-722-774-460</p>
					</div>
					<div>
						<Smile />
						<p>Email Us</p>
						<p>soilaidtech@gmail.com</p>
					</div>
				</div>
			</div>
		</main>
	)
}
