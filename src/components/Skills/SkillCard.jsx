const SkillCard = ({ Icon, name, color }) => {
	const gradientFrom = color.replace("text-", "from-");

	return (
		<div className='w-36 hover:rotate-y-12 hover:-translate-y-2 hover:scale-105 h-36 min-w-36 flex flex-col justify-center items-center gap-3 border rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-500 group cursor-pointer mx-3'>
			<Icon className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`} />
			<span className='text-sm text-base-content font-semibold px-2 group-hover:text-primary transition-colors duration-200'>
				{name}
			</span>
			<div
				className={`w-12 h-1 bg-gradient-to-r ${gradientFrom} to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
			/>
		</div>
	);
};

export default SkillCard;
