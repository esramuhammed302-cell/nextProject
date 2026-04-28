import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/contactUs", label: "Contact" },
    { href: "/books", label: "Books" },
    { href: "/login", label: "Login" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              My App
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;