export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = (delayChildren = 0, stagger = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren: stagger } },
});

export const viewportOnce = { once: true, margin: '-80px' };
