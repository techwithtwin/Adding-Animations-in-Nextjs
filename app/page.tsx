import Card from "@/components/card";

export default function Home() {
  return (
    <div className="mx-5 space-y-4 my-4">
      <h1 className="text-3xl font-bold">Random Foxes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <Card key={item} item={item} />
        ))}
      </div>
    </div>
  );
}
