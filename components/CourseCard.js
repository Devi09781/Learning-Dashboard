
/*
  "use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Rocket,
  Layers,
} from "lucide-react";

const iconMap = {
  BookOpen,
  Brain,
  Rocket,
  Layers,
};

export default function CourseCard({ course, index }) {

  const Icon =
    iconMap[course.icon_name?.trim()] || BookOpen;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 rounded-3xl p-6 border border-white/10 hover:border-violet-500/50"
    >
      <Icon
        size={28}
        className="text-violet-400 mb-4"
      />

      <h3 className="text-white text-lg font-semibold">
        {course.title}
      </h3>

      <p className="text-zinc-400 mt-2">
        Progress
      </p>

      <div className="w-full h-3 rounded-full bg-zinc-800 mt-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 1.2 }}
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-500"
        />
      </div>

      <span className="text-zinc-300 text-sm mt-3 block">
        {course.progress}%
      </span>
    </motion.article>
  );
} */

"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function CourseCard({ course, index = 0 }) {
  if (!course) return null;

  const iconName = course?.icon_name?.trim() || "BookOpen";
  const IconComponent = Icons[iconName] || Icons.BookOpen;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.article
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative bg-[#111318] border border-gray-800/60 rounded-2xl p-6 flex flex-col justify-between min-h-[190px] cursor-pointer overflow-hidden transform-gpu"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 via-purple-500/0 to-transparent group-hover:from-indigo-600/10 group-hover:via-purple-600/5 transition-all duration-500 pointer-events-none" />

      {/* Border Glow */}
      <div className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-indigo-500/20 transition-all duration-300 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10">
        <div className="p-3 bg-gray-800/40 border border-gray-700/40 rounded-xl w-fit mb-4 group-hover:border-indigo-500/30 transition-colors duration-300">
          <IconComponent
            size={22}
            className="text-indigo-400 group-hover:text-indigo-300 transition-colors"
          />
        </div>

        <h3 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors tracking-wide">
          {course.title}
        </h3>
      </div>

      {/* Progress */}
      <div className="w-full relative z-10 mt-4">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span className="font-medium text-gray-500">
            Progress
          </span>

          <span className="font-semibold text-indigo-400">
            {course.progress}%
          </span>
        </div>

        <div className="w-full bg-gray-800/50 h-2 rounded-full overflow-hidden border border-gray-700/20">
          <motion.div
            className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${course.progress || 0}%`,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: index * 0.12 + 0.4,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}