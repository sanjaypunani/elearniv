"use client";

import React from "react";
import useFavourite from "@/hooks/useFavorite";

const AddToWishlistButton = ({ courseId, currentUser }) => {
	const { hasFauvorited, toggleFavourite } = useFavourite({
		courseId,
		currentUser,
	});

	return (
		<div className="btn-box">
			<button
				className="default-btn w-100"
				onClick={toggleFavourite}
				id={`wishlist-btn-${courseId}`}
			>
				{hasFauvorited ? (
					<>
						<i className="bx bxs-heart"></i> In Wishlist <span></span>
					</>
				) : (
					<>
						<i className="bx bx-heart"></i> Add to Wishlist <span></span>
					</>
				)}
			</button>
		</div>
	);
};

export default AddToWishlistButton;
