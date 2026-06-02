"use client";

const values = [
  0,1,2,3,4,2,1,
  1,2,3,4,1,0,2,
  2,3,4,1,2,3,0,
  4,3,2,1,0,1,2,
  1,2,3,4,3,2,1,
  0,1,2,3,4,2,1
];

const colors = [
  "bg-zinc-800",
  "bg-violet-900",
  "bg-violet-700",
  "bg-violet-500",
  "bg-cyan-400",
];

export default function ActivityHeatmap() {
  return (
    <section className="col-span-12 bg-zinc-900 rounded-3xl p-6 border border-white/10">
      <h2 className="text-white text-xl font-bold mb-6">
        Learning Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {values.map((value, index) => (
          <div
            key={index}
            className={`aspect-square rounded-md ${colors[value]}`}
          />
        ))}
      </div>
    </section>
  );
}