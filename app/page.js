/*import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityHeatmap from "@/components/ActivityHeatmap";
import { createClient } from "@/lib/supabase";

async function getCourses() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data || [];
}

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-zinc-950 p-5">
      <div className="grid lg:grid-cols-[260px_1fr] gap-5">
        <Sidebar />

        <section>
          <div className="grid grid-cols-12 gap-5">

            <HeroCard />

            {courses.map((course, index) => (
              <div
                key={course.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <CourseCard
                  course={course}
                  index={index}
                />
              </div>
            ))}

            <ActivityHeatmap />

          </div>
        </section>
      </div>
    </main>
  );
} */

  
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityHeatmap from "@/components/ActivityHeatmap";
import { createClient } from "@/lib/supabase";

async function getCourses() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data || [];
}

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-zinc-950 p-5">
      <div className="grid lg:grid-cols-[260px_1fr] gap-5">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section>
          <div className="grid grid-cols-12 gap-5">

            {/* Hero Section */}
            <HeroCard />

            {/* Dynamic Course Cards from Supabase */}
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <CourseCard
                  course={course}
                  index={index}
                />
              </div>
            ))}

            {/* Activity Section */}
            <ActivityHeatmap />

          </div>
        </section>

      </div>
    </main>
  );
}