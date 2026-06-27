"use client";

import React from "react";

const CourseAssets = ({ id: assetId, lecture_name, asset_zip, asset_type, onDelete }) => {
	const getAssetDetails = (type, url) => {
		const lowerUrl = url ? url.toLowerCase() : "";
		if (type === "VIDEO") {
			return {
				icon: "bx-video-recording",
				color: "#0d6efd",
				badgeText: "Video",
				badgeClass: "bg-primary"
			};
		}
		if (type === "BOOK" || lowerUrl.endsWith(".epub") || lowerUrl.endsWith(".mobi")) {
			return {
				icon: "bx-book-open",
				color: "#fd7e14",
				badgeText: "Book",
				badgeClass: "bg-warning text-dark"
			};
		}
		if (lowerUrl.endsWith(".pdf")) {
			return {
				icon: "bxs-file-pdf",
				color: "#dc3545",
				badgeText: "PDF",
				badgeClass: "bg-danger"
			};
		}
		return {
			icon: "bx-file",
			color: "#198754",
			badgeText: "Document",
			badgeClass: "bg-success"
		};
	};

	const details = getAssetDetails(asset_type, asset_zip);

	return (
		<div className="col-lg-4 col-md-6">
			<div className="card shadow-sm border-0 h-100">
				<div className="text-center pt-4 position-relative">
					<span className={`badge ${details.badgeClass} position-absolute top-0 end-0 m-3 fs-12 px-2 py-1`}>
						{details.badgeText}
					</span>
					<i
						className={`bx ${details.icon}`}
						style={{ fontSize: "90px", color: details.color }}
					></i>
				</div>
				<div className="card-body d-flex flex-column justify-content-between">
					<h5 className="card-title text-center text-truncate mb-3" title={lecture_name}>
						{lecture_name}
					</h5>

					<div className="d-flex justify-content-center gap-2">
						<button
							className="btn btn-success btn-sm"
							onClick={() => window.open(asset_zip)}
						>
							Download <i className="bx bx-down-arrow-circle"></i>
						</button>

						<button
							onClick={() => onDelete(assetId)}
							className="btn btn-outline-danger btn-sm"
						>
							Delete <i className="bx bx-trash"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseAssets;
