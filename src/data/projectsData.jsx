const projects = [
	{
		title: "MicroEarn",
		description:
			"A full-stack MERN platform where users earn money by completing micro-tasks, with role-based dashboards, secure payments, and coin-based economy.",
		image: "https://i.ibb.co/pvf0qmVM/micro-earn-full-page.webp",
		technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth", "Tailwind CSS", "Stripe"],
		githubUrl: "https://github.com/md-zeon/micro-earn-client",
		liveUrl: "https://micro-earn-7be08.web.app/",
		date: "2025-07",
		category: "Full Stack",
		fullDescription:
			"MicroEarn is a MERN-based micro-tasking platform that connects Buyers and Workers through small online jobs. It features secure authentication, coin-based payment and withdrawal systems, role-specific dashboards, Stripe integration, real-time notifications, and a modern responsive UI. Workers can earn coins by completing tasks, which can be withdrawn as real money, while Buyers can post tasks and manage submissions.",
		challenges: [
			"Creating dynamic dashboards for different user roles with real-time data",
			"Implementing Stripe integration for secure payments",
			"Building a notification system with real-time updates and filtering by user",
			"Managing task submissions, approvals, rejections, and coin updates securely",
		],
		improvements: [
			"Add in-app messaging between workers and buyers",
			"Implement analytics for admin insights (most active users, top earners)",
			"Add support for multi-currency and localization",
			"Enable task tagging and advanced filtering",
		],
		techStack: {
			frontend: [
				"React.js",
				"React Router",
				"Tailwind CSS",
				"DaisyUI",
				"React Hook Form",
				"Framer Motion",
				"React Icons",
				"Hot Toast",
			],
			backend: ["Node.js", "Express.js", "Firebase Admin", "CORS", "Dotenv"],
			database: ["MongoDB"],
			tools: ["Firebase Auth", "Stripe", "imgBB", "Vercel", "GitHub"],
		},
	},
	{
		title: "Histotrack",
		description:
			"A full-stack MERN app for tracking, sharing, and exploring historical artifacts with authentication and CRUD features.",
		image: "https://i.ibb.co/gLL6gpD2/histotrack-full-page.webp",
		technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth", "Tailwind CSS"],
		githubUrl: "https://github.com/md-zeon/histo-track-client",
		liveUrl: "https://histo-track.web.app/",
		date: "2025-06",
		category: "Full Stack",
		fullDescription:
			"Historical Artifacts Tracker is a MERN-based web app where users can explore, add, and manage historical artifacts. It supports authentication, protected routes, dynamic artifact interactions (like, edit, delete), search functionality, and personalized dashboards. The UI is responsive and uniquely styled with Tailwind CSS and DaisyUI.",
		challenges: [
			"Creating personalized routes for 'My Artifacts' and 'Liked Artifacts'",
			"Prefilling update forms while maintaining original metadata",
			"Handling MongoDB queries for user-specific and liked artifact filtering",
		],
		improvements: [
			"Add advanced filtering with category and date ranges",
			"Implement user comment and review system",
			"Introduce an interactive map view of artifact origins",
		],
		techStack: {
			frontend: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "React Icons", "Framer Motion"],
			backend: ["Node.js", "Express.js", "CORS", "Dotenv"],
			database: ["MongoDB"],
			tools: ["Firebase Auth", "Vercel", "React Toastify", "SweetAlert2", "Git"],
		},
	},
	{
		title: "Taskero",
		description:
			"A full-stack MERN freelance task marketplace with user authentication, task management, and a dashboard.",
		image: "https://i.ibb.co/v4nw53jh/taskero-full-page.webp",
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
	{
		title: "Subscribify",
		description:
			"A curated subscription box platform where users can browse, subscribe to, and manage monthly boxes with full authentication.",
		image: "https://i.ibb.co/fYTWVf57/subscribify-full-page.webp",
		technologies: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
		githubUrl: "https://github.com/md-zeon/subscribify",
		liveUrl: "https://subscription-box-22a46.web.app/",
		date: "2025-05",
		category: "Frontend",
		fullDescription:
			"Subscribify is a React and Firebase-based web app that lets users explore and subscribe to monthly boxes based on interests. The app supports login, registration, and protected routes, with clean UI design, loading states, and category-wise filtering. Built with Tailwind CSS and DaisyUI, the UI is fully responsive.",
		challenges: [
			"Handling user authentication with Firebase and protected routing",
			"Building category-wise filtering system and clean routing structure",
			"Creating responsive card UI with animated hover effects",
		],
		improvements: [
			"Add real-time database to track subscription activity",
			"Enable payment gateway integration",
			"Introduce admin panel for managing boxes and users",
		],
		techStack: {
			frontend: ["React.js", "React Router", "Tailwind CSS", "DaisyUI"],
			backend: [],
			database: ["Firebase Firestore"],
			tools: ["Firebase Auth", "SweetAlert2", "React Toastify", "Git"],
		},
	},
];

export default projects;
