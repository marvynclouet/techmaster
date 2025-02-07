// Import des composants nécessaires de Material Tailwind
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    // Carousel principal avec coins arrondis
    <Carousel className="rounded-xl">
      {/* Premier slide */}
      <div className="relative h-full w-full">
        {/* Image de fond */}
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        {/* Overlay noir semi-transparent avec contenu centré */}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            {/* Titre du slide */}
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            {/* Texte descriptif */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts...
            </Typography>
            {/* Boutons d'action */}
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième slide - Structure similaire avec alignement à gauche */}
      <div className="relative h-full w-full">
        {/* ... Structure similaire avec différent placement ... */}
      </div>

      {/* Troisième slide - Structure similaire avec alignement en bas */}
      <div className="relative h-full w-full">
        {/* ... Structure similaire avec différent placement ... */}
      </div>
    </Carousel>
  );
}