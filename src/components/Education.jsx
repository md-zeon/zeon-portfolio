import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<section
			id='education'
			className='py-16 md:py-24 bg-base-100 text-base-content'
		>
			<h2 className='text-4xl font-extrabold text-center text-primary mb-12'>Education</h2>

			<div className='max-w-3xl mx-auto px-6 md:px-0'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='relative bg-base-200 border-l-4 border-primary rounded-xl shadow-lg p-6 pl-8'
				>
					<div className='absolute -left-3 top-6 bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md'>
						<FaGraduationCap className='text-xs' />
					</div>

					{/* Header */}
					<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
						<h3 className='text-xl font-bold'>BSc in Computer Science & Engineering</h3>
						<span className='badge badge-primary badge-outline text-sm px-4 py-1 rounded-full'>📘 6th Semester</span>
					</div>

					{/* Sub Info */}
					<p className='text-sm text-base-content/80 mt-1'>
						Northern University Bangladesh &mdash; <span className='italic'>2022 – Present</span>
					</p>

					{/* Description */}
					<p className='mt-4 text-base-content leading-relaxed'>
						Currently in <span className='font-semibold'>2nd Year</span>, actively learning full-stack web development,
						computer science fundamentals, and solving real-world problems. Expected to graduate in{" "}
						<span className='font-semibold text-primary'>2027</span>.
					</p>

					<ul className='mt-4 list-disc list-inside text-sm text-base-content/80 marker:text-primary space-y-1'>
						<li>Tech Focus: MERN Stack, Algorithms, DBMS, System Design</li>
						<li>Practicing: DSA, Problem Solving, Personal Projects</li>
						<li>Soft Skills: Communication, collaboration, leadership</li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

export default Education;
