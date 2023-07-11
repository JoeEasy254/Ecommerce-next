import React from "react";

const PromotionalBanner = () => {
  return (
    <div className="my-4 bg-zinc-800 py-24">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="text-white lg:w-1/2">
          <h2 className="text-4xl lg:text-6xl font-bold">Special Offer!</h2>
          <p className="mt-4 lg:text-lg">
            Get 20% off on all orders this weekend
          </p>
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            src="https://cdn11.bigcommerce.com/s-7a906/images/stencil/1920w/carousel/271/calirosa__16690.jpg?c=2"
            alt="Promotional Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 lg:w-1/2">
          <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded hover:bg-blue-100">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
