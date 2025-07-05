import Card from "@/components/card";

export default function Home() {
  return (
    <div className="mx-5 space-y-4 my-4">
      <h1 className="text-3xl font-bold text-center">
        Random Foxes using Fade Up
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((i) => (
          <Card
            key={i}
            animation="fade-up"
            delay={i * 50}
            imgUrl={`https://randomfox.ca/images/${i}.jpg`}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center">
        Random Dogs using Zoom in
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {randomDogs.map((item) => (
          <Card animation="zoom-in" key={item} imgUrl={item} />
        ))}
      </div>
    </div>
  );
}

const randomDogs = [
  "https://images.dog.ceo/breeds/bulldog-french/n02108915_759.jpg",
  "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2573.jpg",
  "https://images.dog.ceo/breeds/lhasa/n02098413_11385.jpg",
  "https://images.dog.ceo/breeds/malinois/n02105162_1357.jpg",
  "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2132.jpg",
  "https://images.dog.ceo/breeds/malamute/n02110063_4302.jpg",
  "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_674.jpg",
  "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_183.jpg",
  "https://images.dog.ceo/breeds/hound-english/n02089973_2331.jpg",
];
