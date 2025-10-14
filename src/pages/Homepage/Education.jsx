import { motion } from "motion/react";
import { LuGraduationCap, LuCalendar, LuAward } from "react-icons/lu";
import SectionTitle from "../../components/SectionTitle";
import EducationCard from "../../components/Education/EducationCard";

const educationList = [
	{
		degree: "BSc in Computer Science & Engineering",
		institution: "Northern University Bangladesh",
		year: "2023 - 2027",
		status: "7th Semester",
		description: (
			<>
				Currently in <span className='font-semibold text-gradient-primary'>3rd Year</span>, actively learning full-stack
				web development, computer science fundamentals, and solving real-world problems. Expected to graduate in{" "}
				<span className='font-semibold text-gradient-primary'>2027</span>.
			</>
		),
		technicalFocus: [
			"MERN Stack Development",
			"Data Structures & Algorithms",
			"Database Management Systems",
			"System Design",
		],
		currentActivities: [
			"Working on team Projects",
			"Problem Solving Practice",
			"Open Source Contributions",
			"Mentoring Junior Students",
		],
	},
	// Add more education entries here if needed
];

const Education = () => {
	return (
		<section
			id='education'
			className='py-20'
		>
			<div className='px-4 sm:px-6 lg:px-8'>
				<SectionTitle
					title='Education'
					subtitle='My academic journey and continuous learning path'
				/>

				<div className='max-w-5xl mx-auto space-y-16'>
					{educationList.map((edu, index) => (
						<EducationCard
							key={index}
							{...edu}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
