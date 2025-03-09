import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex mt-4 space-x-4">
      <a href="#" className="text-pink-500 hover:text-white text-lg"><FaTwitter /></a>
      <a href="#" className="text-pink-500 hover:text-white text-lg"><FaInstagram /></a>
      <a href="#" className="text-pink-500 hover:text-white text-lg"><FaDiscord /></a>
    </div>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-pink-500">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-start">
        
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-pink-500 text-3xl mr-2">S</span> HIHANI
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            We are a leading NFT marketplace where you can discover and trade NFTs in a great vibe.
          </p>
          <SocialIcons />
        </div>

        <div className="md:w-1/3 flex justify-between">
          <FooterLinks title="About" links={["About Us", "How it Works", "NFT Blog", "Privacy Policy"]} />
          <FooterLinks title="Support" links={["Help Center", "Terms & Conditions", "Submit Ticket", "Contact Us"]} />
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 All rights reserved | HIHANI
      </div>
    </footer>
  );
}
