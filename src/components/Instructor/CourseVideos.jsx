"use client";

import Image from "next/image";
import React from "react";

const CourseVideos = ({
	id: videoId,
	title,
	thumb_Image,
	short_id,
	onDelete,
}) => {
	const defaultThumb = "https://res.cloudinary.com/dev-empty/image/upload/v1661244431/preview-video_b8v9bx.jpg";
	const src = thumb_Image || defaultThumb;

	return (
		<div className="col-lg-3 col-md-6">
			<div className="card shadow-sm border-0 h-100">
				<div className="position-relative">
					<span className="badge bg-primary position-absolute top-0 start-0 m-2 fs-12 px-2 py-1">
						Order: {short_id}
					</span>
					<Image
						src={src}
						className="card-img-top"
						width={750}
						height={500}
						alt="thumbnail"
						style={{ objectFit: "cover", height: "180px" }}
					/>
				</div>
				<div className="card-body d-flex flex-column justify-content-between">
					<h5 className="card-title fs-15 text-dark fw-bold mb-3">{title}</h5>

					<button
						onClick={() => onDelete(videoId)}
						className="btn btn-outline-danger btn-sm w-100"
					>
						Delete <i className="bx bx-trash"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseVideos;
