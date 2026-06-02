"use client";

import { motion } from "framer-motion";

export default function CourseCard({ course, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.15
      }}
      whileHover={{
        scale: 1.02
      }}
      className="bg-zinc-900
      rounded-3xl
      p-6
      border
      border-white/10
      hover:border-violet-500/50"
    >
      <h3 className="text-white text-lg font-semibold">
        {course.title}
      </h3>

      <p className="text-zinc-400 mt-2">
        Progress
      </p>

      <div className="w-full h-3 rounded-full bg-zinc-800 mt-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`
          }}
          transition={{
            duration: 1.2
          }}
          className="h-full bg-linear-to-r
          from-violet-500
          to-cyan-500"
        />
      </div>

      <span className="text-zinc-300 text-sm mt-3 block">
        {course.progress}%
      </span>
    </motion.article>
  );
}