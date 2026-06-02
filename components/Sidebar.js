"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Calendar,
  Settings
} from "lucide-react";

const links = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Courses" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Calendar, label: "Calendar" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 rounded-3xl p-5 h-full border border-white/10">
      <h1 className="text-white text-xl font-bold mb-8">
        LearnX
      </h1>

      <nav className="space-y-3">
        {links.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="flex items-center gap-3 w-full text-zinc-300 hover:text-white hover:bg-white/10 transition p-3 rounded-xl"
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}