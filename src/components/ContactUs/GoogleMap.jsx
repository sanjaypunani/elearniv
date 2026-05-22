"use client";

import React from "react";
import baseUrl from "@/utils/baseUrl";

const GoogleMap = () => {
	return (
		<>
			<div id="map">
				<div className="d-flex h-100 align-items-center justify-content-center rounded-3 bg-light p-5 text-center">
					<a
						href={baseUrl}
						target="_blank"
						rel="noreferrer"
						className="default-btn"
					>
						Visit Eduup <span></span>
					</a>
				</div>
			</div>
		</>
	);
};

export default GoogleMap;
