import React from "react";

const Books = () => {
  return (
    <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc] w-fit mx-auto my-8 shadow-md">
      
      {/*Header Section*/}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-2 sm:mb-3">
        Free Books of Mathematics
      </h2>
      <p className="text-sm sm:text-base text-[#563c29] mb-6 sm:mb-8 font-primary italic">
        Here are some useful books of mathematics which can be easily downloaded.
      </p>

      {/*upcoming note*/}
      <p className="text-xs sm:text-sm text-[#913c07] font-primary italic">
        * Books will be added soon. Keep checking this section for updates.
      </p>
    </div>
  );
};

export default Books;