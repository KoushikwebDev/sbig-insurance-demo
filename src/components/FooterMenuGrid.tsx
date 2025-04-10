// components/footer/FooterMenuGrid.tsx

import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FooterMenuGrid() {
  return (
    <section className="bg-white py-10 px-4 md:px-16 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Vision & Mission */}
        <div>
          <h4 className="font-bold mb-2">Vision</h4>
          <p>
            Our vision is to become the most trusted general insurer for a
            transforming India.
          </p>
          <h4 className="font-bold mt-4 mb-2">Mission</h4>
          <p>
            Our mission is to provide simple and innovative general insurance
            solutions, be responsive to our customers&apos; needs and build a
            sustainable business for the future.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-xl text-[#af2dc0]">
            <a href="#" aria-label="Facebook" className="hover:text-purple-800">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-purple-800">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-800">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-800">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Popular Links */}
        <div>
          <h4 className="font-bold mb-2">Popular Links</h4>
          <ul className="space-y-1">
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Become an Agent</a></li>
            <li><a href="#">Tenders and Procurement</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="#">Intimate Claim</a></li>
            <li><a href="#">Renew Policy</a></li>
            <li><a href="#">Downloads</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-bold mb-2">Help & Support</h4>
          <ul className="space-y-1">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">SBI Branches</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Grievance Redressal</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
