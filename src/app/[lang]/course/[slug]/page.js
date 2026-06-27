import { getCurrentUser } from "@/actions/getCurrentUser";
import { getSingleCourse } from "@/actions/getSingleCourse";
import PageBanner from "@/components/Shared/PageBanner";
import CoursesDetailsContent from "@/components/SingleCourses/CoursesDetailsContent";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";
import prisma from "@/libs/prismadb";

export async function generateMetadata({ params }) {
	const { course } = await getSingleCourse(params);
	return {
		title: course.title,
		description: stripHtmlAndTruncate(course.overview, 50),
		openGraph: {
			images: [course.image],
		},
	};
}

const page = async ({ params }) => {
	const { lang } = await params;
	const { course } = await getSingleCourse(params);
	const currentUser = await getCurrentUser();

	// Check if the current user is already enrolled in this course
	let isEnrolled = false;
	if (currentUser && course) {
		const enrolment = await prisma.enrolment.findFirst({
			where: {
				userId: currentUser.id,
				courseId: course.id,
			},
		});
		isEnrolled = !!enrolment;
	}

	return (
		<>
			<PageBanner
				pageTitle={course.title}
				homePageUrl="/"
				homePageText="Home"
				activePageText={course.title}
				lang={lang}
			/>

			<CoursesDetailsContent
				currentUser={currentUser}
				course={course}
				lang={lang}
				isEnrolled={isEnrolled}
			/>
		</>
	);
};

export default page;
