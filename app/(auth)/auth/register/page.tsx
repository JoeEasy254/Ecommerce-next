import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
export default function register() {
  return (
    <div className="mx-4 mt-4 px-5 ">
      <h1 className="mx-4 text-2xl">Create Account</h1>
      <section className="flex flex-col space-y-5 p-5 justify-center">
        <form>
          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input type="tel" id="mobile" placeholder="mobile Number" />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="city">city</Label>
              <Input type="text" id="city" placeholder="city" />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="state">state</Label>
              <Input type="text" id="state" placeholder="state" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="zip">zip</Label>
              <Input type="text" id="zip" placeholder="zip" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="CA">CA</Label>
              <Input type="text" id="CA" placeholder="CA" />
            </div>
          </div>

          <div className="flex justify-center w-96 mx-auto flex-col space-y-5">
            <Button className="hover:bg-black text-white">
              create Account
            </Button>
            <Button className="bg-blue-500 text-white p-3 relative">
              <FaFacebook className="absolute left-4 bottom-2 text-2xl" />
              Log In With Facebook
            </Button>
          </div>
          <div className="flex justify-center w-96 mx-auto flex-col space-y-5 mt-4">
            <p>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-400">
                login here
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
