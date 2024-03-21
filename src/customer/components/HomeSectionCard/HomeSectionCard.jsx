import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rjbyrajat.com/cdn/shop/products/Bold-Maroon-mens-kurta-2.jpg?v=1663076069"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">MAROON MENS KURTA</h3>
        <p className="mt-2 text-sm text-gray-500">
          Mens georgette thread work kurta with all over sequence detailing.
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
