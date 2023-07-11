import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function DeliveryInformation() {
  return (
    <div className="mx-4 mt-4">
      <section className="flex flex-col space-y-5 p-5">
        <form>
          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input type="tel" id="mobile" placeholder="mobile Number" />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="city">city</Label>
              <Input type="text" id="city" placeholder="city" />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="state">state</Label>
              <Input type="text" id="state" placeholder="state" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="zip">zip</Label>
              <Input type="text" id="zip" placeholder="zip" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="CA">CA</Label>
              <Input type="text" id="CA" placeholder="CA" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
