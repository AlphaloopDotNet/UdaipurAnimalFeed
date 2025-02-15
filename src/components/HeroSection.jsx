import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      url: "/images/1.jpg",
      alt: "Colorful birds in their natural habitat",
      title: "Giving Voice to the Voiceless",
      subtitle:
        "Creating a compassionate world where every animal finds love, care, and protection",
      cta: "Join Our Mission",
    },
    {
      url: "/images/2.jpg",
      alt: "Birds flying over the sanctuary",
      title: "Healing Hearts & Paws",
      subtitle:
        "Dedicated to rescuing, rehabilitating, and providing forever homes to animals in need",
      cta: "Support Our Cause",
    },
    {
      url: "/images/3.png",
      alt: "Peaceful lake with birds",
      title: "Building Better Lives",
      subtitle:
        "Together we can create a world where every animal lives free from suffering",
      cta: "Make a Difference",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentImage === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 pt-16 md:pt-0">
        <div className="h-full min-h-screen flex items-center">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white animate-slide-up leading-tight">
                  {images[currentImage].title}
                </h1>
              </div>
              <div className="overflow-hidden max-w-2xl">
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 animate-fade-in font-light">
                  {images[currentImage].subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button
                onClick={() => navigate("/donate")}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {images[currentImage].cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Progress */}
        <div className="absolute bottom-8 md:bottom-12 left-4 right-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex gap-2 md:gap-4 items-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 md:w-12 bg-gray-200"
                      : "w-4 md:w-6 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <div className="text-white/80 font-medium text-sm md:text-base">
              {String(currentImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;