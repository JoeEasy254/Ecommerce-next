"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MenuLinks from "@/components/core/menuLinks";
import Link from "next/link";
export default function Navbar() {
  const [ismounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ismounted) return null;

  const liquorCategories = ["spirits", "wines", "Beer"];

  const handleCartClick = () => {
    router.push("/cart");
  };
  const navigateToAccount = () => {
    router.push("/account");
  };
  return (
    <>
      <div>
        <div className="flex-col space-y-3">
          <ul className="flex justify-around p-3 items-center">
            <li>
              <Link href={"/"}>CheersCentral</Link>
            </li>
            <li className="w-96">
              <input
                type="text"
                className="border w-96  rounded py-2 px-4 "
                placeholder="search product"
              />
            </li>

            <ul className="flex space-x-4 cursor-pointer">
              <li>Home</li>
              <li>Products</li>
              <li>Brands</li>
              <li>About us</li>
            </ul>
            {/* <li>
              <FaBars />
            </li> */}
            <li className="border p-2 rounded cursor-pointer bg-[#000] text-white">
              <Link href="/auth/register">signin/register</Link>
            </li>

            <li
              onClick={navigateToAccount}
              className="border p-2 rounded cursor-pointer bg-blue-500 text-white"
            >
              <Link href="/auth/register">My Account</Link>
            </li>
            <li className="bg-[#ddd] p-2 rounded-full hover:bg-black hover:text-white cursor-pointer text-2xl items-center">
              <AiOutlineShoppingCart onClick={handleCartClick} />
            </li>
          </ul>
        </div>
      </div>

      <MenuLinks />
    </>
  );
}
