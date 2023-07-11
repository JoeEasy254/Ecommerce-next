const FeaturedBusiness = () => {
  const business = {
    name: "Tipsy Tastings",
    description:
      "At Tipsy Tastings, we're all about redefining the boundaries of the traditional liquor experience. Our innovative team of mixologists has mastered the art of crafting mesmerizing mocktails that pack a punch without the buzz. We believe that everyone deserves to savor the elegance, complexity, and sheer joy of a well-crafted drink, regardless of their preference for alcohol.",
    imageSrc:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Featured Business",
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Featured Business
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={business.imageSrc}
              alt={business.imageAlt}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-8">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center lg:text-left">
              {business.name}
            </h3>
            <p className="text-lg lg:text-xl">{business.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 w-full lg:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusiness;
