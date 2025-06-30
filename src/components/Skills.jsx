import { motion } from "motion/react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiDaisyui, SiExpress, SiGit, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const skills = [
	{ icon: () => <span className='text-4xl font-bold text-blue-500'>C</span>, name: "C", color: "text-blue-500" },
	{ icon: () => <span className='text-3xl font-bold text-blue-700'>C++</span>, name: "C++", color: "text-blue-700" },
	{ icon: IoLogoHtml5, name: "HTML", color: "text-orange-500" },
	{ icon: IoLogoCss3, name: "CSS", color: "text-blue-500" },
	{ icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
	{ icon: IoLogoReact, name: "React", color: "text-cyan-400" },
	{ icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
	{ icon: SiDaisyui, name: "DaisyUI", color: "text-purple-400" },
	{ icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
	{ icon: SiExpress, name: "Express.js", color: "text-gray-700" },
	{ icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
	{ icon: IoLogoFirebase, name: "Firebase", color: "text-yellow-500" },
	{ icon: SiJsonwebtokens, name: "JWT", color: "text-red-500" },
	{ icon: SiGit, name: "Git", color: "text-orange-600" },
];

const duplicatedSkills = [...skills, ...skills];

const SkillRow = ({ reverse = false, duration = 50 }) => (
	<div className='overflow-hidden'>
		<motion.div
			className='flex w-max gap-6 py-4'
			animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
			transition={{ repeat: Infinity, duration, ease: "linear" }}
		>
			{duplicatedSkills.map(({ icon: Icon, name, color }, i) => (
				<motion.div
					key={`${reverse ? "rev" : "fwd"}-${i}`}
					whileHover={{ y: -12, scale: 1.05, rotateY: 10 }}
					className='w-36 h-36 min-w-36 flex flex-col justify-center items-center gap-3 border rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 group cursor-pointer'
				>
					<Icon className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`} />
					<span className='text-sm text-base-content font-semibold px-2 group-hover:text-primary transition-colors duration-200'>
						{name}
					</span>
					<div
						className={`w-12 h-1 bg-gradient-to-r ${color.replace(
							"text-",
							"from-",
						)} to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
					/>
				</motion.div>
			))}
		</motion.div>
	</div>
);

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-20 gradient-bg relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl lg:text-5xl font-bold text-gradient-primary mb-4'>Skills & Technologies</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Technologies I've been working with recently to create amazing web experiences
					</p>
				</motion.div>

				{/* Horizontal Scrolling Skills */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.4 }}
					className='space-y-8'
				>
					<SkillRow
						reverse={false}
						duration={40}
					/>
					<SkillRow
						reverse={true}
						duration={35}
					/>
				</motion.div>

				{/* Enhanced Floating Elements */}
				<div className='mt-20 relative'>
					<motion.div
						animate={{
							y: [0, -30, 0],
							rotate: [0, 10, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className='absolute top-0 left-1/4 w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl opacity-20 shadow-2xl backdrop-blur-sm'
					>
						&lt;/&gt;
					</motion.div>

					<motion.div
						animate={{
							y: [0, 30, 0],
							rotate: [0, -10, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2,
						}}
						className='absolute top-32 right-1/4 w-16 h-16 gradient-accent rounded-xl flex items-center justify-center text-accent-foreground font-bold opacity-20 shadow-2xl backdrop-blur-sm'
					>
						{}
					</motion.div>

					<motion.div
						animate={{
							y: [0, -20, 0],
							x: [0, 20, 0],
							rotate: [0, 15, 0],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 4,
						}}
						className='absolute top-16 left-3/4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold opacity-20 shadow-2xl'
					>
						#
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
