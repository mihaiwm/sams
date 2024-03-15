import React from "react";
import "./Footer.scss";

function Footer() {
  const data = [
    {
      title: "Nearest offial Samsonite Stores",
      links: ["Find a store"],
      href: ["https://www.samsonite.co.uk/samsonite-store/"],
    },
    {
      title: "Samsonite",
      links: [
        "About Samsonite",
        "Collections",
        "eGift Cards",
        "Corporate Gifts",
        "Refer a friend",
        "Cabin Luggage Finder",
        "Vacancies",
        "Press Contact",
        "Catalogues 2024",
        "Sitemap",
      ],
      href: [
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
      ],
    },
    {
      title: "Support",
      links: [
        "My Order",
        "Shipping & Returns",
        "FAQ",
        "Warranty",
        "Store Locator",
        "Repair Centre",
        "Contact Us",
        "Press Contact",
        "Catalogues 2024",
        "Sitemap",
      ],
      href: [
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use and Sale",
        "Privacy Policy",
        "Cookies Policy",
        "Cookies Settings",
        "Modern Slavery Transparency Statement",
        "Fake Websites",
        "Vacancies",
        "Press Contact",
        "Catalogues 2024",
        "Sitemap",
      ],
      href: [
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
        "https://www.samsonite.co.uk/about-samsonite/",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer__navigation">
        {data.map((section, index) => {
          return (
            <ul className="footer__section">
              <p className="footer__sectionTitle">{section.title}</p>
              {section.links.map((link, index) => {
                return (
                  <li className="footer__linkItem">
                    <a href={section.href[index]} className="footer__link">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        })}
        <div className="footer__lastSection">
          <p className="footer__sectionTitle">Join us on</p>
          <div className="footer__tiktokWrapper">
            <img
              className="footer__tiktok"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dw3b3cddc2/footer/tiktok.svg"
              alt=""
            />
          </div>
          <ul className="footer__social">
            <li className="footer__socialIconWrapper">
              <img className="footer__socialIcon" src="" alt="" />
            </li>
            <li className="footer__socialIconWrapper">
              <img className="footer__socialIcon" src="" alt="" />
            </li>
            <li className="footer__socialIconWrapper">
              <img className="footer__socialIcon" src="" alt="" />
            </li>
            <li className="footer__socialIconWrapper">
              <img className="footer__socialIcon" src="" alt="" />
            </li>
            <li className="footer__socialIconWrapper">
              <img className="footer__socialIcon" src="" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__partners">
        <div className="footer__partnerInfo">
          <span className="footer__info">Our Partners</span>
        </div>
        <div className="footer__partner">
          <div className="footer__partnerNameWrapper">
            <img
              className="footer__partnerNameImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwab52e631/footer/amto.png"
              alt=""
            />
          </div>
          <div className="footer__partnerImgWrapper">
            <img
              className="footer__partnerImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwfddb0fac/footer/amto-product.png"
              alt=""
            />
          </div>
        </div>

        <div className="footer__partner">
          <div className="footer__partnerNameWrapper">
            <img
              className="footer__partnerNameImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwad8f434f/footer/gregory.png"
              alt=""
            />
          </div>
          <div className="footer__partnerImgWrapper">
            <img
              className="footer__partnerImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dw66213b11/footer/gregory-product.png"
              alt=""
            />
          </div>
        </div>

        <div className="footer__partner">
          <div className="footer__partnerNameWrapper">
            <img
              className="footer__partnerNameImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwa261e2f3/footer/lipault.png"
              alt=""
            />
          </div>
          <div className="footer__partnerImgWrapper">
            <img
              className="footer__partnerImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwb2720581/footer/lipault-product.png"
              alt=""
            />
          </div>
        </div>

        <div className="footer__partner">
          <div className="footer__partnerNameWrapper">
            <img
              className="footer__partnerNameImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dw6d3b5382/footer/tumi.png"
              alt=""
            />
          </div>
          <div className="footer__partnerImgWrapper">
            <img
              className="footer__partnerImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dwf065ea7a/footer/tumi-product.png"
              alt=""
            />
          </div>
        </div>

        <div className="footer__partner">
          <div className="footer__partnerNameWrapper">
            <img
              className="footer__partnerNameImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dw4f617404/footer/rolling-luggage.png"
              alt=""
            />
          </div>
          <div className="footer__partnerImgWrapper">
            <img
              className="footer__partnerImg"
              src="https://www.samsonite.co.uk/on/demandware.static/-/Library-Sites-sams-content-library/default/dw8e187d0e/footer/rolling-luggage-product.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
