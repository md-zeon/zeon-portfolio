import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-base-200 text-base-content border-t border-base-300'>
			<div className='max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left'>
				<div>
					<h2 className='text-xl font-bold text-gradient-primary mb-2'>Zeon.</h2>
					<p className='text-sm'>
						Full Stack Developer <br />
						Based in Bangladesh 🇧🇩 <br />
					</p>
				</div>

				<div>
					<h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
					<ul className='space-y-1 text-sm'>
						<li><a href='#about' className='hover:underline'>About</a></li>
						<li><a href='#skills' className='hover:underline'>Skills</a></li>
						<li><a href='#education' className='hover:underline'>Education</a></li>
						<li><a href='#projects' className='hover:underline'>Projects</a></li>
						<li><a href='#contact' className='hover:underline'>Contact</a></li>
					</ul>
				</div>

				{/* Column 3: Contact & Socials */}
				<div>
					<h3 className='text-lg font-semibold mb-2'>Connect</h3>
					<div className='flex justify-center md:justify-start gap-5 text-xl'>
						<a href='https://github.com/md-zeon' target='_blank' rel='noreferrer' className='hover:text-gradient-primary'>
							<FaGithub />
						</a>
						<a href='https://linkedin.com/in/your-username' target='_blank' rel='noreferrer' className='hover:text-gradient-primary'>
							<FaLinkedin />
						</a>
						<a href='mailto:zeon.cse@email.com' className='hover:text-gradient-primary'>
							<FaEnvelope />
						</a>
					</div>
				</div>
			</div>

			<div className='text-center text-xs py-4 border-t border-base-300'>
				© {new Date().getFullYear()} Zeon. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
