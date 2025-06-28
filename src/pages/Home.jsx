import { motion, useScroll } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div
				id='scroll-indicator'
				style={{
					scaleX: scrollYProgress,
					originX: 0,
					zIndex: 9999,
				}}
				className="bg-primary fixed top-0 left-0 right-0 h-1"
			></motion.div>
			<header className='bg-base-200 text-base-content sticky top-0 z-50'>
				<Navbar />
			</header>
			<main className='bg-base-100 text-base-content min-h-screen max-w-7xl mx-auto px-4'>
				<Hero />
			</main>
			<footer className='min-h-screen bg-primary'></footer>
		</>
	);
};

export default Home;
