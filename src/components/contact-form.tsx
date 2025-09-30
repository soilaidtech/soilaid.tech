export default function ContactForm() {
	return (
		<main>
			<div>
				<form>
					<input
						type="text"
						id="first_name"
						name="fname"
						placeholder="First Name"
					/>
					<input
						type="text"
						id="last_name"
						name="lname"
						placeholder="Last Name"
					/>
					<input
						type="text"
						id="subject"
						name="subject"
						placeholder="Subject"
					/>
					<input
						type="textbox"
						id="visitor_comment"
						name="visitor_comment"
						placeholder="Your Comment"
					/>
					<button>Submit Message</button>
				</form>
			</div>
		</main>
	)
}
