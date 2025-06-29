import { motion } from "motion/react";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiNodedotjs,
	SiGit,
	SiDaisyui,
	SiFirebase,
	SiJsonwebtokens,
} from "react-icons/si";

const skills = [
	{ icon: () => <span className='text-4xl font-bold text-blue-500'>C</span>, name: "C", color: "text-blue-500" },
	{ icon: () => <span className='text-3xl font-bold text-blue-700'>C++</span>, name: "C++", color: "text-blue-700" },
	{ icon: SiHtml5, name: "HTML", color: "text-orange-500" },
	{ icon: SiCss3, name: "CSS", color: "text-blue-500" },
	{ icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
	{ icon: SiReact, name: "React", color: "text-cyan-400" },
	{ icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
	{ icon: SiDaisyui, name: "DaisyUI", color: "text-purple-400" },
	{ icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
	{ icon: SiExpress, name: "Express.js", color: "text-gray-700" },
	{ icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
	{ icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
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
					whileHover={{ y: -10 }}
					className='w-32 h-32 min-w-32 flex flex-col justify-center items-center gap-2 border border-primary bg-base-100 rounded-xl shadow-md transition-transform duration-300'
				>
					<Icon className={`text-4xl ${color}`} />
					<span className='text-sm text-base-content font-medium'>{name}</span>
				</motion.div>
			))}
		</motion.div>
	</div>
);

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-16 md:py-24 bg-base-200'
		>
			<h2 className='text-4xl font-extrabold text-center text-gradient-primary mb-12'>Skills</h2>

			<SkillRow
				reverse={false}
				duration={35}
			/>
			<div className='my-4' />
			<SkillRow reverse={true} />
		</section>
	);
};

export default Skills;
