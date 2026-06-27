"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = ({ currentUser, homepage, lang }) => {
	const currentLang = lang === "hi" ? "hi" : "en";

	const translations = {
		en: {
			portalTitle: "Citizen Digital Services",
			links: [
				{ text: "🔒 Student Access Portal", url: `/${lang}/auth/student` },
				{ text: "🏢 Instructor Onboarding", url: `/${lang}/auth/teacher` },
				{ text: "🛡️ Administrative Console", url: `/${lang}/auth/admin` },
				{ text: "📜 Browse Government Courses", url: `/${lang}/courses` },
				{ text: "📞 Contact Helpdesk & Support", url: `/${lang}/contact` }
			]
		},
		hi: {
			portalTitle: "नागरिक डिजिटल सेवाएँ",
			links: [
				{ text: "🔒 छात्र प्रवेश पोर्टल", url: `/${lang}/auth/student` },
				{ text: "🏢 प्रशिक्षक पंजीकरण डेस्क", url: `/${lang}/auth/teacher` },
				{ text: "🛡️ प्रशासनिक नियंत्रण कक्ष", url: `/${lang}/auth/admin` },
				{ text: "📜 सरकारी पाठ्यक्रमों की सूची", url: `/${lang}/courses` },
				{ text: "📞 सहायता केंद्र एवं संपर्क", url: `/${lang}/contact` }
			]
		}
	};

	const data = translations[currentLang];

	return (
		<>
			<div className="main-banner" style={{ borderBottom: "4px solid #0f2c59" }}>
				<div className="container-fluid">
					<div className="row align-items-center">
						{/* Left Column - Hero Content */}
						<div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
							<div className="main-banner-content">
								<h1 style={{ color: "#0f2c59", fontWeight: "bold" }}>
									{homepage.banner_heading}
								</h1>
								<p style={{ color: "#4a5568", fontSize: "17px", lineHeight: "1.6" }}>
									{homepage.banner_para}
								</p>

								<div className="mt-4">
									{currentUser ? (
										<Link
											href={`/${lang}/courses`}
											className="default-btn"
										>
											<i className="flaticon-user"></i>{" "}
											{homepage.btnText} <span></span>
										</Link>
									) : (
										<div className="banner-auth-actions d-flex align-items-center flex-wrap">
											<Link
												href={`/${lang}/auth/student`}
												className="default-btn me-3 mb-2"
											>
												<i className="flaticon-user"></i>{" "}
												{homepage.joinFree}{" "}
												<span></span>
											</Link>

											<Link
												href={`/${lang}/auth/teacher`}
												className="btn btn-outline-secondary mb-2"
												style={{
													borderColor: "#0f2c59",
													color: "#0f2c59",
													fontWeight: "600",
													borderRadius: "2px",
													padding: "10px 24px"
												}}
											>
												Teach on Eduup
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Right Column - Citizen Services Board */}
						<div className="col-lg-5 col-md-12">
							<div className="services-card bg-white p-4" style={{
								border: "1px solid #dee2e6",
								borderTop: "4px solid #ff9933",
								borderRadius: "4px",
								boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
							}}>
								<h3 className="font-weight-bold mb-4 pb-2 text-center" style={{
									color: "#0f2c59",
									fontSize: "20px",
									borderBottom: "1px solid #e9ecef"
								}}>
									{data.portalTitle}
								</h3>

								<div className="list-group list-group-flush">
									{data.links.map((link, idx) => (
										<Link
											key={idx}
											href={link.url}
											className="list-group-item list-group-item-action d-flex align-items-center py-3"
											style={{
												color: "#333",
												fontWeight: "500",
												fontSize: "14.5px",
												borderBottom: "1px solid #f1f3f5",
												transition: "all 0.2s"
											}}
											onMouseEnter={(e) => {
												e.target.style.backgroundColor = "#f8f9fa";
												e.target.style.color = "#ff9933";
												e.target.style.paddingLeft = "20px";
											}}
											onMouseLeave={(e) => {
												e.target.style.backgroundColor = "transparent";
												e.target.style.color = "#333";
												e.target.style.paddingLeft = "15px";
											}}
										>
											{link.text}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
