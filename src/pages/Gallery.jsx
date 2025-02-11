import React, { useState } from "react";

const Gallery = () => {
  const images = [
    { src: "/images/gallery/gallery.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gallery1.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall2.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall3.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall4.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall5.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall7.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall8.avif", alt: "Rescue Dogs" },
    { src: "/images/gallery/gall2.avif", alt: "Rescue Dogs" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative h-[500px] flex items-center bg-gray-200">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold ">
              Explore Amazing Moments
            </h1>
            <p className="text-xl ">
              Your support helps us provide food, shelter, and medical care to
              stray animals in need.
            </p>
          </div>
        </div>
      </section>
      <div className=" py-10  max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600">
            Moments we've captured along the way
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
