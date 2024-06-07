import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Image from "next/image";

import { Sigmar_One } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";

const sigmar = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
});

const lucky = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Beranda", href: "#product", current: true },
  { name: "Produk", href: "#pricing", current: false },
  { name: "Berita", href: "#features", current: false },
  { name: "Kontak", href: "#features", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block h-12 w-40 lg:hidden"
                  src={"/assets/logo/logo.svg"}
                  alt="paidin-logo"
                  width={100}
                  height={100}
                />

                <h1
                  style={{ fontSize: "30px", color: "#008080" }}
                  className={lucky.className}
                >
                  DINA CAKE
                </h1>
              </div>

              {/* LINKS */}

              <div className="hidden lg:block ml-20">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-75"
                          : "hover:text-black hover:opacity-75",
                        "px-3 py-4 text-lg font-normal text-black space-links",
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}

            <Signdialog />

            {/* REGISTER DIALOG */}

            <Registerdialog />

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
