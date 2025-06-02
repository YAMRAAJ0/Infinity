import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black opacity-80 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img 
                                src="/image.png" 
                                alt="Logo" 
                                className="h-8 w-auto"
                            />
                            <h1 className="ml-2 text-xl font-bold text-gray-100">Infinity</h1>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link 
                            href="/" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 hover:text-gray-500"
                        >
                            Home
                        </Link>
                        <a 
                            href="/products" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 hover:text-gray-500"
                        >
                            Products
                        </a>
                        <a 
                            href="/services" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 hover:text-gray-500"
                        >
                            Services
                        </a>
                        <a 
                            href="/about" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 hover:text-gray-500"
                        >
                            About
                        </a>
                        <a 
                            href="/contact" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 hover:text-gray-500"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}