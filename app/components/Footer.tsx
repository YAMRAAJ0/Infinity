export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Infinity Technologies</h3>
                        <p className="text-gray-400 mb-4">Leading IT solutions provider specializing in mobile and web development, UI/UX design, and digital transformation.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.071 1.645.07 4.849 0 3.205-.013 3.584-.07 4.851C20.39 22.339 19.33 24 12 24c-7.334 0-8.39-1.661-11.93-3.15-.057-1.266-.071-1.646-.071-4.849 0-3.204.013-3.583.07-4.851.148-3.252 1.691-4.771 4.92-4.919.124-.057.278-.07.433-.07 1.654 0 3.043.672 4.23 1.788l-1.49 1.491C9.166 13.73 8 15.11 8 16.937 8 22.937 13.063 28 20 28c5.937 0 12-5.063 12-11.937 0-1.826-.47-3.207-1.343-4.437l1.07-1.071C22.328 10.671 24 8.796 24 6.163 24 2.929 21.071.001 17.837.001 14.603.001 12.727.877 12 2.163z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="/mobile-apps" className="text-gray-400 hover:text-white">Mobile App Development</a></li>
                            <li><a href="/web-development" className="text-gray-400 hover:text-white">Web Development</a></li>
                            <li><a href="/ui-ux" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
                            <li><a href="/digital-transformation" className="text-gray-400 hover:text-white">Digital Transformation</a></li>
                            <li><a href="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li><a href="mailto:contact@infinitytech.com" className="text-gray-400 hover:text-white">Email: contact@infinitytech.com</a></li>
                            <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">Phone: +1 (234) 567-890</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Form</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Infinity Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}