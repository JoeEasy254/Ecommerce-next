import Filters from "@/components/core/filters";
import PromotionalBanner from "@/components/core/promotionBanner";
import RelatedProducts from "@/components/reusable/relatedProducts";

import Product from "@/components/reusable/card";
interface BrandProps {
  params: {
    brand: string;
  };
}

export default function Brand({ params }: BrandProps) {
  console.log(params.brand[0]);
  return (
    <div>
      <div className="flex justify-between  ">
        <div>
          <Filters />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div>
        <PromotionalBanner />
      </div>
      <div>
        <h1 className="text-center text-5xl">Related Products</h1>
        <RelatedProducts />
      </div>
    </div>
  );
}
