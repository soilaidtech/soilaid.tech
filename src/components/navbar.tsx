import Logo from './logo'

export default function Navbar() {
	return (
		<nav className="navbar bg-base-100 w-full flex px-4">
			<div className="flex-start">
				<Logo />
			</div>
			<div className="flex-center flex-1">
				<ul className="menu menu-horizontal px-6 header-menu gap-6 text-lg font-normal">
					<li>Home</li>
					<li>Who We Are</li>
					<li>Our Partners</li>
					<li>Our Work</li>
					<li>Our Blog</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className="flex-end px-4 gap-6">
				<button className="btn btn-soilaid">Join Waiting List</button>
			</div>
		</nav>
	)
}
