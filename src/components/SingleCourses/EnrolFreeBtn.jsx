"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EnrolFreeBtn = ({ courseId, slug, lang, isEnrolled: initialIsEnrolled }) => {
	const router = useRouter();
	const [isEnrolled, setIsEnrolled] = useState(initialIsEnrolled);
	const [loading, setLoading] = useState(false);

	const handleEnrol = async () => {
		setLoading(true);
		try {
			await axios.post(`/api/enrolments/${courseId}`);
			toast.success("You're enrolled! Redirecting to My Learning…");
			setIsEnrolled(true);
			router.refresh();
			router.push(`/${lang}/learning/my-courses`);
		} catch (err) {
			const message =
				err?.response?.data?.message || "Something went wrong. Please try again.";
			// If already enrolled, just redirect
			if (err?.response?.status === 409) {
				toast.success("Already enrolled — taking you to My Learning!");
				router.push(`/${lang}/learning/my-courses`);
			} else if (err?.response?.status === 401) {
				toast.error("Please login first.");
				router.push(`/${lang}/auth/student`);
			} else {
				toast.error(message);
			}
		} finally {
			setLoading(false);
		}
	};

	if (isEnrolled) {
		return (
			<Link
				href={`/${lang}/learning/my-courses`}
				className="default-btn"
				id="go-to-learning-btn"
			>
				<i className="flaticon-distance-learning"></i> Go to My Learning{" "}
				<span></span>
			</Link>
		);
	}

	return (
		<button
			className="default-btn"
			onClick={handleEnrol}
			disabled={loading}
			id="enrol-free-btn"
		>
			{loading ? (
				<>
					<i className="bx bx-loader-alt bx-spin"></i> Enrolling…{" "}
					<span></span>
				</>
			) : (
				<>
					<i className="flaticon-tick"></i> Enrol Now <span></span>
				</>
			)}
		</button>
	);
};

export default EnrolFreeBtn;
