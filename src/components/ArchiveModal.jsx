import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuX, LuExternalLink } from "react-icons/lu";

const STORAGE_KEY = "zeon-archive-modal-seen";

const ArchiveModal = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (localStorage.getItem(STORAGE_KEY)) return;
		const timer = setTimeout(() => setOpen(true), 600);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				localStorage.setItem(STORAGE_KEY, "1");
				setOpen(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	const close = () => {
		localStorage.setItem(STORAGE_KEY, "1");
		setOpen(false);
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					role='dialog'
					aria-modal='true'
					aria-labelledby='archive-modal-title'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={close}
					className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.94, y: 12 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: 8 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						onClick={(e) => e.stopPropagation()}
						className='relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#12152a] text-white shadow-2xl'
					>
						<div className='gradient-primary h-1 w-full' />

						<button
							onClick={close}
							aria-label='Close notice'
							className='absolute right-3 top-4 cursor-pointer rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white'
						>
							<LuX size={20} />
						</button>

						<div className='px-7 py-8 text-center sm:px-8'>
							<h2
								id='archive-modal-title'
								className='text-2xl font-bold text-gradient-primary sm:text-3xl'
							>
								This portfolio is archived
							</h2>
							<p className='mt-4 text-sm leading-relaxed text-white/75'>
								Thanks for dropping by! This is my old portfolio and it's no longer
								updated. My latest projects, case studies, and experiments live on
								my new website.
							</p>
							<div className='mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row'>
								<a
									href='https://zeanurrahamanzeon.vercel.app'
									onClick={close}
									className='gradient-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-[#0a090f] transition-all duration-200 hover:shadow-lg'
								>
									Visit new portfolio
									<LuExternalLink size={16} />
								</a>
								<button
									onClick={close}
									className='cursor-pointer rounded-lg border border-white/20 px-6 py-3 font-medium text-white/80 transition-colors duration-200 hover:bg-white/10'
								>
									Stay here
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ArchiveModal;