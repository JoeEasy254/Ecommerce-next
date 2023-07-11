import CartItems from "@/components/core/CartItems";
import DeliveryInformation from "@/components/core/DeliveryInformation ";
export default function cartItems() {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl mx-6">Delivery Information</h1>
          <DeliveryInformation />
        </div>
        <div>
          <h1 className="text-2xl mx-6 mb-4">Order Summary</h1>
          <CartItems />
        </div>
      </div>
    </div>
  );
}
