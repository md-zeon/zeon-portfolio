const AboutInfoCard = ({ icon: Icon, title, paragraphs }) => (
	<div className='border rounded-xl p-6'>
		{title && (
			<h3 className='text-xl font-bold text-primary mb-3 flex items-center gap-2'>
				{Icon && <Icon className='w-5 h-5' />}
				{title}
			</h3>
		)}
		{paragraphs.map((p, i) => (
			<p
				key={i}
				className={`leading-relaxed ${i !== paragraphs.length - 1 ? "mb-4" : ""}`}
			>
				{p}
			</p>
		))}
	</div>
);

export default AboutInfoCard;
