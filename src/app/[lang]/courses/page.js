import { getCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CoursesList from "@/components/Courses/CoursesList";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";

export const metadata = {
	title: "Courses | Eduup - React Next.js Learning Management System",
};

const page = async ({ params, searchParams }) => {
	const { lang } = await params;
	const srchParams = await searchParams;
	const { courses, totalPages, totalCourses } = await getCourses(srchParams);
	const currentUser = await getCurrentUser();
	// console.log(totalPages);
	return (
		<>
			<PageBanner
				pageTitle="Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
				lang={lang}
			/>

			<CoursesList
				currentUser={currentUser}
				courses={courses}
				totalCourses={totalCourses}
				totalPages={totalPages}
				lang={lang}
			/>
		</>
	);
};

export default page;
