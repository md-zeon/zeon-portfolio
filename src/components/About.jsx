import { motion } from "framer-motion";
import { FaChess } from "react-icons/fa";
import { LuCode, LuHeart, LuGamepad2, LuMusic } from "react-icons/lu";

const About = () => {
	const interests = [
		{ icon: LuCode, label: "Coding", description: "Building full-stack apps" },
		{ icon: LuGamepad2, label: "Gaming", description: "Mostly strategy and RPGs" },
		{ icon: LuMusic, label: "Music", description: "Lo-fi, chillhop, and game OSTs" },
		{ icon: FaChess, label: "Chess", description: "Helps me think ahead" },
	];

	return (
		<section
			id='about'
			className='py-20 bg-card/50'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl lg:text-5xl font-bold text-foreground mb-4'>About Me</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Passionate about creating digital experiences that make a difference
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-16 items-start'>
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='space-y-8'
					>
						<div className='space-y-6'>
							<div className='bg-card border border-border rounded-xl p-6'>
								<h3 className='text-xl font-bold text-primary mb-3 flex items-center gap-2'>
									<LuCode className='w-5 h-5' />
									My Programming Journey
								</h3>
								<p className='text-foreground leading-relaxed mb-4'>
									👋 I'm <span className='font-bold text-primary'>Zeanur Rahaman Zeon</span>, a passionate full-stack
									developer from Bangladesh. My coding journey began during my first year at Northern University with
									with C++ and Data Structures & Algorithms which built my problem-solving foundation.
								</p>
								<p className='text-foreground leading-relaxed'>
									In my second year, I got into web development to see how those concepts could be applied visually.
									Then I discovered the magic of turning ideas into interactive web applications. That's when I
									discovered the MERN stack — and I've been hooked ever since.
								</p>
							</div>

							<div className='bg-card border border-border rounded-xl p-6'>
								<h3 className='text-xl font-bold text-primary mb-3 flex items-center gap-2'>
									<LuHeart className='w-5 h-5' />
									What I Love Doing
								</h3>
								<p className='text-foreground leading-relaxed mb-4'>
									I enjoy building things that feel useful. It feels great to make something that others can actually
									use.
								</p>
								<p className='text-foreground leading-relaxed'>
									I like working across both frontend and backend because it gives me full control of the product.
									Seeing an idea go from concept to reality is what keeps me motivated.
								</p>
							</div>

							<div className='bg-card border border-border rounded-xl p-6'>
								<h3 className='text-xl font-bold text-primary mb-3'>Beyond the Code</h3>
								<p className='text-foreground leading-relaxed mb-4'>
									When I'm not immersed in code, you'll find me focusing on my academic studies and sometimes you might
									see me doing part time tuition. It keeps me balanced and helps me manage time better
								</p>
								<p className='text-foreground leading-relaxed'>
									In my free time, I enjoy music, games, anime, and chess — they help me relax and stay creative. These
									hobbies give me a break and often shape how I approach problems.
								</p>
							</div>
						</div>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
							className='gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200'
						>
							Let's Connect
						</motion.button>
					</motion.div>

					{/* Right Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='space-y-8'
					>
						{/* Interests */}
						<div className='bg-card border border-border rounded-xl p-6'>
							<h3 className='text-xl font-bold text-primary mb-6'>My Interests</h3>
							<div className='grid grid-cols-2 gap-4'>
								{interests.map(({ icon: Icon, label, description }, index) => (
									<motion.div
										key={label}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.05 }}
										className='text-center p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-200'
									>
										<Icon className='w-6 h-6 text-primary mx-auto mb-2' />
										<h4 className='font-semibold text-foreground text-sm mb-1'>{label}</h4>
										<p className='text-muted-foreground text-xs'>{description}</p>
									</motion.div>
								))}
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className='bg-card border border-border rounded-xl p-6 flex flex-col justify-between h-full'
						>
							<div>
								<h3 className='text-xl font-bold text-primary mb-4'>Coming Soon</h3>
								<p className='text-muted-foreground text-sm leading-relaxed'>
									This space is reserved for a timeline, featured achievements, or something fun. I’m still deciding
									what makes the most impact here.
								</p>
							</div>

							<div className='mt-6'>
								<a
									href='#contact'
									className='text-sm text-primary hover:underline transition duration-150'
								>
									Got ideas? Let's chat →
								</a>
							</div>
						</motion.div>

						{/* Quote */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className='bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 text-center'
						>
							<p className='text-foreground italic text-lg mb-3'>
								"Programs must be written for people to read, and only incidentally for machines to execute."
							</p>
							<p className='text-muted-foreground text-sm'>- Harold Abelson</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
