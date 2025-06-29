import { FaDownload } from "react-icons/fa";

const Navbar = () => {
	const scrollTo = (id) => {
		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	const navLinks = ["home", "about", "skills", "education", "projects", "contact"];
	const links = (
		<>
			{navLinks.map((link) => {
				const isHome = link === "home";
				const linkId = isHome ? "#" : `#${link}`;
				return (
					<li key={link}>
						<a
							href={`${linkId}`}
							onClick={(e) => {
								e.preventDefault();
								scrollTo(isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : linkId.slice(1));
							}}
							className='capitalize'
						>
							{link}
						</a>
					</li>
				);
			})}
		</>
	);
	return (
		<div className='navbar max-w-7xl mx-auto px-10'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost pl-0 lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{" "}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{links}
					</ul>
				</div>
				<a
					href='#'
					className='text-xl text-gradient-primary font-black'
				>
					Zeon.
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{links}</ul>
			</div>
			<div className='navbar-end'>
				<a className='btn btn-primary rounded'>
					<FaDownload /> Download CV
				</a>
			</div>
		</div>
	);
};

export default Navbar;
