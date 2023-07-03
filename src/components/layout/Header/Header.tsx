'use client';
export default function Header() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/*<Image*/}
            {/*  src="/next.svg"*/}
            {/*  width={64}*/}
            {/*  height={64}*/}
            {/*  alt="Logo"*/}
            {/*  className="h-6"*/}
            {/*/>*/}
            <a href="#" className="text-white text-lg font-semibold">
              Sergey Mkrtumyan
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"*/}
              {/*>*/}
              {/*  Services*/}
              {/*</a>*/}
              <a
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
