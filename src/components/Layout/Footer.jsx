"use client";

import React from "react";
import Link from "next/link";
import baseUrl from "@/utils/baseUrl";

const Footer = ({
  lang,
  homepage: {
    home,
    about,
    contact,
    courses,
    faq,
    terms,
    privacy,
    explore,
    address,
  },
}) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href={`/${lang}/`} className="logo">
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "2rem",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Eduup
                  </span>
                </Link>

                <p>
                  Working to bring significant changes in online-based learning
                  by doing extensive research for course curriculum preparation,
                  student engagements, and looking forward to the flexible
                  education!
                </p>

                <ul className="social-link">
                  <li>
                    <a
                      href={baseUrl}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={baseUrl}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={baseUrl}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={baseUrl}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 offset-lg-1">
              <div className="single-footer-widget">
                <h3>{explore}</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href={`/${lang}/`}>{home}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/about-us`}>{about}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/courses`}>{courses}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/contact`}>{contact}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/faq`}>{faq}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>{address}</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    Software Technology Park of India,(STPI) Meerut (UP) 250003
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    +91 9758003800
                  </li>
                  <li>
                    <i className="bx bx-globe"></i>
                    <a href={baseUrl} target="_blank" rel="noreferrer">
                      eduup.inqtube.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} Eduup. All rights reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href={`/${lang}/privacy-policy`}>{privacy}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/terms-conditions`}>{terms}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
