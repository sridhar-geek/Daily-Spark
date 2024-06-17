import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white">
      {/* Main Container which holds grid elements */}
      <div className="py-8 mx-4 lg:mx-8  flex flex-col text-center gap-10 items-center md:flex-row md:justify-between">
        {/* App Name */}
        <div className="font-serif md:col-start-1 col-end-3 font-bold text-3xl md:text-4xl">
          Daily Sparks
        </div>
        {/* Nav Elements */}
        <div className="footerNav">
          <h3 className="footerHeading">Company</h3>
          <p className="footerLinks">About</p>
          <p className="footerLinks">Careers</p>
          <p className="footerLinks">Conatact</p>
        </div>
        <div className="footerNav">
          <h3 className="footerHeading">Features</h3>
          <p className="footerLinks">Link Sharing</p>
          <p className="footerLinks">Branded Links</p>
          <p className="footerLinks">Analytics</p>
        </div>
        <div className="footerNav">
          <h3 className="footerHeading">Resources</h3>
          <p className="footerLinks">Articles</p>
          <p className="footerLinks">News Letters</p>
          <p className="footerLinks">Subscribe Us</p>
        </div>
        {/* Social Icons */}
        <div className="col-start-7 col-end-8 justify-center flex items-center gap-4">
          <FaFacebook className="icons" />
          <FaTwitter className="icons" />
          <FaInstagram className="icons" />
          <FaYoutube className="icons" />
        </div>
      </div>
      <p className="text-center pb-3">
        © 2024 Daily Sparks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
