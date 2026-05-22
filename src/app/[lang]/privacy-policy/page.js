import PageBanner from "@/components/Shared/PageBanner";
import PolicyContent from "./PolicyContent";

export const metadata = {
	title: "Privacy Policy | Eduup - React Next.js Learning Management System",
};

const page = async ({ params }) => {
	const { lang } = await params;
	return (
		<>
			<PageBanner
				pageTitle="Privacy Policy"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Privacy Policy"
				lang={lang}
			/>

			<PolicyContent />
		</>
	);
};

export default page;
