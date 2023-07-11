// import Image from "next/image";
// import { useForm } from "react-hook-form";

import Navbar from "@/components/core/navbar";
import PromotionalBanner from "@/components/core/promotionBanner";
import Products from "@/components/reusable/cards";
import FeaturedBusiness from "@/components/reusable/fearturedBusiness";
import Swiper from "@/components/reusable/Swiper";

// import { zodResolver } from "@hookform/resolvers/zod";
export default function Home() {
  return (
    <>
      <Swiper />

      <div>
        <h1 className="text-4xl mx-4 my-4 text-center">Featured Products</h1>
        <Products />
      </div>

      <PromotionalBanner />
      <div>
        <h1 className="text-4xl mx-4 my-4 text-center">Top Sellers</h1>
        <Products />
      </div>
      <FeaturedBusiness />
    </>
  );
}
