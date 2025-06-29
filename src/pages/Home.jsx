import { motion, useScroll } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
				className='bg-primary fixed top-0 left-0 right-0 h-1'
			></motion.div>
			<header className='bg-base-200 text-base-content sticky top-0 z-50'>
				<Navbar />
			</header>
			<main className='bg-base-100 text-base-content min-h-screen max-w-7xl mx-auto px-4'>
				<Hero />
				<About />
				<Skills />
				<Education />
				<Projects />
				{/* <Contact /> */}
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;
