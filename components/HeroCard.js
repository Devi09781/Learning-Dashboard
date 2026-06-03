"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-12 lg:col-span-8 rounded-3xl p-8 bg-linear-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 border border-white/10"
    >
      <h2 className="text-4xl font-bold text-white">
        Welcome Back 👋
      </h2>

      <p className="text-zinc-300 mt-4">
        Continue your learning journey today.
      </p>

      <div className="flex gap-6 mt-8">
        <div>
          <h3 className="text-white font-bold">
            🔥 12 Day Streak
          </h3>
        </div>

        <div>
          <h3 className="text-white font-bold">
            📚 4 Courses
          </h3>
        </div>
      </div>
    </motion.section>
  );
} 



