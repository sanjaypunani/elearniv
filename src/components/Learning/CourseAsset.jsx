"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const CourseAsset = ({ courseId }) => {
	const [assets, setAssets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAssets = async () => {
			try {
				const url = `/api/courses/${courseId}/asset`;
				const response = await axios.get(url);
				setAssets(response.data);
			} catch (error) {
				console.error("Error fetching materials", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAssets();
	}, [courseId]);

	if (isLoading) {
		return <div className="text-center py-4">Loading materials...</div>;
	}

	const videos = assets.filter((asset) => asset.asset_type === "VIDEO");
	const books = assets.filter((asset) => asset.asset_type === "BOOK");
	const documents = assets.filter((asset) => asset.asset_type === "DOCUMENT");

	const renderGroup = (title, items, icon, color) => {
		if (items.length === 0) return null;
		return (
			<div className="mb-4">
				<h4 className="border-bottom pb-2 mb-3 fw-bold fs-18">
					<i className={`bx ${icon} me-2`} style={{ color, verticalAlign: "middle" }}></i>
					{title} <span className="badge bg-secondary fs-12 ms-1">{items.length}</span>
				</h4>
				<div className="row">
					{items.map((asset) => (
						<div className="col-lg-4 col-md-6 mb-3" key={asset.id}>
							<div className="card shadow-sm border-0 h-100 d-flex flex-row align-items-center p-3 bg-white">
								<div className="pe-2">
									<i
										className={`bx ${icon}`}
										style={{
											fontSize: "45px",
											color: color,
										}}
									></i>
								</div>
								<div className="flex-grow-1 min-width-0 overflow-hidden">
									<h6 className="card-title mb-2 text-truncate text-dark fw-semibold" title={asset.lecture_name}>
										{asset.lecture_name}
									</h6>
									<button
										className="btn btn-sm btn-outline-success d-inline-flex align-items-center gap-1 py-1"
										onClick={() => window.open(asset.asset_zip)}
									>
										Download <i className="bx bx-down-arrow-circle"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="courses-details-desc-style-two">
			<div className="container px-0">
				{assets.length === 0 ? (
					<div className="text-center py-5 border rounded bg-light">
						<i className="bx bx-folder-open text-muted" style={{ fontSize: "60px" }}></i>
						<p className="mt-2 text-muted mb-0">No learning materials have been uploaded for this course yet.</p>
					</div>
				) : (
					<>
						{renderGroup("🎬 Videos & Screen recordings", videos, "bx-video-recording", "#0d6efd")}
						{renderGroup("📖 Textbooks & eBooks", books, "bx-book-open", "#fd7e14")}
						{renderGroup("📄 Lecture Slides & Documents", documents, "bx-file", "#198754")}
					</>
				)}
			</div>
		</div>
	);
};

export default CourseAsset;
