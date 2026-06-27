import { myLearning } from "@/actions/myLearning";
import PageBanner from "@/components/Shared/PageBanner";
import Content from "./Content";

const page = async ({ params }) => {
	const { lang } = await params;
	const { enrolments } = await myLearning();
	return (
		<>
			<PageBanner
				pageTitle="My Enrolments"
				homePageUrl="/"
				homePageText="Home"
				activePageText="My Enrolments"
				lang={lang}
			/>

			<Content enrolments={enrolments} lang={lang} />
		</>
	);
};

export default page;

