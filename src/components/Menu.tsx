"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const user = false;

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        className="cursor-pointer"
        src={`${open ? "/close.png" : "/open.png"}`}
        width={20}
        height={20}
        alt=""
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Oders</Link>
          )}
          <span onClick={() => setOpen(false)}>
            <CartIcon />
          </span>
        </div>
      )}
    </div>
  );
};

export default Menu;
