import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
	return (
		<nav className="navbar items-center bg-base-100 w-full flex px-4 gap-6 md:gap-12">
			<div className="navbar-start">
				<Logo />
			</div>
			<div className="navbar-center flex-1 pr-12 md:pr-16">
				<ul className="menu menu-horizontal flex flex-row flex-nowrap items-center gap-3 px-4 mr-6 md:mr-12">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">Who We Are</Link>
					</li>
					<li>
						<Link href="/partners">Our Partners</Link>
					</li>
					<li>
						<Link href="/work">Our Work</Link>
					</li>
					<li>
						<Link href="/blog">Our Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end flex gap-4 px-4 ml-6 md:ml-12">
				<button type="button" className="btn btn-outline">
					Read Newsletter
				</button>
				<button type="button" className="btn btn-primary">
					Join Waiting List
				</button>
			</div>
		</nav>
	)
}
