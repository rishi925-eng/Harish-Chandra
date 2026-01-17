const Home = () => {
  return (
    <div className="w-full">
      {/* Border wrapper */}
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 overflow-hidden">

        {/* Hero Image */}
        <section className="w-full overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/hero-desktop.jpeg"
            />
            <img
              src="/hero-mobile.jpeg"
              alt="Hero"
              className="w-full h-auto object-contain sm:rounded-xl shadow-xl transition-transform duration-500 border-4 border-white rounded-lg"
            />
          </picture>
        </section>

        {/* Text Content */}
        <section className="mt-4 sm:mt-6 md:mt-10 text-secondary text-sm sm:text-base md:text-lg leading-relaxed font-primary">
          <p className="mb-3 sm:mb-4">
            <span className="font-semibold">Dr. Harish Chandra</span> is an accomplished academician serving as an Assistant Professor of Mathematics in the Department of Mathematics and Scientific Computing at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. With nearly two decades of experience in teaching, research, and academic administration, he has made significant contributions to higher education.
          </p>

          <p className="mb-3 sm:mb-4">
            He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET qualified scholar (JRF & SRF), demonstrating a strong foundation in mathematical research and scholarly excellence.
          </p>

          <p>
            Dr. Chandra is widely recognized as a dedicated and student-centric educator, known for his systematic approach to complex mathematical concepts and his unwavering commitment to developing analytical thinking and problem-solving skills among students. His academic engagement reflects a balanced blend of teaching excellence, research insight, and institutional service.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Home;




