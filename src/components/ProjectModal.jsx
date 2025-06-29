import { LuCalendar, LuTag, LuX, LuGithub, LuExternalLink, LuLightbulb, LuTarget } from "react-icons/lu";

const ProjectModal = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<dialog
			id='my_modal_5'
			className='modal modal-bottom sm:modal-middle open z-20'
		>
			<div className='modal-box w-full !max-w-screen'>
				{/* Header */}
				<div className='flex items-center justify-between p-6 border-b bg-card/50'>
					<div className='flex items-center gap-3'>
						<div className='flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full'>
							<LuTag className='w-3 h-3 text-gradient-primary' />
							<span className='text-gradient-primary text-sm font-medium'>{project.category}</span>
						</div>
						<div className='flex items-center gap-2 text-sm text-secondary'>
							<LuCalendar className='w-4 h-4' />
							<span>{project.date}</span>
						</div>
					</div>
					<button
						onClick={onClose}
						className='w-10 h-10 bg-primary/50 hover:bg-primary cursor-pointer rounded-full flex items-center justify-center transition-colors duration-200'
					>
						<LuX className='w-5 h-5' />
					</button>
				</div>

				{/* Content */}
				<div className='flex-1 overflow-y-auto'>
					<div className='p-6 space-y-8'>
						{/* Image & Summary */}
						<div className='grid lg:grid-cols-2 gap-8'>
							<div>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-64 object-cover rounded-xl border'
								/>
							</div>
							<div>
								<h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
								<p className='text-secondary leading-relaxed mb-6'>{project.fullDescription}</p>
								<div className='flex gap-4'>
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 bg-neutral hover:bg-neutral/80 px-4 py-2 rounded-lg transition-colors duration-200'
									>
										<LuGithub className='w-4 h-4' />
										<span>GitHub</span>
									</a>
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 gradient-primary text-gradient-primary-foreground px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200'
									>
										<LuExternalLink className='w-4 h-4' />
										<span>Live Demo</span>
									</a>
								</div>
							</div>
						</div>

						{/* Tech Stack */}
						<div className='bg-card border rounded-xl p-6'>
							<h2 className='text-xl font-bold  mb-6'>Technology Stack</h2>
							<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
								{Object.entries(project.techStack).map(([category, techs]) => (
									<div key={category}>
										<h3 className='font-semibold text-gradient-primary mb-3 capitalize'>{category}</h3>
										<div className='space-y-2'>
											{techs.map((tech) => (
												<span
													key={tech}
													className='block px-3 py-1 bg-neutral  rounded text-sm'
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Challenges & Improvements */}
						<div className='grid lg:grid-cols-2 gap-8'>
							<div className='bg-card border rounded-xl p-6'>
								<h2 className='text-xl font-bold  mb-4 flex items-center gap-2'>
									<LuLightbulb className='w-5 h-5 text-gradient-primary' />
									Challenges Faced
								</h2>
								<ul className='space-y-3'>
									{project.challenges.map((item, idx) => (
										<li
											key={idx}
											className='flex items-start gap-3'
										>
											<div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
											<span className='text-secondary'>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='bg-card border rounded-xl p-6'>
								<h2 className='text-xl font-bold  mb-4 flex items-center gap-2'>
									<LuTarget className='w-5 h-5 text-gradient-primary' />
									Future Improvements
								</h2>
								<ul className='space-y-3'>
									{project.improvements.map((item, idx) => (
										<li
											key={idx}
											className='flex items-start gap-3'
										>
											<div className='w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0' />
											<span className='text-secondary'>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default ProjectModal;
