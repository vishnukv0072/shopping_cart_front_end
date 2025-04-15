function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Nexave</h3>
          <p className="text-sm">
            Your favorite place to find deals, trends, and essentials — all in one cart.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Stay in the Loop</h4>
          <p className="text-sm mb-4">Get exclusive offers and updates delivered to your inbox.</p>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Enter your email"
                   className="px-3 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring focus:ring-slate-600"/>
            <button type="submit"
                    className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600 transition">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
        &copy; 2025 Nexave. All rights reserved.
      </div>
    </footer>

  );
}

export default Footer;