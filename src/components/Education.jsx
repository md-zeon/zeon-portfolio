import { motion } from "motion/react";
import { LuGraduationCap, LuCalendar, LuAward } from "react-icons/lu";

const Education = () => {
	return (
		<section
			id='education'
			className='py-20'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl lg:text-5xl font-bold mb-4'>Education</h2>
					<p className='text-xl max-w-3xl text-secondary mx-auto'>My academic journey and continuous learning path</p>
				</motion.div>

				<div className='max-w-4xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
					>
						{/* Timeline Indicator */}
						<div className='absolute -left-4 top-8 w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-lg'>
							<LuGraduationCap className='w-4 h-4' />
						</div>

						<div className='ml-8'>
							{/* Header */}
							<div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6'>
								<div>
									<h3 className='text-2xl font-bold mb-2'>BSc in Computer Science & Engineering</h3>
									<p className='text-lg text-gradient-primary font-semibold mb-2'>Northern University Bangladesh</p>
								</div>

								<div className='flex flex-col sm:flex-row gap-4'>
									<div className='flex items-center text-green-300 border gap-2 px-4 py-2 gradient-bg rounded-full'>
										<LuCalendar className='w-4 h-4' />
										<span className='font-medium'>2023 - 2027</span>
									</div>
									<div className='flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full'>
										<LuAward className='w-4 h-4 text-green-600' />
										<span className='text-green-700 font-medium'>6th Semester</span>
									</div>
								</div>
							</div>

							{/* Description */}
							<p className='leading-relaxed mb-6'>
								Currently in <span className='font-semibold text-gradient-primary'>2nd Year</span>, actively learning full-stack
								web development, computer science fundamentals, and solving real-world problems. Expected to graduate in{" "}
								<span className='font-semibold text-gradient-primary'>2027</span>.
							</p>

							{/* Key Focus Areas */}
							<div className='grid md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold mb-3 flex items-center gap-2'>
										<div className='w-2 h-2 bg-primary rounded-full'></div>
										Technical Focus
									</h4>
									<ul className='space-y-2 text-secondary'>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											MERN Stack Development
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Data Structures & Algorithms
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Database Management Systems
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											System Design
										</li>
									</ul>
								</div>

								<div>
									<h4 className='font-semibold mb-3 flex items-center gap-2'>
										<div className='w-2 h-2 bg-primary rounded-full'></div>
										Current Activities
									</h4>
									<ul className='space-y-2 text-secondary'>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Building Personal Projects
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Problem Solving Practice
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Open Source Contributions
										</li>
										<li className='flex items-center gap-2'>
											<div className='w-1 h-1 gradient-primary rounded-full'></div>
											Mentoring Junior Students
										</li>
									</ul>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Education;
