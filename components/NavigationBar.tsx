import { title } from "process";

type MenuItem = {
  name: string;
  href: string;
  description?: string; // make the description optional
};

type MenuSection = {
  title: string;
  description?: string; // this is also optional if some sections don't have a description
  items: MenuItem[];
};

export const navigationLinks = [
  { name: "SHORTS", href: "#", dropdownId: "ShortsMegamenu" },
  { name: "SHIRTS", href: "#", dropdownId: "Shirtsmegamenu" },
  { name: "BEST SELLERS", href: "#", dropdownId: "megamenu" },
  { name: "KITS + PACKS", href: "#", dropdownId: "megamenu" },
  { name: "TACTICAL", href: "#", dropdownId: "megamenu" },
];

export const ShortsMegamenuSections: MenuSection[] = [
  {
    title: "Our Products",
    items: [
      {
        name: "Interval Short",
        description: "High-performance shorts for intense workouts",
        href: "#",
      },
      {
        name: "Tactical Short",
        description: "Durable shorts for tactical activities",
        href: "#",
      },
      {
        name: "Session Short",
        description: "Comfortable shorts for training sessions",
        href: "#",
      },
      {
        name: "Foundation Short",
        description: "Solid base layer for everyday wear",
        href: "#",
      },
      {
        name: "Set Short",
        description: "Versatile shorts for any set of activities",
        href: "#",
      },
      {
        name: "Rep Short",
        description: "Shorts designed for repetitive training",
        href: "#",
      },
      {
        name: "A—L Short",
        description: "Adaptive shorts for leisure and sport",
        href: "#",
      },
      {
        name: "Recover Short",
        description: "Shorts optimized for post-workout recovery",
        href: "#",
      },
      {
        name: "Distance Short",
        description: "Endurance shorts for long distances",
        href: "#",
      },
      {
        name: "Tactical Utility Short",
        description: "Functional shorts with tactical utility",
        href: "#",
      },
    ],
  },
];

export const NavigationBar = () => {
  return (
    <header className="shadow-md relative">
      <nav className="bg-white border-gray-200  ">
        <div className="flex flex-wrap justify-between items-center mx-auto w-screen px-4 md:px-6 py-2.5 relative">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <div className="flex items-center">
            {/* Login button */}
            <a
              href="#"
              className="text-sm font-medium text-primary-600  hover:underline"
            >
              Login
            </a>
            <span className="mr-0 ml-2 w-px h-5 bg-gray-200  lg:inline lg:mr-3 lg:ml-5" />
            {/* facebook logo */}
            <a
              href="#"
              className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg  hover:bg-gray-50 "
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            {/* instgaram logo */}
            <a
              href="#"
              className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg  hover:bg-gray-50 "
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            {/* twitter logo */}
            <a
              href="#"
              className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg  hover:bg-gray-50 "
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            {/* tiktok logo */}
            <a
              href="#"
              className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg  hover:bg-gray-50 "
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-white border-gray-200 border-y">
        <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
          <form className="flex mb-4 lg:order-2 lg:mb-0">
            <div
              id="dropdown"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                position: "absolute",
                inset: "auto auto 0px 0px",
                margin: 0,
                transform: "translate3d(897px, 5637px, 0px)",
              }}
            >
              <ul
                className="py-1 text-sm text-gray-700 "
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100  "
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100  "
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100  "
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100  "
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg md:border-l-6 border border-gray-300 focus:ring-primary-500 focus:border-primary-500       "
                placeholder="Search anything..."
                required
              />
              <button
                title="Search"
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300   "
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="flex items-center relative">
            <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
              {navigationLinks.map((link, index) => (
                <li key={index} className={`group`}>
                  <a
                    href={link.href}
                    className="text-gray-900 hover:text-primary-600"
                  >
                    {link.name}
                  </a>
                  {/* Conditional rendering for the mega menu */}
                  {link.dropdownId === "ShortsMegamenu" && (
                    <div className="hidden group-hover:block absolute left-0 right-0 top-full bg-white shadow-md border border-gray-200 z-50 w-[96%] md:w-[80%]  lg:w-[150%] ">
                      {" "}
                      {/* This ensures the mega menu spans full width */}
                      {/* Mega Menu */}
                      <div className="grid py-4 px-4 max-w-screen-lg text-gray-900 md:grid-cols-2 lg:grid-cols-4 md:px-6">
                        {ShortsMegamenuSections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 mx-2">
                            <h3 className="text-lg font-bold">
                              {section.title}
                            </h3>
                            {section.description && (
                              <p className="text-sm text-gray-500">
                                {section.description}
                              </p>
                            )}
                            <ul>
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="py-1">
                                  <a
                                    href={item.href}
                                    className="text-base text-gray-700 hover:text-gray-900"
                                  >
                                    {item.name}
                                    {item.description && (
                                      <p className="text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
