import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { LuGithub } from "react-icons/lu";

const projects = [
	{
		title: "Taskero",
		description:
			"A full-stack MERN freelance task marketplace with user authentication, task management, and a dashboard.",
		image: "https://i.ibb.co/d4LBMqHp/taskero.png",
		technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth", "Tailwind CSS"],
		githubUrl: "https://github.com/md-zeon/taskero-client-side",
		liveUrl: "https://taskero-60a20.web.app/",
	date: "2025-06",
		category: "Full Stack",
		fullDescription:
			"Taskero is a full-stack freelance task marketplace built with the MERN stack. It enables users to browse, post, and manage tasks, with protected authentication routes, a responsive design, and an admin-style dashboard. Features include task CRUD operations, private dashboards, deadline-based sorting, and real-time updates using Firebase Auth.",
		challenges: [
			"Implementing bidding system for freelancers",
			"Building a custom dashboard layout with dynamic routing and nested routes",
			"Managing user-specific task filtering",
		],
		improvements: [
			"Implement a notification system for reminders",
			"Add role-based admin moderation features",
			"Build a mobile app version with offline access",
		],
		techStack: {
			frontend: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "Framer Motion", "React Typewriter"],
			backend: ["Node.js", "Express.js", "CORS", "Dotenv"],
			database: ["MongoDB"],
			tools: ["Firebase Auth", "Vercel", "SweetAlert2", "React Toastify", "Git"],
		},
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(projects[0]);
	const [activeCategory, setActiveCategory] = useState("All");

	const categories = ["All", "Full Stack", "Frontend"];
	const openModal = (project) => {
		setSelectedProject(project);
		document.getElementById("my_modal_5").showModal();
	};

	const filteredProjects =
		activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

	return (
		<section
			id='projects'
			className='py-20 gradient-bg'
		>
			<div className='px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl lg:text-5xl font-bold text-gradient-primary mb-4'>Featured Projects</h2>
					<p className='text-xl text-secondary max-w-3xl mx-auto'>
						Here are some of my recent projects that showcase my skills and passion for web development
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='flex justify-center gap-4 mb-16'
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-3 border rounded-full transition-all duration-200 font-medium shadow-sm
                ${
									activeCategory === category
										? "gradient-primary border-primary"
										: "hover:border-primary hover:text-gradient-primary hover:gradient-primary/5"
								}
              `}
						>
							{category}
						</button>
					))}
				</motion.div>

				<div className='space-y-8'>
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={project.title}
							project={project}
							index={index}
							onClick={() => openModal(project)}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='text-center mt-16'
				>
					<button className='gradient-primary px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95'>
						<a
							href='https://github.com/md-zeon/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex justify-center items-center gap-2 w-fit'
						>
							<LuGithub
								size={30}
								className='p-2 rounded-full border'
							/>
							View All Projects
						</a>
					</button>
				</motion.div>
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => document.getElementById("my_modal_5").close()}
				/>
			)}

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
		</section>
	);
};

export default Projects;
