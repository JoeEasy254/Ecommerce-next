import Product from "@/components/reusable/card";
export default function relatedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
