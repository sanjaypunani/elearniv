import { getCurrentUser } from "@/actions/getCurrentUser";
import RoleAuthPage from "@/components/Auth/RoleAuthPage";
import PageBanner from "@/components/Shared/PageBanner";
import { getAuthRedirectPath } from "@/utils/authRedirectPath";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Student Login | Eduup",
};

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}/${getAuthRedirectPath(currentUser)}`);
	}

	return (
		<>
			<PageBanner
				pageTitle="Student Login"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Student Login"
				lang={lang}
			/>
			<RoleAuthPage lang={lang} type="student" />
		</>
	);
};

export default page;
