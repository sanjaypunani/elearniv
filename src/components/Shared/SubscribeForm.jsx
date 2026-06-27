"use client";
import React, { useState } from "react";

const SubscribeForm = ({
	homepage: {
		subscribeArea: {
			subTitle,
			heading,
			helpText,
			placeholder,
			subscribeNow,
		},
	},
}) => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="subscribe-area bg-f9f9f9 ptb-100">
				<div className="container">
					<div className="subscribe-content">
						<span className="sub-title">{subTitle}</span>
						<h2>{heading}</h2>
						<p>{helpText}</p>

						<form
							className="newsletter-form"
							onSubmit={handleSubmit}
						>
							<input
								type="email"
								className="input-newsletter"
								placeholder={placeholder}
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>

							<button
								type="submit"
								className="default-btn"
							>
								<i className="flaticon-user"></i> {subscribeNow}{" "}
								<span></span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubscribeForm;
