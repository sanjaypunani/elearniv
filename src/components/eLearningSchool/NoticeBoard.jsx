"use client";

import React from "react";

const NoticeBoard = ({ lang }) => {
	const currentLang = lang === "hi" ? "hi" : "en";

	const content = {
		en: {
			title: "Announcements & Notices",
			subtitle: "LATEST UPDATES",
			noticesTitle: "Circulars & Notifications",
			newsTitle: "Press Releases & News",
			notices: [
				{ id: 1, date: "June 20, 2026", text: "Implementation guidelines for National Curricular Framework (NCF) in school education.", type: "Circular" },
				{ id: 2, date: "June 15, 2026", text: "Invitation of applications for the National Teachers' Award 2026.", type: "Notice" },
				{ id: 3, date: "June 10, 2026", text: "Bilingual guidelines released for Digital Learning Platforms across CBSE institutions.", type: "Circular" },
				{ id: 4, date: "May 28, 2026", text: "Integration of Virtual Labs with secondary school science curriculums.", type: "Notification" }
			],
			news: [
				{ id: 1, date: "June 18, 2026", text: "Union Minister of Education reviews the implementation progress of digital educational schemes under PM e-VIDYA." },
				{ id: 2, date: "June 12, 2026", text: "Launch of online skill-enhancement certifications for students in rural government institutions." },
				{ id: 3, date: "June 05, 2026", text: "MoE signs memorandum with leading technology institutions for open-source digital textbook developments." }
			]
		},
		hi: {
			title: "घोषणाएँ और सूचनाएँ",
			subtitle: "नवीनतम अपडेट",
			noticesTitle: "परिपत्र और अधिसूचनाएं",
			newsTitle: "प्रेस विज्ञप्ति और समाचार",
			notices: [
				{ id: 1, date: "20 जून, 2026", text: "स्कूली शिक्षा में राष्ट्रीय पाठ्यचर्या रूपरेखा (NCF) के कार्यान्वयन के दिशा-निर्देश।", type: "परिपत्र" },
				{ id: 2, date: "15 जून, 2026", text: "राष्ट्रीय शिक्षक पुरस्कार 2026 के लिए आवेदनों का आमंत्रण।", type: "सूचना" },
				{ id: 3, date: "10 जून, 2026", text: "सीबीएसई संस्थानों में डिजिटल लर्निंग प्लेटफॉर्म के लिए द्विभाषी दिशा-निर्देश जारी।", type: "परिपत्र" },
				{ id: 4, date: "28 मई, 2026", text: "माध्यमिक विद्यालय के विज्ञान पाठ्यक्रम के साथ वर्चुअल लैब्स का एकीकरण।", type: "अधिसूचना" }
			],
			news: [
				{ id: 1, date: "18 जून, 2026", text: "केंद्रीय शिक्षा मंत्री ने पीएम ई-विद्या के तहत डिजिटल शैक्षिक योजनाओं के कार्यान्वयन की प्रगति की समीक्षा की।" },
				{ id: 2, date: "12 जून, 2026", text: "ग्रामीण सरकारी संस्थानों में छात्रों के लिए ऑनलाइन कौशल-संवर्धन प्रमाणपत्रों की शुरुआत।" },
				{ id: 3, date: "05 जून, 2026", text: "शिक्षा मंत्रालय ने ओपन-सोर्स डिजिटल पाठ्यपुस्तकों के विकास के लिए प्रमुख प्रौद्योगिकी संस्थानों के साथ समझौता ज्ञापन पर हस्ताक्षर किए।" }
			]
		}
	};

	const data = content[currentLang];

	return (
		<div className="gov-notices-area ptb-100 bg-white">
			<div className="container">
				<div className="section-title text-center mb-5">
					<span className="sub-title text-uppercase font-weight-bold" style={{ color: "#ff9933", letterSpacing: "1.5px" }}>
						{data.subtitle}
					</span>
					<h2 className="mt-2 font-weight-bold" style={{ color: "#0f2c59" }}>
						{data.title}
					</h2>
				</div>

				<div className="row">
					{/* Circulars and Notifications Column */}
					<div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
						<div className="notices-card h-100 bg-light p-4" style={{
							border: "1px solid #dee2e6",
							borderRadius: "4px"
						}}>
							<h3 className="font-weight-bold mb-4 pb-2 d-flex align-items-center" style={{
								color: "#0f2c59",
								fontSize: "20px",
								borderBottom: "2px solid #0f2c59"
							}}>
								<i className="bx bx-file-blank me-2 text-primary" style={{ color: "#0f2c59" }}></i>
								{data.noticesTitle}
							</h3>
							<ul className="list-unstyled">
								{data.notices.map((notice) => (
									<li key={notice.id} className="mb-4 pb-3 border-bottom d-flex align-items-start">
										<div className="me-3 text-center" style={{ flexShrink: 0 }}>
											<span className="badge text-uppercase" style={{
												backgroundColor: notice.type === "Circular" || notice.type === "परिपत्र" ? "#0f2c59" : "#ff9933",
												color: "#ffffff",
												fontSize: "10px",
												display: "block",
												minWidth: "70px"
											}}>
												{notice.type}
											</span>
										</div>
										<div>
											<span className="text-muted d-block" style={{ fontSize: "12px", marginBottom: "4px" }}>
												{notice.date}
											</span>
											<a href="#" className="font-weight-medium" style={{
												color: "#2b2b2b",
												fontSize: "14.5px",
												lineHeight: "1.5",
												textDecoration: "none",
												transition: "color 0.2s"
											}} onMouseEnter={(e) => e.target.style.color = "#ff9933"} onMouseLeave={(e) => e.target.style.color = "#2b2b2b"}>
												{notice.text}
											</a>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Press Releases & News Column */}
					<div className="col-lg-6 col-md-12">
						<div className="news-card h-100 bg-light p-4" style={{
							border: "1px solid #dee2e6",
							borderRadius: "4px"
						}}>
							<h3 className="font-weight-bold mb-4 pb-2 d-flex align-items-center" style={{
								color: "#0f2c59",
								fontSize: "20px",
								borderBottom: "2px solid #0f2c59"
							}}>
								<i className="bx bx-news me-2 text-primary" style={{ color: "#0f2c59" }}></i>
								{data.newsTitle}
							</h3>
							<ul className="list-unstyled">
								{data.news.map((item) => (
									<li key={item.id} className="mb-4 pb-3 border-bottom">
										<span className="text-muted d-block mb-1" style={{ fontSize: "12px" }}>
											{item.date}
										</span>
										<p style={{
											color: "#333333",
											fontSize: "14.5px",
											lineHeight: "1.6",
											marginBottom: 0
										}}>
											{item.text}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NoticeBoard;
