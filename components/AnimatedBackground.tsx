'use client';

import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'left-[8%] top-[5%] h-56 w-56 bg-cyanAccent/25',
    dx: 30,
    dy: 18,
    duration: 14
  },
  {
    className: 'right-[10%] top-[15%] h-64 w-64 bg-magentaAccent/20',
    dx: -26,
    dy: 22,
    duration: 16
  },
  {
    className: 'bottom-[12%] left-[42%] h-72 w-72 bg-cyanAccent/10',
    dx: 24,
    dy: -26,
    duration: 18
  }
];

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid [background-size:70px_70px] opacity-[0.06]" />
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{ x: [0, blob.dx, 0], y: [0, blob.dy, 0] }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </div>
  );
}
