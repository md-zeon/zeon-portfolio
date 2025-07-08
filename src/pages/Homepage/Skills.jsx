import { motion } from "motion/react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiDaisyui, SiExpress, SiGit, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import SectionTitle from "../../components/SectionTitle";
import SkillRow from "../../components/Skills/SkillRow";
import FloatingShapes from "../../components/FloatingShapes";

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-20 gradient-bg relative overflow-hidden'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle
					title='Skills & Technologies'
					subtitle="Technologies I've been working with recently to create amazing web experiences"
					isGradient={true}
				/>

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

				<div className='mt-20 relative'>
					<FloatingShapes />
				</div>
			</div>
		</section>
	);
};

export default Skills;
