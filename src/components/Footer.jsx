const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 pt-10">
      
      {/* Contact */}
      <div className="text-center mb-6">
        <h3 className="text-white font-semibold mb-4">Contact</h3>
        <p className="text-sm">Email: info@example.com</p>
        <p className="text-sm">Phone: +91 98765 43210</p>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} Estate. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
