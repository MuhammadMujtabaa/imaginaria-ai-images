import { Dialog, Popover } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { Images } from "../../assets/images";
import { navigation } from "../../config/constants";
import { Button } from "../../components/formComponents";
const { logo } = Images;
export const Header = () => {
  const location = useLocation();
  const isHome = ["/"]?.includes(location?.pathname);

  const [stickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Method that will fix header after a specific scrollable */
  const fixHeaderFunction = () => {
    if (window.scrollY >= 150) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  window.addEventListener("scroll", fixHeaderFunction);

  return (
    <Fragment>
      <>
        <div className="">
          <header className="absolute inset-x-0 top-0 z-50">
            <Popover
              className={`transition delay-150  duration-300 ease-in-out  w-full ${
                stickyHeader === true
                  ? "fixed z-10 bg-white shadow-md text-[black]"
                  : `${isHome ? "text-white " : "bg-[black] text-white"}`
              }`}
            >
              <nav
                className={`flex items-center justify-between p-6 lg:px-8 `}
                aria-label="Global"
              >
                <div className="flex lg:flex-1">
                  <Link to={"/"} className="-m-1.5 p-1.5">
                    <span className="sr-only">imaginaria</span>
                    <img
                      className={`w-56 ${stickyHeader ? "" : "invert"}`}
                      src={logo}
                      alt="imaginaria"
                    />
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <GiHamburgerMenu />
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <Link
                      key={item?.id}
                      to={item?.link}
                      className="leading-6 text-inherit font-Poppins_bold uppercase"
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <div className="flex gap-5 flex-wrap">
                    <div>
                      <Button
                        onClick={() => {}}
                        size="md"
                        outLineColor={
                          stickyHeader
                            ? "ring-[black] hover:bg-[black]"
                            : "hover:bg-[white] ring-[white] "
                        }
                        textColor={
                          stickyHeader
                            ? "text-[black] hover:text-[white]"
                            : "hover:text-[black]  text-[white]"
                        }
                      >
                        Log in
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => {}}
                        bgColor={
                          stickyHeader
                            ? "bg-[black] ring-[black]"
                            : "bg-white ring-[white]"
                        }
                        textColor={
                          stickyHeader ? "text-[white]" : "text-[black]"
                        }
                        size="md"
                      >
                        Sign Up – It's Free
                      </Button>
                    </div>
                  </div>
                  {/* <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-inherit"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </a> */}
                </div>
              </nav>
              <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[black] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                  <div className="flex items-center justify-between">
                    <Link to={"/"} className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        className={`w-40 ${mobileMenuOpen ? "invert" : ""}`}
                        src={logo}
                        alt="imaginaria"
                      />
                    </Link>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-400 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <AiOutlineClose />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/25">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-800 font-Poppins_bold uppercase"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-6">
                        <div className="flex gap-5 flex-wrap">
                          <div>
                            <Button
                              onClick={() => {}}
                              size="md"
                              outLineColor={"hover:bg-[white] ring-[white] "}
                              textColor={"hover:text-[black]  text-[white]"}
                            >
                              Log in
                            </Button>
                          </div>
                          <div>
                            <Button
                              onClick={() => {}}
                              bgColor={"bg-white ring-[white]"}
                              textColor={"text-[black]"}
                              size="md"
                            >
                              Sign Up – It's Free
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </Popover>
          </header>
        </div>
      </>
    </Fragment>
  );
};

export default Header;
