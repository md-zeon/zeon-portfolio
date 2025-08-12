import { motion } from "motion/react";
import { LuBookOpen, LuRocket, LuDatabase, LuCode, LuShield } from "react-icons/lu";

const learningItems = [
	{ icon: LuBookOpen, text: "Next.js 15 & TypeScript" },
	{ icon: LuDatabase, text: "Advanced MongoDB & Aggregations" },
	{ icon: LuShield, text: "Backend Security & Auth" },
];

const futureGoals = [
	{ icon: LuCode, text: "Contribute to Open Source" },
	{ icon: LuRocket, text: "Land a Remote Full-Stack Developer Role" },
	{ icon: LuShield, text: "Master System Design" },
];

const LearningAndGoalsBox = () => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ delay: 0.5 }}
		className='border rounded-xl p-6 flex flex-col gap-6'
	>
		{/* Currently Learning */}
		<div>
			<h3 className='text-xl font-bold text-primary mb-3 flex items-center gap-2'>
				<LuBookOpen className='w-5 h-5' /> Currently Learning
			</h3>
			<ul className='space-y-2'>
				{learningItems.map(({ icon: Icon, text }, i) => (
					<li
						key={i}
						className='flex items-center gap-2 text-sm'
					>
						<Icon className='text-primary w-4 h-4' /> {text}
					</li>
				))}
			</ul>
		</div>

		{/* Divider */}
		<div className='border-t border-base-300'></div>

		{/* Future Goals */}
		<div>
			<h3 className='text-xl font-bold text-primary mb-3 flex items-center gap-2'>
				<LuRocket className='w-5 h-5' /> Future Goals
			</h3>
			<ul className='space-y-2'>
				{futureGoals.map(({ icon: Icon, text }, i) => (
					<li
						key={i}
						className='flex items-center gap-2 text-sm'
					>
						<Icon className='text-primary w-4 h-4' /> {text}
					</li>
				))}
			</ul>
		</div>
	</motion.div>
);

export default LearningAndGoalsBox;
