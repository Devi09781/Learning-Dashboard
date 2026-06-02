"use client";

import { motion } from "framer-motion";

export default function ActivityHeatmap() {
  const cells = Array.from({ length: 42 });

  return (
    <section
      className="col-span-12
      bg-zinc-900
      rounded-3xl
      p-6
      border border-white/10"
    >
      <h2 className="text-white text-xl font-bold mb-6">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: index * 0.02
            }}
            className="aspect-square rounded-md bg-violet-500/40"
          />
        ))}
      </div>
    </section>
  );
}