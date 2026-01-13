import React from "react";

const Books = () => {
  return (
    <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc] min-h-screen">
      
      {/* ================= Header Section ================= */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-2 sm:mb-3">
        Free Books of Mathematics
      </h2>
      <p className="text-sm sm:text-base text-[#563c29] mb-6 sm:mb-8 font-primary italic">
        Here are some useful books of mathematics which can be easily downloaded.
      </p>

      {/* ================= Books Table ================= */}
      <div className="overflow-x-auto -mx-2 sm:-mx-3 md:mx-0">
        <table className="w-full border-collapse text-secondary mb-10 text-xs sm:text-sm md:text-base font-primary">
          <thead>
            <tr className="border-t border-b border-[#913c07] font-semibold text-left text-[#913c07]">
              <th className="py-2 sm:py-3 px-2 w-12 sm:w-16">S.No.</th>
              <th className="py-2 sm:py-3 px-2">Book Title</th>
              <th className="py-2 sm:py-3 px-2">Author / Details</th>
              <th className="py-2 sm:py-3 px-2 text-center w-24 sm:w-32">Download</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-3 sm:py-4 px-2">1.</td>
              <td className="py-3 sm:py-4 px-2 font-medium">Real Analysis</td>
              <td className="py-3 sm:py-4 px-2 text-[#563c29]">Classical approach to Analysis</td>
              <td className="py-3 sm:py-4 px-2 text-center">
                <a href="#" className="text-[#913c07] hover:underline font-semibold">Download PDF</a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-3 sm:py-4 px-2">2.</td>
              <td className="py-3 sm:py-4 px-2 font-medium">Abstract Algebra</td>
              <td className="py-3 sm:py-4 px-2 text-[#563c29]">Groups, Rings and Fields</td>
              <td className="py-3 sm:py-4 px-2 text-center">
                <a href="#" className="text-[#913c07] hover:underline font-semibold">Download PDF</a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-3 sm:py-4 px-2">3.</td>
              <td className="py-3 sm:py-4 px-2 font-medium">Linear Algebra</td>
              <td className="py-3 sm:py-4 px-2 text-[#563c29]">Matrix Theory and Vector Spaces</td>
              <td className="py-3 sm:py-4 px-2 text-center">
                <a href="#" className="text-[#913c07] hover:underline font-semibold">Download PDF</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Optional Note at bottom */}
      <p className="text-xs sm:text-sm text-[#913c07] font-primary italic">
        * More books will be added soon. Keep checking this section for updates.
      </p>
    </div>
  );
};

export default Books;