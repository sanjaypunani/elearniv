"use client";

import React from "react";
import { useParams } from "next/navigation";
import baseUrl from "@/utils/baseUrl";

const SocialShareBtns = () => {
	const { slug } = useParams();
	const courseUrl = `${baseUrl}/${slug}`;
	return (
		<div className="courses-share">
			<div className="share-info">
				<span>
					Share This Course <i className="flaticon-share"></i>
				</span>

				<ul className="social-link">
					<li>
						<a
							href={courseUrl}
							className="d-block"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bx bxl-facebook"></i>
						</a>
					</li>
					<li>
						<a
							href={courseUrl}
							className="d-block"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bx bxl-twitter"></i>
						</a>
					</li>
					<li>
						<a
							href={courseUrl}
							className="d-block"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bx bxl-pinterest"></i>
						</a>
					</li>
					<li>
						<a
							href={courseUrl}
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
	);
};

export default SocialShareBtns;
