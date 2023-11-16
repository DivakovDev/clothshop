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
  { name: "SHIRTS", href: "#", dropdownId: "megamenu" },
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
        <div className="flex flex-wrap justify-between items-center mx-0 w-screen px-4 md:px-6 py-2.5 relative">
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
            <span className="w-px h-5 bg-gray-200 lg:inline mr-2 ml-2 sm:mr-5 sm:ml-5" />
            {/* Signup button */}
            <a
              href="#"
              className="text-sm sm:mr-6 font-medium text-primary-600  hover:underline"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-white border-gray-200 border-y">
        <div className="grid px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
          <form className="flex mb-4 lg:order-2 py-4 lg:mb-0">
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
            <ul className="flex flex-row mt-0 space-x-2 text-sm font-medium">
              {navigationLinks.map((link, index) => (
                <li key={index} className={`group relative`}>
                  <a
                    href={link.href}
                    className="text-gray-900 hover:text-primary-600 py-6 px-4"
                  >
                    {link.name}
                  </a>
                  {/* Conditional rendering for the mega menu */}
                  {link.dropdownId === "ShortsMegamenu" && (
                    <div className="hidden group-hover:block absolute top-full h-max w-max mt-4 bg-white shadow-md border border-gray-200 z-50">
                      {" "}
                      {/* Mega Menu */}
                      <div className="grid py-4 px-4 mx-auto text-gray-900 md:grid-cols-2 lg:grid-cols-4 md:px-6 ">
                        {ShortsMegamenuSections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4">
                            <h3 className="text-lg font-bold">
                              {section.title}
                            </h3>
                            {section.description && (
                              <p className="text-sm text-gray-500">
                                {section.description}
                              </p>
                            )}
                            <ul>
                              {section.items.map(
                                (item: any, itemIndex: any) => (
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
                                )
                              )}
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
