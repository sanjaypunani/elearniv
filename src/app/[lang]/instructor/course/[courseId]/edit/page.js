import PageNavigation from "@/components/Instructor/PageNavigation";
import { getSingleCourse } from "@/actions/instructor/getSingleCourse";
import CourseUpdateForm from "@/components/Instructor/CourseUpdateForm";

export async function generateMetadata({ params }) {
	const { courseId } = await params;
	const { course } = await getSingleCourse(courseId);
	return {
		title: course.title,
		openGraph: {
			images: [course.image],
		},
	};
}

const Page = async ({ params }) => {
	const { courseId, lang } = await params;
	const { course } = await getSingleCourse(courseId);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<PageNavigation
						courseId={courseId}
						{...course}
						lang={lang}
					/>

					<div className="create-course-form">
						<CourseUpdateForm course={course} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
