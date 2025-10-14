import { BiShield, BiShieldQuarter } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiAuth0, SiDaisyui, SiExpress, SiGit, SiJsonwebtokens, SiMongodb, SiMongoose, SiNextdotjs, SiNodedotjs, SiShadcnui, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
	{ icon: () => <span className='text-4xl font-bold text-blue-500'>C</span>, name: "C", color: "text-blue-500" },
	{ icon: () => <span className='text-3xl font-bold text-blue-700'>C++</span>, name: "C++", color: "text-blue-700" },
	{ icon: IoLogoHtml5, name: "HTML", color: "text-orange-500" },
	{ icon: IoLogoCss3, name: "CSS", color: "text-blue-500" },
	{ icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
	{ icon: SiTypescript, name: "TypeScript", color: "text-blue-600 bg-white" },
	{ icon: IoLogoReact, name: "React", color: "text-cyan-400" },
	{ icon: SiNextdotjs, name: "Next.js", color: "text-white" },
	{ icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
	{ icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
	{ icon: SiExpress, name: "Express.js", color: "font-bold" },
	{ icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
	{ icon: IoLogoFirebase, name: "Firebase", color: "text-yellow-500" },
	{ icon: SiDaisyui, name: "DaisyUI", color: "text-purple-400" },
	{icon: SiShadcnui, name: "shadcn/ui", color: "text-red-400"},
	{ icon: SiJsonwebtokens, name: "JWT", color: "text-red-500" },
	{ icon: SiGit, name: "Git", color: "text-orange-600" },
	{ icon: SiSocketdotio, name: "Socket.io", color: "text-gray-600"},
	{ icon: SiMongoose, name: "Mongoose", color: "text-green-700" },
	{ icon: BiShieldQuarter, name: "Auth.js", color: "text-white" },
];

export default skills;
