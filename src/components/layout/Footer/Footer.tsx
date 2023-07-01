export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          {/*<a href="#" className="text-gray-300 hover:text-white">*/}
          {/*  Projects*/}
          {/*</a>*/}
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <p className="mt-8 text-center text-gray-400">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
