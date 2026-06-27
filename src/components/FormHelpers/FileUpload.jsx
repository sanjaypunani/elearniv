"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";

const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET;

const FileUpload = ({ onChange, value, label = "Upload File" }) => {
	const handleUpload = useCallback(
		(result) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);

	// Determine file icon based on file extension
	const getFileIconAndName = (url) => {
		if (!url) return { icon: "bx-file", color: "#6c757d", label: "File" };
		const lowercaseUrl = url.toLowerCase();
		if (lowercaseUrl.endsWith(".pdf")) {
			return { icon: "bxs-file-pdf", color: "#dc3545", label: "PDF Document" };
		}
		if (lowercaseUrl.endsWith(".epub") || lowercaseUrl.endsWith(".mobi")) {
			return { icon: "bx-book-open", color: "#fd7e14", label: "eBook" };
		}
		if (lowercaseUrl.endsWith(".zip") || lowercaseUrl.endsWith(".rar") || lowercaseUrl.endsWith(".tar") || lowercaseUrl.endsWith(".gz")) {
			return { icon: "bxs-file-archive", color: "#ffc107", label: "Archive (Zip/Rar)" };
		}
		if (lowercaseUrl.endsWith(".doc") || lowercaseUrl.endsWith(".docx")) {
			return { icon: "bxs-file-doc", color: "#0d6efd", label: "Word/Docx" };
		}
		return { icon: "bx-file", color: "#198754", label: "Document/File" };
	};

	const fileInfo = getFileIconAndName(value);

	return (
		<div className="form-group">
			<label className="form-label fw-semibold">{label}</label>
			<CldUploadWidget
				onSuccess={handleUpload}
				uploadPreset={uploadPreset}
				options={{ maxFiles: 1 }}
				showPoweredBy={false}
			>
				{({ open }) => {
					return (
						<>
							<div
								onClick={() => open?.apply()}
								className="img-thumbnail mb-3"
								style={{ cursor: "pointer" }}
							>
								<div className="text-center py-3">
									<i className="bx bx-upload fs-2 mb-2 text-primary"></i>
									<div>Click to upload Book or Document</div>
									<div className="form-text text-muted">
										Supports PDF, EPUB, DOCX, ZIP, etc.
									</div>
								</div>
							</div>

							{value && (
								<div className="text-center position-relative mb-3 border rounded p-3 bg-light d-flex align-items-center justify-content-center flex-column">
									<Link href={value} target="_blank">
										<i
											className={`bx ${fileInfo.icon}`}
											style={{
												fontSize: "80px",
												color: fileInfo.color,
											}}
										></i>
									</Link>
									<div className="mt-2 fw-semibold text-truncate" style={{ maxWidth: "100%" }}>
										{fileInfo.label}
									</div>
									<div className="fs-12 text-muted text-break" style={{ maxWidth: "100%" }}>
										{value.split("/").pop()}
									</div>
								</div>
							)}
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default FileUpload;
