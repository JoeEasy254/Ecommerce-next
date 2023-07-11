import Link from "next/link";

export default function card() {
  return (
    <>
      <div className="mx-4 px-4 border mt-3 rounded-lg shadow-md w-80">
        <div className="flex justify-center">
          <Link href={`/product/${1}`}>
            <img
              className="h-40 object-cover rounded-t-lg"
              src="https://cdn11.bigcommerce.com/s-7a906/images/stencil/320w/products/19599/18844/Patron-El-Alto-Reposado__07092.1688397833.jpg?c=2"
              alt=""
            />
          </Link>
        </div>

        <div className="p-4">
          <ul className="flex justify-between items-center mb-2">
            <li className="text-lg font-semibold">Patron</li>
            <li className="text-gray-500">750ML</li>
          </ul>

          <div className="flex justify-between items-center mb-2">
            <p className="text-xl font-semibold">$5999</p>
            <p className="text-red-500 line-through">$6999</p>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-1 border rounded-full hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>

            <span className="text-xl">4</span>

            <button className="p-1 border rounded-full hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">&#9733;</span>
            <span className="text-yellow-400 mr-1">&#9733;</span>
            <span className="text-yellow-400 mr-1">&#9733;</span>
            <span className="text-yellow-400 mr-1">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
