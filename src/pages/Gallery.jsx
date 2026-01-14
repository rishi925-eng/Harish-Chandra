const Gallery = () => {
  const images = [
    { id: 1, srce: "/1.jpeg", alte: "Gallery Image 1" },
    { id: 2, srce: "/2.jpeg", alte: "Gallery Image 2" },
    { id: 3, srce: "/3.jpeg", alte: "Gallery Image 3" },
    { id: 4, srce: "/4.JPG", alte: "Gallery Image 4" },
    { id: 5, srce: "/5.JPG", alte: "Gallery Image 5" },
    { id: 6, srce: "/6.jpg", alte: "Gallery Image 6" },
    { id: 7, srce: "/7.JPG", alte: "Gallery Image 7" },
    { id: 8, srce: "/8.JPG", alte: "Gallery Image 8" },
    { id: 9, srce: "/9.JPG", alte: "Gallery Image 9" },
    { id: 10, srce: "/10.png", alte: "Gallery Image 10" },
    { id: 11, srce: "/11.jpeg", alte: "Gallery Image 11" },
    { id: 12, srce: "/12.jpeg", alte: "Gallery Image 12" },
    { id: 13, srce: "/13.JPG", alte: "Gallery Image 13" },
    { id: 14, srce: "/14.jpeg", alte: "Gallery Image 14" },
    { id: 15, srce: "/15.jpeg", alte: "Gallery Image 15" },
    { id: 16, srce: "/16.jpeg", alte: "Gallery Image 16" },
  ];
  return (
    <div className=" bg-[#fff4dc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#913c07] mb-8 text-center">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          {images.map((img) => (
            <div className="bg-[#fff4dc] flex align-middle hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
              <img
                src={img.srce}
                alt={img.alte}
                className="w-full rounded-xl max-h-64 object-contain mx-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
