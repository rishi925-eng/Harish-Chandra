const Gallery = () => {
  return (
    <div className=" bg-[#fff4dc] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#913c07] mb-8 text-center">
          Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="bg-[#fff4dc]  overflow-hidden  hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
            <img 
              src="/1.jpeg" 
              alt="Gallery Image 1" 
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-[#fff4dc]  overflow-hidden  hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
            <img 
              src="/2.jpeg" 
              alt="Gallery Image 2" 
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-[#fff4dc]  overflow-hidden  hover:shadow-xl transition transform duration-300 z-10 shadow-black shadow-xl rounded-xl">
            <img 
              src="/3.jpeg" 
              alt="Gallery Image 3" 
              className="w-full h-64 object-cover"
            />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Gallery;




