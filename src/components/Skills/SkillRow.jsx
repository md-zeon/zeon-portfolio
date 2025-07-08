import { motion } from "motion/react";
import SkillCard from "./SkillCard";
import skills from "../../data/skillsData";

const duplicatedSkills = [...skills, ...skills];

const SkillRow = ({ reverse = false, duration = 50 }) => (
	<div className='overflow-hidden'>
		<motion.div
			className='flex w-max gap-6 py-4'
			animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
			transition={{ repeat: Infinity, duration, ease: "linear" }}
		>
			{duplicatedSkills.map(({ icon: Icon, name, color }, i) => (
				<SkillCard
					key={i}
					Icon={Icon}
					name={name}
					color={color}
					index={i}
					reverse={reverse}
				/>
			))}
		</motion.div>
	</div>
);

export default SkillRow;
