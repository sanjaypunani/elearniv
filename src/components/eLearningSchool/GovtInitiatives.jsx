"use client";

import React from "react";

const GovtInitiatives = ({ lang }) => {
	const currentLang = lang === "hi" ? "hi" : "en";

	const content = {
		en: {
			title: "National Digital Initiatives",
			subtitle: "GOVERNMENT OF INDIA SCHEMES",
			desc: "Explore the core digital education platforms launched by the Ministry of Education to democratize learning across India.",
			initiatives: [
				{
					id: 1,
					title: "DIKSHA Portal",
					description: "Digital Infrastructure for Knowledge Sharing providing study resources and training materials for school education.",
					icon: "bx bx-book-reader"
				},
				{
					id: 2,
					title: "SWAYAM MOOCs",
					description: "Study Webs of Active-Learning for Young Aspiring Minds offers free university-level courses certified by premier institutions.",
					icon: "bx bx-laptop"
				},
				{
					id: 3,
					title: "SWAYAM PRABHA",
					description: "A group of 34 DTH channels devoted to telecasting high-quality educational programmes 24X7.",
					icon: "bx bx-tv"
				},
				{
					id: 4,
					title: "National Digital Library (NDL)",
					description: "A virtual repository of learning resources offering search/browse facilities for learners across all disciplines.",
					icon: "bx bx-library"
				},
				{
					id: 5,
					title: "NPTEL Courses",
					description: "National Programme on Technology Enhanced Learning provides web and video courses for engineering, science, and humanities.",
					icon: "bx bx-analyse"
				},
				{
					id: 6,
					title: "Virtual Labs",
					description: "Simulation-based laboratories providing remote-access to experiments in science and engineering domains.",
					icon: "bx bx-cylinder"
				}
			]
		},
		hi: {
			title: "राष्ट्रीय डिजिटल पहल",
			subtitle: "भारत सरकार की योजनाएँ",
			desc: "पूरे भारत में शिक्षा को लोकतांत्रिक बनाने के लिए शिक्षा मंत्रालय द्वारा शुरू किए गए प्रमुख डिजिटल शिक्षण मंचों का अन्वेषण करें।",
			initiatives: [
				{
					id: 1,
					title: "दीक्षा पोर्टल",
					description: "स्कूल शिक्षा के लिए अध्ययन संसाधन और प्रशिक्षण सामग्री प्रदान करने वाला डिजिटल ज्ञान साझाकरण अवसंरचना।",
					icon: "bx bx-book-reader"
				},
				{
					id: 2,
					title: "स्वयं (SWAYAM)",
					description: "देश के प्रमुख संस्थानों द्वारा प्रमाणित मुफ्त विश्वविद्यालय-स्तरीय ऑनलाइन पाठ्यक्रम प्रदान करने वाला राष्ट्रीय मंच।",
					icon: "bx bx-laptop"
				},
				{
					id: 3,
					title: "स्वयं प्रभा",
					description: "24X7 उच्च गुणवत्ता वाले शैक्षिक कार्यक्रमों के प्रसारण के लिए समर्पित 34 डीटीएच चैनलों का समूह।",
					icon: "bx bx-tv"
				},
				{
					id: 4,
					title: "राष्ट्रीय डिजिटल पुस्तकालय",
					description: "सभी शैक्षणिक स्तरों के शिक्षार्थियों के लिए डिजिटल शिक्षण संसाधनों का एक आभासी भंडार।",
					icon: "bx bx-library"
				},
				{
					id: 5,
					title: "एनपीटीईएल (NPTEL)",
					description: "इंजीनियरिंग, विज्ञान और मानविकी विषयों के लिए वेब और वीडियो पाठ्यक्रम प्रदान करने वाली राष्ट्रीय पहल।",
					icon: "bx bx-analyse"
				},
				{
					id: 6,
					title: "वर्चुअल लैब्स",
					description: "विज्ञान और इंजीनियरिंग विषयों में व्यावहारिक प्रयोगों तक दूरस्थ पहुंच प्रदान करने वाली अनुकरण-आधारित प्रयोगशालाएँ।",
					icon: "bx bx-cylinder"
				}
			]
		}
	};

	const data = content[currentLang];

	return (
		<div className="gov-initiatives-area pt-100 pb-70 bg-f8f9fa">
			<div className="container">
				<div className="section-title text-center mb-5">
					<span className="sub-title text-uppercase font-weight-bold" style={{ color: "#ff9933", letterSpacing: "1.5px" }}>
						{data.subtitle}
					</span>
					<h2 className="mt-2 font-weight-bold" style={{ color: "#0f2c59" }}>
						{data.title}
					</h2>
					<p className="max-w-720 mx-auto text-muted mt-3">
						{data.desc}
					</p>
				</div>

				<div className="row justify-content-center">
					{data.initiatives.map((item) => (
						<div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
							<div className="single-initiative-card h-100 bg-white p-4" style={{
								border: "1px solid #dee2e6",
								borderTop: "3px solid #0f2c59",
								borderRadius: "4px",
								boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
							}}>
								<div className="icon-box mb-3 d-flex align-items-center justify-content-center" style={{
									width: "50px",
									height: "50px",
									backgroundColor: "#f0f4f8",
									borderRadius: "4px",
									color: "#0f2c59"
								}}>
									<i className={item.icon} style={{ fontSize: "24px" }}></i>
								</div>
								<h4 className="font-weight-bold mb-2" style={{ color: "#0f2c59", fontSize: "18px" }}>
									{item.title}
								</h4>
								<p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GovtInitiatives;
