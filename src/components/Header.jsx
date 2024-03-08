import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl p-3 mx-auto ">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex items-center gap-1 ">
        <span className="px-2 py-1 text-2xl font-bold rounded-lg bg-amber-500">
          IMDb
        </span>
        <span className="hidden text-xl sm:inline">Clone</span>
      </Link>
    </div>
  );
}
