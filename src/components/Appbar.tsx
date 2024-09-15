"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { Navbar } from "flowbite-react";
import Link from "next/link";

export const Appbar = () => (
  <Navbar fluid rounded>
    <Navbar.Brand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Impact Recruitment Task
      </span>
    </Navbar.Brand>
    <ul className="flex items-center gap-4">
      <Link href="/cart" passHref legacyBehavior>
        <Navbar.Link>
          <MdOutlineShoppingCart size="1.5em" />
        </Navbar.Link>
      </Link>
    </ul>
  </Navbar>
);
