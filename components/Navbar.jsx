import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold text-2xl">
        PentaPet
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-orange-50 p-2 rounded-xl font-semibold text-blue-500-800"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
