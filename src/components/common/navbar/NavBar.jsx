import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About Me", url: "profile" },
  { 
    id: 3, 
    name: "Professional Experience",
    url: "experience",
    subItems: ["Projects", "Leadership Roles", "Community Involvement"]
  },
  { 
    id: 4, 
    name: "Projects", 
    url: "projects",
    subItems: ["Academic Projects", "Personal Projects"]
  },
  { 
    id: 5, 
    name: "Credentials", 
    url: "services",
    subItems: ["Education", "Workshop", "Licenses"]
  },
  { 
    id: 6, 
    name: "Workshops", 
    url: "services",
    subItems: ["In-House", "External"]
  },
  { id: 7, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li 
    key={item.id} 
    onMouseDown={(e) => e.preventDefault()}
    className="relative group"
  >
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#2563eb",
        color: "white",
      }}
      className="hover:text-blue-600 px-4 py-3 mx-1 rounded-lg transition-all duration-500 hover:bg-blue-50 font-medium relative overflow-hidden group"
    >
      <span className="relative z-10">{item.name}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg opacity-10"></div>
      
      {/* Hover underline animation */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-500 delay-100"></div>
    </Link>

    {/* Dropdown for sub-items */}
    {item.subItems && (
      <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-50">
        <div className="p-3">
          <div className="space-y-2">
            {item.subItems.map((subItem, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 cursor-pointer border-l-2 border-transparent hover:border-blue-600"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setPosition(currentPosition);
      setIsScrolled(currentPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl"
          : "bg-white/90 backdrop-blur-sm"
      } z-50 transition-all duration-700 ${
        isMounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
       <div className="navbar flex justify-between w-full px-6 lg:px-12">
        {/* Title moved to the left */}
        <Link
          href="#introduction"
          to={`introduction`}
          smooth={true}
          duration={900}
          className="flex items-center border-0 lg:max-xxl:ps-0 pl-10 group"
        >
          <p className="text-2xl sm:text-[36px] my-auto font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-xl">
            Mohamed Sajid
          </p>
        </Link>

        {/* Nav menu moved to the right */}
        <div className="lg:flex items-center ml-auto justify-end">
          <ul className="hidden lg:flex menu menu-horizontal text-[15px] font-semibold md:shrink-0 items-center space-x-1 justify-end">
            {menu}
          </ul>

          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost hover:bg-blue-50 transition-all duration-500 hover:scale-110 hover:shadow-lg rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-500 hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-4 shadow-2xl font-semibold flex-nowrap bg-white/95 backdrop-blur-lg border border-gray-100 transform origin-top transition-all duration-500 scale-95 hover:scale-100"
            >
              {menu}
            </ul>
          </div>

          {/* Contact Button */}
          <p className="ml-4">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white hover:from-blue-700 hover:to-blue-800 transform transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              <span className="relative z-10 transition-all duration-500 group-hover:tracking-wider">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
