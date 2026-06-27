"use client";

import React from "react";
import Link from "next/link";

const AffordableCertification = ({
	homepage: {
		premiumAccess: { subTitle, heading, helpText },
		registerForFree,
	},
}) => {
	return (
		<>
			<div className="premium-access-area ptb-100">
				<div className="container">
					<div className="premium-access-content">
						<span className="sub-title">{subTitle}</span>
						<h2>{heading}</h2>
						<p>{helpText}</p>

						<Link href="#" className="default-btn">
							<i className="flaticon-user"></i> {registerForFree}{" "}
							<span></span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AffordableCertification;
