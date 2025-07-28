import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import skills from "../../data/skillsData";

const SkillRow = ({ reverse = false, speed = 50 }) => (
	<Marquee
		gradient={false}
		speed={speed}
		direction={reverse ? "right" : "left"}
		pauseOnHover
		className='py-3'
	>
		{skills.concat(skills).map(({ icon: Icon, name, color }, i) => (
			<SkillCard
				key={`${reverse ? "rev" : "fwd"}-${i}`}
				Icon={Icon}
				name={name}
				color={color}
				index={i}
				reverse={reverse}
			/>
		))}
	</Marquee>
);

export default SkillRow;
