import { motion, useScroll } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

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
				className='gradient-primary fixed top-0 left-0 right-0 h-1'
			></motion.div>
			<header className='bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 sticky top-0 z-50'>
				<Navbar />
			</header>
			<main className='text-base-content min-h-screen max-w-7xl mx-auto'>
				<Hero />
				<About />
				<Skills />
				<Education />
				<Projects />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
			<ToastContainer />
		</>
	);
};

export default Home;
