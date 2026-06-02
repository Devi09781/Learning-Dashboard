export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8">
      <div className="animate-pulse grid gap-4 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-3xl bg-zinc-900"
          />
        ))}
      </div>
    </main>
  );
}