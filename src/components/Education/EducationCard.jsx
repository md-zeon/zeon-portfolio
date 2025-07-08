import { motion } from "motion/react";
import { LuCalendar, LuAward } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";

const EducationCard = ({
	degree,
	institution,
	year,
	status,
	description,
	technicalFocus = [],
	currentActivities = [],
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className='relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-100'
		>
			{/* Timeline Icon */}
			<div className='absolute -left-4 top-8 w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-lg'>
				<LuGraduationCap className='w-4 h-4 text-white' />
			</div>

			<div className='ml-8'>
				{/* Header */}
				<div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6'>
					<div>
						<h3 className='text-2xl font-bold mb-2'>{degree}</h3>
						<p className='text-lg text-gradient-primary font-semibold mb-2'>{institution}</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-4'>
						<div className='flex items-center text-green-300 border gap-2 px-4 py-2 gradient-bg rounded-full'>
							<LuCalendar className='w-4 h-4' />
							<span className='font-medium'>{year}</span>
						</div>
						{status && (
							<div className='flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full'>
								<LuAward className='w-4 h-4 text-green-600' />
								<span className='text-green-700 font-medium'>{status}</span>
							</div>
						)}
					</div>
				</div>

				{/* Description */}
				<p className='leading-relaxed mb-6'>{description}</p>

				{/* Lists */}
				<div className='grid md:grid-cols-2 gap-6'>
					{technicalFocus.length > 0 && (
						<div>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<div className='w-2 h-2 bg-primary rounded-full'></div>
								Technical Focus
							</h4>
							<ul className='space-y-2 text-secondary'>
								{technicalFocus.map((item, i) => (
									<li
										key={i}
										className='flex items-center gap-2'
									>
										<div className='w-1 h-1 gradient-primary rounded-full'></div>
										{item}
									</li>
								))}
							</ul>
						</div>
					)}

					{currentActivities.length > 0 && (
						<div>
							<h4 className='font-semibold mb-3 flex items-center gap-2'>
								<div className='w-2 h-2 bg-primary rounded-full'></div>
								Current Activities
							</h4>
							<ul className='space-y-2 text-secondary'>
								{currentActivities.map((item, i) => (
									<li
										key={i}
										className='flex items-center gap-2'
									>
										<div className='w-1 h-1 gradient-primary rounded-full'></div>
										{item}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default EducationCard;
