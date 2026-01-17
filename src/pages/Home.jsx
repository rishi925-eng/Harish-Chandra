const Home = () => {
  return (
    <div className="w-full min-h-[500px] sm:min-h-screen bg-white flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 p-6 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10 bg-white">
          <div className="space-y-2">
            <h2 className="text-[#913c07] font-bold tracking-wider uppercase text-sm">Assistant Professor</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Dr. Harish <br /> <span className="text-[#913c07]">Chandra</span>
            </h1>
            <div className="h-1.5 w-24 bg-[#913c07] rounded-full mt-4"></div>
          </div>

          <div className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify lg:text-left space-y-4">
            <p>
              <span className="font-semibold text-gray-800">Dr. Harish Chandra</span> is an accomplished academician serving as an Assistant Professor of Mathematics in the Department of Mathematics and Scientific Computing at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur.
            </p>
            <p>
              With nearly two decades of experience in teaching, research, and academic administration, he has made significant contributions to higher education. He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET qualified scholar (JRF & SRF).
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-auto w-full">
          <img
            src="/13.jpg"
            alt="Dr. Harish Chandra"
            className="w-full h-full object-cover object-center lg:object-left"
          />
          {/* White Gradient Overlay - Left side of image on Desktop */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          {/* Bottom Gradient for Mobile Text readability transition if needed, or just style */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white lg:hidden"></div>
        </div>

      </div>
    </div>
  );
};

export default Home;




