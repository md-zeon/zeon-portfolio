import { motion } from "motion/react";
import { FaChess } from "react-icons/fa";
import { LuCode, LuHeart, LuGamepad2, LuMusic } from "react-icons/lu";
import SectionTitle from "../../components/SectionTitle";
import AboutInfoCard from "../../components/About/AboutInfoCard";
import InterestCard from "../../components/About/InterestCard";
import QuoteBox from "../../components/About/QuoteBox";
// import ComingSoonBox from "../../components/About/ComingSoonBox";
import FloatingShapes from "../../components/FloatingShapes";
import LearningAndGoalsBox from "../../components/About/LearningAndGoalsBox";

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
			className='py-20 max-w-7xl mx-auto'
		>
			<div className='px-4 sm:px-6 lg:px-8'>
				<SectionTitle
					title='About Me'
					subtitle='Passionate about creating digital experiences that make a difference'
				/>

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
							<AboutInfoCard
								icon={LuCode}
								title='My Programming Journey'
								paragraphs={[
									<>
										👋 I'm <span className='font-bold text-primary'>Zeanur Rahaman Zeon</span>, a passionate full-stack
										developer from Bangladesh. My coding journey began during my first year at Northern University with
										C++ and Data Structures & Algorithms which built my problem-solving foundation.
									</>,
									<>
										In my second year, I got into web development to see how those concepts could be applied visually.
										Then I discovered the magic of turning ideas into interactive web applications. That's when I
										discovered the MERN stack — and I've been hooked ever since.
									</>,
								]}
							/>
							<AboutInfoCard
								icon={LuHeart}
								title='What I Love Doing'
								paragraphs={[
									<>
										I enjoy building things that feel useful. It feels great to make something that others can actually
										use.
									</>,
									<>
										I like working across both frontend and backend because it gives me full control of the product.
										Seeing an idea go from concept to reality is what keeps me motivated.
									</>,
								]}
							/>

							<AboutInfoCard
								title='Beyond the Code'
								paragraphs={[
									<>
										When I'm not immersed in code, you'll find me focusing on my academic studies and sometimes you
										might see me doing part time tuition. It keeps me balanced and helps me manage time better
									</>,
									<>
										In my free time, I enjoy music, games, anime, and chess — they help me relax and stay creative.
										These hobbies give me a break and often shape how I approach problems.
									</>,
								]}
							/>
						</div>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
							className='gradient-primary cursor-pointer px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200'
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
						<div className='border rounded-xl p-6'>
							<h3 className='text-xl font-bold text-primary mb-6'>My Interests</h3>
							<div className='grid grid-cols-2 gap-4'>
								{interests.map(({ icon, label, description }, index) => (
									<InterestCard
										key={label}
										icon={icon}
										label={label}
										description={description}
										delay={index * 0.1}
									/>
								))}
							</div>
						</div>

						{/* LearningAndGoalsBox */}
						<LearningAndGoalsBox />
						
						{/* Coming Soon */}
						{/* <ComingSoonBox /> */}

						{/* Quote */}
						<QuoteBox
							quote='Programs must be written for people to read, and only incidentally for machines to execute.'
							author='Harold Abelson'
						/>
					</motion.div>
				</div>
			</div>
			<div className="relative mt-20">
				<FloatingShapes />
			</div>
		</section>
	);
};

export default About;
