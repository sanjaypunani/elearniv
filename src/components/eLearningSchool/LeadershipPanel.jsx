"use client";

import React from "react";
import Image from "next/image";

const LeadershipPanel = ({ lang }) => {
	const currentLang = lang === "hi" ? "hi" : "en";

	const content = {
		en: {
			title: "Messages from Leadership",
			subtitle: "UTTAR PRADESH GOVERNMENT",
			leaders: [
				{
					id: 1,
					name: "Yogi Adityanath",
					designation: "Hon'ble Chief Minister, Uttar Pradesh",
					message: "Our government is committed to transforming Uttar Pradesh into a knowledge hub. Through digital education initiatives and skill development programs, we are ensuring that every citizen of the state has access to quality education and employment opportunities, building a self-reliant and empowered Uttar Pradesh.",
					label: "Chief Minister's Message",
					image: "/images/yogi-adityanath.jpg",
				},
				{
					id: 2,
					name: "Smt. Anandiben Patel",
					designation: "Hon'ble Governor, Uttar Pradesh",
					message: "Education is the cornerstone of progress and development. The universities and educational institutions of Uttar Pradesh are playing a vital role in shaping the future of our youth. I encourage all students to take full advantage of the digital learning platforms to enhance their knowledge and skills.",
					label: "Governor's Message",
					image: "/images/anandiben-patel.jpg",
				}
			]
		},
		hi: {
			title: "नेतृत्व संदेश",
			subtitle: "उत्तर प्रदेश सरकार",
			leaders: [
				{
					id: 1,
					name: "योगी आदित्यनाथ",
					designation: "माननीय मुख्यमंत्री, उत्तर प्रदेश",
					message: "हमारी सरकार उत्तर प्रदेश को एक ज्ञान केंद्र में बदलने के लिए प्रतिबद्ध है। डिजिटल शिक्षा पहलों और कौशल विकास कार्यक्रमों के माध्यम से, हम यह सुनिश्चित कर रहे हैं कि राज्य के प्रत्येक नागरिक को गुणवत्तापूर्ण शिक्षा और रोजगार के अवसर प्राप्त हों, एक आत्मनिर्भर और सशक्त उत्तर प्रदेश का निर्माण हो।",
					label: "मुख्यमंत्री का संदेश",
					image: "/images/yogi-adityanath.jpg",
				},
				{
					id: 2,
					name: "श्रीमती आनंदीबेन पटेल",
					designation: "माननीय राज्यपाल, उत्तर प्रदेश",
					message: "शिक्षा प्रगति और विकास की आधारशिला है। उत्तर प्रदेश के विश्वविद्यालय और शैक्षणिक संस्थान हमारे युवाओं के भविष्य को आकार देने में महत्वपूर्ण भूमिका निभा रहे हैं। मैं सभी छात्रों को अपने ज्ञान और कौशल को बढ़ाने के लिए डिजिटल शिक्षण प्लेटफार्मों का पूरा लाभ उठाने के लिए प्रोत्साहित करती हूं।",
					label: "राज्यपाल का संदेश",
					image: "/images/anandiben-patel.jpg",
				}
			]
		}
	};

	const data = content[currentLang];

	return (
		<div className="gov-leadership-area pt-100 pb-70" style={{ backgroundColor: "#f5f7fa", borderTop: "4px solid #ff9933" }}>
			<div className="container">
				<div className="section-title text-center mb-5">
					<span className="sub-title text-uppercase font-weight-bold" style={{ color: "#ff9933", letterSpacing: "2px", fontSize: "14px" }}>
						{data.subtitle}
					</span>
					<h2 className="mt-2 font-weight-bold" style={{ color: "#0f2c59" }}>
						{data.title}
					</h2>
				</div>

				<div className="row justify-content-center">
					{data.leaders.map((leader) => (
						<div className="col-lg-6 col-md-12 mb-4" key={leader.id}>
							<div style={{
								backgroundColor: "#ffffff",
								borderRadius: "8px",
								overflow: "hidden",
								boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
								border: "1px solid #e8ecf1",
							}}>
								{/* Large photo */}
								<div style={{
									width: "100%",
									height: "380px",
									position: "relative",
									backgroundColor: "#eef1f5",
									borderBottom: "4px solid #ff9933",
								}}>
									<Image
										src={leader.image}
										fill
										alt={leader.name}
										style={{
											objectFit: "contain",
											objectPosition: "center",
										}}
									/>
								</div>

								{/* Content */}
								<div className="p-4">
									<span className="d-inline-block text-uppercase mb-2" style={{
										backgroundColor: "#ff9933",
										color: "#ffffff",
										fontSize: "11px",
										fontWeight: "700",
										padding: "5px 12px",
										borderRadius: "3px",
										letterSpacing: "0.5px",
									}}>
										{leader.label}
									</span>
									<h4 className="font-weight-bold mb-1" style={{ color: "#0f2c59", fontSize: "22px" }}>
										{leader.name}
									</h4>
									<span className="d-block mb-3" style={{ fontSize: "14px", fontWeight: "600", color: "#138808" }}>
										{leader.designation}
									</span>
									<p style={{
										fontSize: "15px",
										lineHeight: "1.7",
										fontStyle: "italic",
										color: "#444",
										borderLeft: "3px solid #138808",
										paddingLeft: "15px",
										margin: 0,
									}}>
										&ldquo;{leader.message}&rdquo;
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LeadershipPanel;
