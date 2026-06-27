"use client";

import React from "react";
import StickyBox from "react-sticky-box";
import SocialShareBtns from "./SocialShareBtns";
import AddToWishlistButton from "./AddToWishlistButton";

const CoursesDetailsSidebar = ({
	id,
	duration,
	lessons,
	access_time,
	user,
	currentUser,
	enrolments,
	videos = [],
	assets = [],
}) => {
	const videoCount = (videos ? videos.length : 0) + (assets ? assets.filter((a) => a.asset_type === "VIDEO").length : 0);
	const bookCount = assets ? assets.filter((a) => a.asset_type === "BOOK").length : 0;
	const docCount = assets ? assets.filter((a) => a.asset_type === "DOCUMENT").length : 0;

	return (
		<>
			<StickyBox className="sticky-box" offsetTop={100} offsetBottom={20}>
				<div className="courses-sidebar-sticky">
					<div className="courses-sidebar-information">
						<ul className="info">

							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-teacher"></i>{" "}
										Instructor
									</span>
									{user.name}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-time"></i>{" "}
										Duration
									</span>
									{duration}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-distance-learning"></i>{" "}
										Lessons
									</span>
									{lessons}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-web"></i>{" "}
										Enrolled
									</span>
									{enrolments ? enrolments.length : 0} students
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-lock"></i> Access
									</span>
									{access_time}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="bx bx-video"></i> Video Lectures
									</span>
									{videoCount}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="bx bx-book-open"></i> eBooks & Books
									</span>
									{bookCount}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="bx bx-file"></i> Documents & Slides
									</span>
									{docCount}
								</div>
							</li>
						</ul>

						<AddToWishlistButton
							courseId={id}
							currentUser={currentUser}
						/>

						<SocialShareBtns />
					</div>
				</div>
			</StickyBox>
		</>
	);
};

export default CoursesDetailsSidebar;
