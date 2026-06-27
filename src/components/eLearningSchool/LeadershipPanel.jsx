"use client";

import React from "react";

const LeadershipPanel = ({ lang }) => {
	const currentLang = lang === "hi" ? "hi" : "en";

	const content = {
		en: {
			title: "Messages from Leadership",
			subtitle: "OFFICIAL DESK",
			leaders: [
				{
					id: 1,
					name: "Shri Narendra Modi",
					designation: "Hon'ble Prime Minister of India",
					message: "Our vision is to make India a global knowledge superpower. Through the active integration of digital technology in education, we are ensuring that every youth, from cities to the remotest villages, has access to quality learning and skill development opportunities.",
					label: "Prime Minister's Message"
				},
				{
					id: 2,
					name: "Shri Dharmendra Pradhan",
					designation: "Hon'ble Minister of Education",
					message: "The National Education Policy (NEP) is a guiding light to build a future-ready, self-reliant India. By strengthening digital infrastructures and skill-oriented curriculums, we are breaking all physical barriers to make education holistic and accessible.",
					label: "Minister of Education's Message"
				}
			]
		},
		hi: {
			title: "नेतृत्व संदेश",
			subtitle: "आधिकारिक डेस्क",
			leaders: [
				{
					id: 1,
					name: "श्री नरेन्द्र मोदी",
					designation: "माननीय प्रधानमंत्री, भारत सरकार",
					message: "हमारा दृष्टिकोण भारत को एक वैश्विक ज्ञान महाशक्ति बनाना है। शिक्षा में डिजिटल तकनीक के सक्रिय एकीकरण के माध्यम से, हम यह सुनिश्चित कर रहे हैं कि शहरों से लेकर दूरदराज के गांवों तक प्रत्येक युवा को गुणवत्तापूर्ण शिक्षा और कौशल विकास के अवसर प्राप्त हों।",
					label: "प्रधानमंत्री का संदेश"
				},
				{
					id: 2,
					name: "श्री धर्मेंद्र प्रधान",
					designation: "माननीय शिक्षा मंत्री, भारत सरकार",
					message: "राष्ट्रीय शिक्षा नीति (NEP) एक भविष्य-तैयार, आत्मनिर्भर भारत के निर्माण के लिए हमारा मार्गदर्शन करती है। डिजिटल बुनियादी ढांचे और कौशल-उन्मुख पाठ्यक्रमों को मजबूत करके, हम शिक्षा को समग्र और सुलभ बनाने के लिए सभी बाधाओं को दूर कर रहे हैं।",
					label: "शिक्षा मंत्री का संदेश"
				}
			]
		}
	};

	const data = content[currentLang];

	return (
		<div className="gov-leadership-area pt-100 pb-70 bg-white border-top border-bottom">
			<div className="container">
				<div className="section-title text-center mb-5">
					<span className="sub-title text-uppercase font-weight-bold" style={{ color: "#ff9933", letterSpacing: "1.5px" }}>
						{data.subtitle}
					</span>
					<h2 className="mt-2 font-weight-bold" style={{ color: "#0f2c59" }}>
						{data.title}
					</h2>
				</div>

				<div className="row justify-content-center">
					{data.leaders.map((leader) => (
						<div className="col-lg-6 col-md-12 mb-4" key={leader.id}>
							<div className="leader-card p-4" style={{
								border: "1px solid #dee2e6",
								borderRadius: "4px",
								backgroundColor: "#f8f9fa",
								position: "relative"
							}}>
								<div className="d-flex align-items-start flex-column flex-sm-row">
									<div className="avatar-placeholder d-flex align-items-center justify-content-center mb-3 mb-sm-0 me-sm-4" style={{
										width: "80px",
										height: "80px",
										borderRadius: "50%",
										backgroundColor: "#0f2c59",
										color: "#ffffff",
										fontSize: "24px",
										fontWeight: "bold",
										flexShrink: 0,
										border: "3px solid #ff9933"
									}}>
										{leader.id === 1 ? "NM" : "DP"}
									</div>
									<div>
										<span className="badge text-uppercase mb-2" style={{
											backgroundColor: "#ff9933",
											color: "#ffffff",
											fontSize: "11px",
											padding: "4px 8px"
										}}>
											{leader.label}
										</span>
										<h4 className="font-weight-bold mb-1" style={{ color: "#0f2c59", fontSize: "20px" }}>
											{leader.name}
										</h4>
										<span className="d-block text-muted mb-3" style={{ fontSize: "14px", fontWeight: "600" }}>
											{leader.designation}
										</span>
										<p className="text-dark italic" style={{ fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", borderLeft: "3px solid #138808", paddingLeft: "15px" }}>
											"{leader.message}"
										</p>
									</div>
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
