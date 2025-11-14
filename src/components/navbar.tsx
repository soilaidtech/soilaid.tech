import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
	return (
		<nav className="nav-header" role="navigation" aria-label="Primary">
			<div className="navbar-logo-container">
				<Logo />
			</div>
			<div className="navbar-menu-container ">
				<ul className="menu menu-horizontal items-center menu-list">
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
			<div className="navbar-buttons-container">
				<Link href="/newsletter" className="btn btn-outline">
					Read Newsletter
				</Link>
				<Link href="waitlist" className="btn btn-primary">
					Join Waiting List
				</Link>
			</div>
		</nav>
	)
}
