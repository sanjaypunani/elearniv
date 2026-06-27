"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";
import SearchForm from "./SearchForm";

const Navbar = ({
	currentUser,
	lang,
	homepage: {
		home,
		courses,
		about,
		contact,
		searchCourses,
	},
}) => {
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div className="gov-top-bar">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center flex-wrap">
						<div className="d-flex align-items-center flex-wrap">
							<span className="gov-flag"></span>
							{lang === "hi" ? (
								<>
									<span className="fw-bold me-2" style={{ color: "#ff9933" }}>सत्यमेव जयते</span>
									<span className="mx-2" style={{ color: "#666" }}>|</span>
									<span className="me-2">भारत सरकार</span>
									<span className="mx-2" style={{ color: "#666" }}>|</span>
									<span>Government of India</span>
								</>
							) : (
								<>
									<span className="fw-bold me-2" style={{ color: "#ff9933" }}>Satyamev Jayate</span>
									<span className="mx-2" style={{ color: "#666" }}>|</span>
									<span>Government of India</span>
								</>
							)}
						</div>
						<div className="d-none d-md-block">
							{lang === "hi" ? (
								<>
									<span>शिक्षा मंत्रालय</span>
									<span className="mx-2" style={{ color: "#666" }}>|</span>
									<span>Ministry of Education</span>
								</>
							) : (
								<span>Ministry of Education</span>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="tricolor-strip">
				<div className="tricolor-saffron"></div>
				<div className="tricolor-white"></div>
				<div className="tricolor-green"></div>
			</div>

			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link className="navbar-brand" href={`/${lang}`}>
								<Image
									src="/images/logo.png"
									width={240}
									height={38}
									alt="Eduup logo"
								/>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm
									searchCourses={searchCourses}
									lang={lang}
								/>

								<ul className="navbar-nav">
									<li className="nav-item">
										<Link
											href={`/${lang}`}
											className="nav-link"
										>
											{home}
										</Link>
									</li>

									<li className="nav-item">
										<Link
											href={`/${lang}/courses`}
											className="nav-link"
										>
											{courses}
										</Link>
									</li>
									<li className="nav-item">
										<Link
											href={`/${lang}/about`}
											className="nav-link"
										>
											{about}
										</Link>
									</li>
									<li className="nav-item">
										<Link
											href={`/${lang}/contact`}
											className="nav-link"
										>
											{contact}
										</Link>
									</li>
								</ul>
							</div>

							<div className="others-option d-flex align-items-center">

								<div className="option-item">
									{currentUser ? (
										<ProfileDropdown
											currentUser={currentUser}
											lang={lang}
										/>
									) : (
										<div className="auth-nav-actions">
											<Link
												href={`/${lang}/auth/student`}
												className="default-btn"
											>
												<i className="flaticon-user"></i>{" "}
												Student Login <span></span>
											</Link>

											<div className="auth-nav-mini">
												<Link
													href={`/${lang}/auth/teacher`}
												>
													Teacher
												</Link>
												<span>/</span>
												<Link
													href={`/${lang}/auth/admin`}
												>
													Admin
												</Link>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
