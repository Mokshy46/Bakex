const Footer = () => {



    const navLinks = [
        { name: "Home", id: '#home' },
        { name: "Menu", id: '#menu' },
        { name: "About Us", id: '#about' },
        { name: "Gallery", id: ' #gallery' },
        { name: "Contact", id: '#contact' },
    ];


    return (
        <footer className="bg-black text-white px-6 md:px-16 py-12">

            <div className="grid md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-2xl font-bold">Foodie</h2>
                    <p className="text-gray-400 mt-3">
                        Freshly baked happiness every day. Made with love and the finest ingredients.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <div className="space-y-2 text-gray-400 flex flex-col">
                        {navLinks.map((item) => (
                            <a key={item.name} href={item.id} className="hover:text-white cursor-pointer">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-gray-400">📍 Bangalore, India</p>
                    <p className="text-gray-400 mt-2">📞 +91 98765 43210</p>
                    <p className="text-gray-400 mt-2">✉️ hello@foodie.com</p>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                    <p className="text-gray-400 mb-3">
                        Get updates on new products & offers
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded-l-lg text-black outline-none"
                        />
                        <button className="bg-pink-400 px-4 rounded-r-lg hover:bg-pink-500 transition">
                            →
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Foodie. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;