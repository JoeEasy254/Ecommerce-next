"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function page() {
  return (
    <div className="mx-4 mt-4 px-5 ">
      <section className="flex flex-col space-y-5 p-5 justify-center">
        <form>
          <div className="flex space-x-4 flex-col justify-center items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="name">Email</Label>
              <Input type="text" id="name" placeholder="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
              <Label htmlFor="password">password</Label>
              <Input type="password" id="password" placeholder="password" />
            </div>
          </div>

          <div className="flex justify-center w-96 mx-auto flex-col space-y-5">
            <Button className="hover:bg-black text-white">
              Login To Your Account
            </Button>
            <Button className="bg-blue-500 text-white p-3 relative">
              <FaFacebook className="absolute left-4 bottom-2 text-2xl" />
              Log In With Facebook
            </Button>
          </div>

          <div className="flex justify-center w-96 mx-auto flex-col space-y-5 mt-4">
            <p>
              Dont have an account?{" "}
              <Link href="/auth/register" className="text-blue-400">
                register
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
