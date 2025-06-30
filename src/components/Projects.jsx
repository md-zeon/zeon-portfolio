import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { LuGithub } from "react-icons/lu";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"A full-stack MERN e-commerce application with user authentication, payment integration, and admin dashboard.",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
		technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
		githubUrl: "https://github.com/md-zeon/ecommerce",
		liveUrl: "https://example-ecommerce.com",
		date: "2024",
		category: "Full Stack",
		fullDescription:
			"A comprehensive e-commerce solution built with the MERN stack, featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and a complete admin dashboard for inventory and order management. The platform includes advanced features like product search, filtering, reviews, and real-time order tracking.",
		challenges: [
			"Implementing secure payment processing with Stripe webhooks",
			"Managing complex state across multiple user roles (customer, seller, admin)",
			"Optimizing database queries for large product catalogs",
			"Handling real-time inventory updates during high traffic",
		],
		improvements: [
			"Add multi-vendor marketplace functionality",
			"Implement advanced recommendation system using ML",
			"Add mobile app using React Native",
			"Integrate with multiple payment gateways",
		],
		techStack: {
			frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
			backend: ["Node.js", "Express.js", "JWT Authentication", "Multer"],
			database: ["MongoDB", "Mongoose ODM"],
			tools: ["Stripe API", "Cloudinary", "Postman", "Git"],
		},
	},
	{
		title: "Task Management App",
		description:
			"A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
		image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
		technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
		githubUrl: "https://github.com/md-zeon/task-manager",
		liveUrl: "https://example-tasks.com",
		date: "2024",
		category: "Frontend",
		fullDescription:
			"A modern task management application designed for teams and individuals, featuring real-time collaboration, intuitive drag-and-drop interfaces, project boards with Kanban-style layouts, team member management, and comprehensive progress tracking. Built with React and Firebase for seamless real-time updates.",
		challenges: [
			"Implementing smooth drag-and-drop functionality across different boards",
			"Managing real-time updates without conflicts between multiple users",
			"Creating an intuitive UX for complex project hierarchies",
			"Optimizing Firebase queries for large teams and projects",
		],
		improvements: [
			"Add time tracking and productivity analytics",
			"Implement advanced reporting and insights dashboard",
			"Add integrations with popular tools like Slack and GitHub",
			"Create mobile app with offline functionality",
		],
		techStack: {
			frontend: ["React.js", "React Query", "Tailwind CSS", "React Beautiful DND"],
			backend: ["Firebase Auth", "Firestore", "Firebase Functions"],
			database: ["Firestore", "Firebase Storage"],
			tools: ["Firebase SDK", "Vercel", "ESLint", "Prettier"],
		},
	},
	{
		title: "Weather Dashboard",
		description:
			"A responsive weather application with location-based forecasts, interactive maps, and weather analytics.",
		image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
		technologies: ["React", "Weather API", "Chart.js", "CSS3"],
		githubUrl: "https://github.com/md-zeon/weather-app",
		liveUrl: "https://example-weather.com",
		date: "2023",
		category: "Frontend",
		fullDescription:
			"A comprehensive weather dashboard providing detailed weather information, forecasts, and analytics. Features include location-based weather data, interactive weather maps, historical weather trends, severe weather alerts, and beautiful data visualizations. The app uses multiple weather APIs to provide accurate and up-to-date information.",
		challenges: [
			"Handling multiple weather API integrations and data consistency",
			"Creating responsive and interactive weather maps",
			"Managing geolocation permissions and fallback options",
			"Implementing efficient data caching for offline functionality",
		],
		improvements: [
			"Add weather-based activity recommendations",
			"Implement push notifications for severe weather alerts",
			"Add social sharing features for weather conditions",
			"Create weather-based travel planning tools",
		],
		techStack: {
			frontend: ["React.js", "Chart.js", "Leaflet Maps", "Styled Components"],
			backend: ["Weather API", "Geolocation API"],
			database: ["Local Storage", "IndexedDB"],
			tools: ["OpenWeather API", "Mapbox API", "Service Workers"],
		},
	},
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
			"Implementing protected routes and role-based access using Firebase Auth",
			"Creating responsive and consistent UI across desktop and mobile using Tailwind CSS and DaisyUI",
			"Building a custom dashboard layout with dynamic routing and nested routes",
			"Managing user-specific task filtering and secure backend data access",
		],
		improvements: [
			"Add bidding system for freelancers",
			"Implement real-time task updates with WebSockets",
			"Add role-based admin moderation features",
			"Build a mobile app version with offline access",
		],
		techStack: {
			frontend: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "Framer Motion", "React Typewriter"],
			backend: ["Node.js", "Express.js", "CORS", "Dotenv"],
			database: ["MongoDB", "Mongoose ODM"],
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
