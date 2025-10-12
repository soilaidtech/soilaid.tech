import Logo from './logo'

export default function Navbar() {
	return (
		<nav className="navbar bg-base-100 w-full flex px-4">
			<div className="flex-start">
				<Logo />
			</div>
			<div className="flex-center flex-1">
				<ul className="menu menu-horizontal header-menu">
					<li>Home</li>
					<li>Who We Are</li>
					<li>Our Partners</li>
					<li>Our Work</li>
					<li>Our Blog</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className="flex-end px-4 gap-4">
				<button className="btn btn-outline px-4 gap-2">
					Join Newsletter
				</button>
				<button className="btn btn-primary px-4 gap-2">
					Join Waiting List
				</button>
			</div>
		</nav>
	)
}
