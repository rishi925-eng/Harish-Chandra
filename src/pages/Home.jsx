const Home = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-10 bg-[#fff4dc]">


      {/* Border wrapper */}
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 overflow-visible">

        {/* Hero Image */}
        <section className="w-full overflow-visible">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/hero-desktop.jpeg"
            />
            <img
              src="/hero-mobile.jpeg"
              alt="Hero"
              className="w-full h-auto object-contain sm:rounded-xl shadow-xl transform scale-105 transition-transform duration-500 hover:scale-110 border-4 border-white rounded-lg"
            />
          </picture>
        </section>

        {/* Text Content */}
        <section className="mt-4 sm:mt-6 md:mt-10 text-secondary text-sm sm:text-base md:text-lg leading-relaxed font-primary">
          <p className="mb-3 sm:mb-4">
            <span className="font-semibold">Dr. Harish Chandra</span> is an Assistant Professor of Mathematics in the Department of Mathematics and Scientific Computing at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, where he has been actively engaged in teaching, research, and academic administration for nearly two decades.
          </p>

          <p className="mb-3 sm:mb-4">
            He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET (JRF & SRF) qualified scholar, reflecting his strong academic foundation and research capabilities.
          </p>

          <p>
            Dr. Chandra is a dedicated educator known for his structured approach to mathematical concepts and his commitment to nurturing analytical and problem-solving skills among students.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Home;




