import { motion } from "framer-motion";
import { LuTag, LuCalendar, LuEye, LuChevronRight, LuGithub, LuExternalLink } from "react-icons/lu";

const ProjectCard = ({ project, index, onClick }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay: index * 0.1 }}
			className='bg-card/80 backdrop-blur-sm border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group'
		>
			<div className='grid lg:grid-cols-2 gap-0'>
				{/* Image Section */}
				<div className='relative overflow-hidden lg:order-1'>
					<div className='h-60 lg:h-auto max-h-[448px] overflow-hidden relative lg:order-1'>
						<img
							src={project.image}
							alt={`Screenshot of ${project.title}`}
							className='w-full h-full object-cover transition-transform duration-[12s] ease-in-out group-hover:translate-y-[-60%]'
						/>
					</div>

					<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r' />
					<div className='absolute top-4 right-4 flex gap-3'>
						<motion.a
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className='w-10 h-10 bg-black backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-all duration-200'
						>
							<LuGithub className='w-4 h-4 ' />
						</motion.a>
						<motion.a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className='w-10 h-10 gradient-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200'
						>
							<LuExternalLink className='w-4 h-4' />
						</motion.a>
					</div>
				</div>

				{/* Content Section */}
				<div className='p-8 lg:p-12 flex flex-col justify-center lg:order-2'>
					<div className='flex items-center gap-4 mb-4'>
						<div className='flex items-center gap-2 gradient-primary/10 p-4 rounded-full badge badge-soft'>
							<LuTag className='w-4 h-4 text-gradient-primary' />
							<span className='text-gradient-primary text-sm font-semibold'>{project.category}</span>
						</div>
						<div className='flex items-center gap-2 text-sm text-secondary'>
							<LuCalendar className='w-4 h-4' />
							<span className='font-medium'>{project.date}</span>
						</div>
					</div>

					<h3 className='text-2xl lg:text-3xl font-bold mb-4 group-hover:text-gradient-primary transition-colors duration-200'>
						{project.title}
					</h3>

					<p className='mb-6 text-lg leading-relaxed text-secondary'>{project.description}</p>
					<div className='flex flex-wrap gap-2 mb-8'>
						{project.technologies.slice(0, 5).map((tech) => (
							<span
								key={tech}
								className='px-4 py-2 bg-neutral/60 border rounded-lg text-sm font-medium hover:border-primary/30 hover:bg-primary/10 transition'
							>
								{tech}
							</span>
						))}
						{project.technologies.length > 5 && (
							<span className='px-4 py-2 bg-neutral/60 text-secondary rounded-lg text-sm font-medium border'>
								+{project.technologies.length - 5} more
							</span>
						)}
					</div>

					<button
						onClick={onClick}
						className='btn  flex items-center justify-center cursor-pointer gap-2 gradient-primary p-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 group'
					>
						<LuEye className='w-4 h-4' />
						<span>View Details</span>
						<LuChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
